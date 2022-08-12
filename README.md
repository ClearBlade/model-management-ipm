# Model Management IPM

<!-- ## Workflow Video

<a href='https://youtu.be/t70Nab7y4Do' target="_blank">
  <img src="./VideoImage.png" alt="Workflow"/>
</a> -->

## Contents

### [Overview](#overview-1)

### [System Installation](#system-installation-1)

### [Setup](#setup-1)

### [Usage](#usage-1)

- #### [Models Tab](#models-tab-1)
- #### [Jobs Tab](#jobs-tab-1)
- #### [Pipelines Tab](#pipelines-tab-1)

### [System Overview Diagram](#System-Overview-Diagram-1)

### [Assets](#assets-1)

- #### [Code Services](#code-services-1)
- #### [Collections](#collections-1)
- #### [Edges](#edges-1)
- #### [Portals](#portals-1)

## Overview

This package comes with an accompanying portal UI that has three tabs: Models, Jobs, and Pipelines. In the Models tab, you can upload `.onnx` models, deploy them to edges, and view model retraining history. In the Jobs tab, you can upload training scripts and retrain uploaded models (from the Models tab) on a timer. In the Pipelines tab, you can setup inferencing pipelines using uploaded models.

This is an ipm package containing one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## System Installation

1. Open the [ClearBlade Platform](https://platform.clearblade.com/) and enter your login credentials

2. Click on **Add System** -> **Advanced** and copy the link of this repository in the box.

```
https://github.com/ClearBlade/model-management-ipm
```

3. Click **Create** and you can now access this system in the platform.

## Setup

Create a user with permissions `Administrator`.
Open the `model-management` portal in the Portals tab on the Clearblade Platform and login with the newly created user.
Press the preview button in the top left corner to go into full view.
Click on the top right user icon and select `Dev Token` from the dropdown.
Enter your Developer Token (Accessible in `platform.clearblade.com/console/account/detail`) in order to use certain pipeline features.

## Usage

All usage flow are also demonstrated in the video above.

### Models Tab

I use Model when referring to a Model entry in the Models Tab, and model when referring to your `.onnx` model.

#### Uploading a Model

Go to the Models Tab -> Click on the add icon-> Upload a `.onnx` model, name the Model, and hit create.

#### Viewing Model History

A Model has history when it's targetted by a retraining Job (with `Update Existing Model` selected). When a Model has history, the history shows up automatically in the Model details.

#### Deploying Models to Edge

For a Model without history, deploy a model to edge by either initially selecting edges in the Model create form, or, after creating the Model, selecting additional edges in the Model edit form.
For a Model with history, you can deploy any version of the model to edge.

#### Create Mock Pipeline

Quickly creates a [Pipeline](#pipelines-tab). Most likely needs more configuration.

### Jobs Tab

A Job is basically your local training scripts running in the cloud (or edge) on a timer. You upload training scripts that output the model file, evaluation metrics, and additional files at paths we specify below. On timer tick, the job runs your scripts and uploads the output files to the platform.

I now go over the different fields in the Job create form.

#### Base Model

Model to retrain on. If the `Update Existing Model` checkbox is selected, then, the Model created by a Job is appended to the Base Model's history. If not, a new Model is created in the Models tab.

#### Training Edge

The edge to perform retraining on. This edge must have `docker` installed. If you are unfamiliar with spinning up an edge the following links can help: https://docs.clearblade.com/v/4/edge/, https://docs.clearblade.com/v/4/edge/tutorial/.

#### Training Frequency

How often Job runs.

#### Update Existing Model

See Base Model.

#### Collection Data Ingestion

Usually, you want to retrain on ClearBlade collection data. Conversely, you could retrain on raw files by either uploading files to the training edge's inbox or the platform's outbox (which also ends up to the edge's inbox). Of course, you could do a mix of these. During runtime, the job runs your ingestion queries against the Collections and sends the results to the training edge into a `collection_data_<index>.json` file.

When specifying a collection data ingestion, there are 3 fields to complete: `Query`, `New Data Only?`, and `New Data Only Collection`.

- `Query`: The SQL query to run against the collections. It could be as simple as `SELECT * FROM iris` or complicated `JOIN` queries.
- `New Data Only?`: If true, only the new data populated in the `New Data Only Collection` (since last retrain) are sent to the training edge. Selecting new data is done internally by appending a `WHERE item_id IN (<new_ids>)` clause to your `Query`. Note that this is not rigorous: With complex queries, appending this `WHERE` clause at the end of `Query` might not work.
- `New Data Only Collection`: The name of the collection in the `Query` to perform the new data selection on. **This collection must have a timestamp column named `created`**. Note that only one collection name is specified. This means, joining on the newest data of multiple collections is not supported.

Example #1: Send the newest data from collection `iris`:

- `Query`: `SELECT * FROM iris`
- `New Data Only?`: True
- `New Data Only Collection`: iris

Example #2: Send the newest data from collection `event_history` joined with extra information from `events`.

- `Query`: `SELECT * FROM event_history INNER JOIN events ON event_history.event_id = events.id`
- `New Data Only?`: True
- `New Data Only Collection`: event_history

These collection data ends up in a `collection_data_<index>.json` file that your training scripts can access during job runtime. This json file's path can also be accessed with the environment variable `collection_data_<index>_path` that the job injects at runtime. This means that your training scripts must be designed in advance to fetch from these `json` files. Therefore, you may want to name your training files the same way we do, and test your training scripts locally in an environment created by the `env.list` file below in `Additional Info`.

#### Upload Requirements File

The [python requirements file](https://pip.pypa.io/en/stable/reference/requirements-file-format/). Internally, `pip` installs libraries specified by this `.txt` file in a **Python3.9 docker container** at job runtime. Support for custom python container versions is a TODO.

#### Additional Input Files

Usually, you can't directly retrain with just a `.onnx` file. You also need the model weights from the previous training. Upload additional files, like the model weight file here.

#### Scripts to run during retraining

Scripts will run in uploaded order. In most situations you only need one retraining script. Script must do the following:

- Load training data. If retraining on collection data, this means to load the json files using the env var `collection_data_<index>_path`.
- Load previous model using the env var `additional_output_folder_path`.
- Fit model on training data.
- Convert new model to `.onnx`. For tensorflow to onnx conversion, you can use [this](https://github.com/onnx/tensorflow-onnx).
- Output the onnx model at env var `model_file_path`; output additional outputs at env var `additional_output_folder_path`; output metrics at `<metric_name>_path`.

#### Evaluation Metrics

If, say `accuracy` is a target metric. Then,

- Add `accuracy` to evaluation metrics.
- Edit your training scripts to output`accuracy` of the model to file `accuracy.txt` (accessible using environment variable `accuracy_path`).
- The job checks for `accuracy.txt` and creates `Model` (or updated Model history) with `accuracy`.

#### Additional Info

The job injects environment variables available in your training scripts to ease reading and outputting to paths we specified. The environment file looks like:

```
model_file_path: File path to output your model
additional_output_folder_path: Directory path to output additional files, like model weights
<metric_name>_path: Path to output metric
collection_data_<index>_path: File path to json file produced by collection data ingestion #<index>
```

### Pipelines Tab

A pipeline is a directed graph. There are 4 types of pipeline nodes: MQTT Pub, MQTT Sub, Model, and Library. Nodes perform custom functionalities and passes the result to its children. Nodes are customized and composed to do a multitude of things, such as creating a general model inferencing stream service (subscribe to inbound topic, preprocess inference input, inference, and publish result).

#### MQTT Pub

Publishes the parents' results. If there are multiple parents, the parents' results are interpretted as a key value pair (keys are parent IDs and values are parent results).

#### MQTT Sub

Halts the pipeline. On message receive, passes message to children and continue the pipeline.

#### Model

Model nodes run the parents' result through the specified onnx model. If there are multiple parents, the parents' results are interpretted as a key value pair (keys are parent IDs and values are parent results). Currently, the parents' results are directly put through the first input layer. The first output layer's results are the results of this model. Multiple input and output layers are not supported.

##### Using Features

Often, at inference time, a model pipeline wishes to take in an array of JSON object as the inference input (an array because models support batch inferencing). However, the model itself only directly inferences on preprocessed, normalized, and "array-ified" data despite being trained on columned data. I have provided a temporary `Using Features` utility to quickly convert arrays of JSON to array of arrays. Simply input the feature names in the order the model takes them.
For example, input feature names `a`, `b`, and `c` to convert from

`[{a: 1, b: 2, c: 3}, {a: 4, b: 5, c: 6 }]` to `[[1, 2, 3], [4, 5, 6]]`

Note that if there should be normalization done between the pipeline input and the model input, you still need a custom library to do so. Ideally, there will be support one day that allows for quick translation between a python preprocessing pipeline into javascript and then into a ClearBlade library.

#### Library

Library nodes runs the parents' results through the exec function of the specified [library](https://docs.clearblade.com/v/4/platform/code/#libraries). If there are multiple parents, the parents' results are interpretted as a key value pair (keys are parent IDs and values are parent results). **The specified library must have name prefixed with `pipelib_` and an "exec" function**.

Internally, models and libraries are preloaded. And, children access parents' results instead of parents passing results to children.

### System Overview Diagram

[Pipeline Diagram](resources/pipeline-diagram.png)

[Model and retraining Diagram](resources/job-model-diagram.png)

## Assets

### Code Services

The core logic lies in

`trainingHandler`: Retraining timers execute `trainingHandler` on tick. This service sends collection data to the training edge and issues a signal to the edge to start training.
`train`: Initializes training environment using docker; runs your training scripts and then propagates specified outputs upstream (which includes at least the model file).
`pipeline_template`: Contains pipeline runtime logic. The process of a pipeline running boils down to an async dependency resolution algorithm.

Helper services:

`acceptMLData`: Listens for retraining collection data (Receives from `trainingHandler`).
`awaitJobInterrupt`: Listens for job interrupt signal.
`createPipelineService`: Fetch `pipeline_template`, replace certain keywords, and create unique service.
`fetchTableItems`: Currently unused, Clearblade preloader optimization.
`fetchTimer`: As name.
`handleJobStatusMessage`: Listens for job error, undergoing, idle, and success messages. On success, this service also creates a Model row (the actual model is propagated using bucketsets).
`increasePermissions`: Used to give the role Administrator permission to the underlying Job training bucketset and Model bucketset.
`setupMLJob`: Creates underlying structures of a Job (timer, deployment, bucketset) and a row in the Job collection.
`setupModel`: Creates underlying structures of a Model (deployment, bucketset) and a row in the Model collection.
`updateJob`: Similar to `setupMLJob`
`updateModel`: Similar to `setupModel`
`removeMLJob`: Removes underlying structures of a Job and its collection row
`removeModel`: Removes underlying structures of a Model and its collection row.

### Collections

`jobs`, `models`, and `pipelines`. They contain information necessary to support a durable UI and keep track of the backend.

### Portals

`model-management`: Where you'll see the Models, Jobs, and Pipelines Tabs. You can see a preview of its page [here](resources/pipelines-page.png)

### Edges

`training_edge`: An unconnected edge row. Note that job retraining can't be done on the platform: You must connect this edge to a remote machine with docker installed and capable of training.
