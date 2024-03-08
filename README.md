# Model Management IPM

## Workflow video

<a href='https://youtu.be/apiui5G7mzk' target="_blank">YouTube Video</a>

## Contents

### [Overview](#overview-1)

### [System installation](#system-installation-1)

### [Setup](#setup-1)

### [Usage](#usage-1)

- #### [Models tab](#models-tab-1)
- #### [Jobs tab](#jobs-tab-1)
- #### [Pipelines tab](#pipelines-tab-1)

### [System overview diagram](#System-Overview-Diagram-1)

### [Assets](#assets-1)

- #### [Code services](#code-services-1)
- #### [Collections](#collections-1)
- #### [Edges](#edges-1)
- #### [Portals](#portals-1)

## Overview

This package has an accompanying portal UI with Models, Jobs, and Pipelines tabs. You can upload .onnx models in the Models tab, deploy them to edges, and view model retraining history. You can upload training scripts and retrain uploaded models (from the Models tab) on a timer in the Jobs tab. You can set up inferencing pipelines using uploaded models in the Pipelines tab.

This IPM package contains one or more reusable assets within the IPM community. The 'package.json' in this repo is an IPM spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse IPM packages](https://ipm.clearblade.com)

## System installation

1. Open the [ClearBlade Platform](https://platform.clearblade.com/) and enter your login credentials.

2. Click on **Add System** -> **Advanced** and copy the repository's link in the box.

```
https://github.com/ClearBlade/model-management-ipm
```

3. Click **Create**, and you can now access this system in the Platform.

## Setup

Create a user with permissions `Administrator`.
Open the `model-management` portal in the Portals tab on the ClearBlade Platform and log in with the newly created user.
Press the preview button in the top left corner to go into full view.
Click on the top right user icon and select `Dev Token` from the dropdown.
Enter your developer token (accessible in `platform.clearblade.com/console/account/detail`) to use certain pipeline features.

## Usage

All usage flows are also demonstrated in the video above.

### Models tab

Use model when referring to a model entry in the Models Tab and model when referring to your `.onnx` model.

#### Uploading a model

Go to the Models tab -> Click on the add icon-> Upload a `.onnx` model, name the model, and hit create.

#### Viewing model history

A model has a history when it's targetted by a retraining job (with `Update Existing Model` selected). When a model has history, the history shows up automatically in the model details.

#### Deploying models to an edge

For a model without history, deploy a model to the edge by initially selecting edges in the model create form or, after creating the model, selecting additional edges in the model edit form.

For a model with history, you can deploy any version of the model to the edge.

#### Create mock pipeline

Quickly creates a [pipeline](#pipelines-tab). Most likely needs more configuration.

### Jobs tab

A job contains your local training scripts running in the cloud (or edge) on a timer. You upload training scripts that output the model file, evaluation metrics, and additional files at the paths we specify below. The job runs your scripts on the timer tick and uploads the output files to the Platform.

#### Base model

Model to retrain on. If the `Update Existing Model` checkbox is selected, then the model created by a job is appended to the base model's history. If not, a new model is created in the Models tab.

#### Training edge

The edge to perform retraining on. This edge must have `Docker` installed. The following links can help if you are unfamiliar with spinning up an edge: https://docs.clearblade.com/iotenterprise/edge, https://docs.clearblade.com/iotenterprise/edge-tutorial.

#### Training frequency

How often the job runs.

#### Update existing model

See Base model.

#### Collection data ingestion

Usually, you want to retrain on ClearBlade collection data. Conversely, you could retrain raw files by uploading files to the training edge's inbox or the Platform's outbox (which also ends up in the edge's inbox). You could do a mix of these. During runtime, the job runs your ingestion queries against the collections. It sends the results to the training edge into a `collection_data_<index>.json` file.

When specifying a collection data ingestion, there are `Query`, `New Data Only?`, and `New Data Only Collection` fields to complete.

- `Query`: The SQL query to run against the collections. It could be as simple as `SELECT * FROM iris` or complicated `JOIN` queries.
- `New Data Only?`: If true, only the new data populated in the `New Data Only Collection` (since the last retrain) are sent to the training edge. Select new data internally by appending a `WHERE item_id IN (<new_ids>)` clause to your `query`. This is not rigorous: Appending this `WHERE` clause at the end of the `query` might not work with complex queries.
- `New Data Only Collection`: The collection name in the `query` to select the new data. **This collection must have a timestamp column named `created`**. Only one collection name is specified. This means joining on the latest multiple collection data is not supported.

Example #1: Send the newest data from the `iris` collection:

- `Query`: `SELECT * FROM iris`
- `New Data Only?`: True
- `New Data Only Collection`: iris

Example #2: Send the newest data from collection `event_history` with extra `event` information.

- `Query`: `SELECT * FROM event_history INNER JOIN events ON event_history.event_id = events.id`
- `New Data Only?`: True
- `New Data Only Collection`: event_history

This data is in a `collection_data_<index>.json` file that your training scripts can access during job runtime. This JSON file's path can also be accessed with the environment variable `collection_data_<index>_path` that the job injects at runtime. This means that your training scripts must be designed in advance to fetch from these `JSON` files. Therefore, you can name your training files as we do and test your training scripts locally in an environment created by the `env.list` file below in `Additional Info`.

#### Upload requirements file

The [Python requirements file](https://pip.pypa.io/en/stable/reference/requirements-file-format/). Internally, `pip` installs libraries specified by this `.txt` file in a **Python 3.9 Docker container** at job runtime. Support for custom Python container versions is a TODO.

#### Additional input files

Usually, you can't directly retrain with just a `.onnx` file. You also need the model weights from the previous training. Upload additional files, like the model weight files.

#### Scripts to run during retraining

Scripts will run in uploaded order. Typicaly you only need one retraining script. The script must do the following:

- Load training data. Retraining collection data means loading the JSON files using the env var `collection_data_<index>_path`.
- Load the previous model using the env var `additional_output_folder_path`.
- Fit model on training data.
- Convert the new model to `.onnx`. For TensorFlow to ONNX conversion, you can use [this](https://github.com/onnx/tensorflow-onnx).
- Output the ONNX model at env var `model_file_path`; output additional outputs at env var `additional_output_folder_path`; output metrics at `<metric_name>_path`.

#### Evaluation metrics

If `accuracy` is a target metric, then:

- Add `accuracy` to evaluation metrics.
- Edit your training scripts to output the model's `accuracy` to file `accuracy.txt` (accessible using environment variable `accuracy_path`).
- The job checks for `accuracy.txt` and creates a `model` (or updated model history) with `accuracy`.

#### Additional info

The job injects environment variables available in your training scripts to ease reading and output to paths we specified. The environment file looks like this:

```
model_file_path: File path to output your model
additional_output_folder_path: Directory path to output additional files, like model weights
<metric_name>_path: Path to output metric
collection_data_<index>_path: File path to JSON file produced by collection data ingestion #<index>
```

### Pipelines tab

A pipeline is a directed graph. There are MQTT Pub, MQTT Sub, model, and library pipeline nodes. They perform custom functionalities and pass the result to their children. They are customized and composed to do many things, such as creating a general model inferencing stream service (subscribe to inbound topic, preprocess inference input, inference, and publish result).

#### MQTT Pub

Publishes the parents' results. If there are multiple parents, the parents' results are interpreted as a key-value pair (keys are parent IDs, and values are parent results).

#### MQTT Sub

Halts the pipeline. On a message receive, it passes a message to the children and continues the pipeline.

#### Model

Model nodes run the parents' result through the specified ONNX model. If there are multiple parents, the parents' results are interpreted as a key-value pair (keys are parent IDs, and values are parent results). The parents' results are currently directly put through the first input layer. The first output layer's results are this model's results. Multiple input and output layers are not supported.

##### Using features

Often, at inference time, a model pipeline wishes to take in a JSON objects array as the inference input (an array because models support batch inferencing). However, despite being trained on columned data, the model only directly inferences on preprocessed, normalized, and "array-ified" data. The temporary `Using Features` utility converts JSON arrays to array of arrays quickly. Input the feature names in the order the model takes them.
For example, input feature names `a`, `b`, and `c` to convert from.

`[{a: 1, b: 2, c: 3}, {a: 4, b: 5, c: 6 }]` to `[[1, 2, 3], [4, 5, 6]]`

You need a custom library if normalization should be done between the pipeline and model input. Ideally, there will be support that allows for quick translation between a Python preprocessing pipeline into JavaScript and then into a ClearBlade library.

#### Library

Library nodes run the parents' results through the exec function of the specified [library](https://docs.clearblade.com/iotenterprise/code#Code-Libraries). If there are multiple parents, the parents' results are interpreted as a key-value pair (keys are parent IDs, and values are parent results). **The specified library must have a name prefixed with `pipelib_` and an "exec" function**.

Internally, models and libraries are preloaded. And children access parents' results instead of parents passing results to children.

### System overview diagram

[Pipeline diagram](resources/pipeline-diagram.png)

[Model and retraining diagram](resources/job-model-diagram.png)

## Assets

### Code services

The core logic lies in

`trainingHandler`: Retraining timers execute `trainingHandler` on tick. This service sends collection data to the training edge and issues a signal to the edge to start training.
`train`: Initializes training environment using Docker; runs your training scripts and then propagates specified outputs upstream (which includes at least the model file).
`pipeline_template`: Contains pipeline runtime logic. The process of a pipeline running boils down to an async dependency resolution algorithm.

Helper services:

`acceptMLData`: Listens for retraining collection data (received from `trainingHandler`).
`awaitJobInterrupt`: Listens for a job interrupt signal.
`createPipelineService`: Fetch `pipeline_template`, replace certain keywords, and create a unique service.
`fetchTableItems`: Currently unused, ClearBlade preloader optimization.
`fetchTimer`: As name.
`handleJobStatusMessage`: Listens for job error, undergoing, idle, and success messages. On success, this service also creates a model row (the actual model is propagated using bucketsets).
`increasePermissions`: Used to give the administrator role permission to the underlying job training and model bucketset.
`setupMLJob`: Creates underlying structures of a job (timer, deployment, bucketset) and a row in the job collection.
`setupModel`: Creates underlying structures of a model (deployment, bucketset) and a row in the model collection.
`updateJob`: Similar to `setupMLJob`
`updateModel`: Similar to `setupModel`
`removeMLJob`: Removes underlying structures of a job and its collection row.
`removeModel`: Removes underlying structures of a model and its collection row.

### Collections

`Jobs`, `models`, and `pipelines` contain information necessary to support a durable UI and keep track of the backend.

### Portals

`model-management`: Where you'll see the Models, Jobs, and Pipelines Tabs. You can see a preview of its page [here](resources/pipelines-page.png).

### Edges

`training_edge`: An unconnected edge row. Job retraining can't be done on the Platform: You must connect this edge to a remote machine with Docker installed and capable of training.
