#!/usr/bin/env python
# coding: utf-8

# In[76]:


import tf2onnx
import os
from joblib import load
from sklearn.model_selection import train_test_split
import pandas as pd
from keras.models import load_model


# In[77]:


model = load_model(os.getenv("additional_output_folder_path"))


# In[78]:


def preprocess(raw_json_filename):
    df = pd.read_json(raw_json_filename)
    df_float = df.select_dtypes(include=float).astype("float32")
    df_not_float = df.select_dtypes(exclude=float)
    df = df_float.join(df_not_float)
    X = df[["petal_width", "sepal_length", "petal_length", "sepal_width"]].values
    y = df[["species"]].values
    encoder = load(
        os.getenv("additional_output_folder_path") + "species_encoder.npy")
    Y = encoder.transform(y).toarray()

    return train_test_split(
        X, Y, test_size=0.2, random_state=0)


# In[79]:


X_train, X_test, y_train, y_test = preprocess(
    os.getenv("collection_data_1_path"))


# In[80]:


history = model.fit(X_train, y_train, batch_size=50, epochs=100)


# In[81]:


loss, accuracy = model.evaluate(X_test, y_test, verbose=0)
print('Test loss:', loss)
print('Test accuracy:', accuracy)

filename = os.getenv("accuracy_path")
f = open(filename, "w")
f.write(str(history.history['accuracy'][-1]))
f.close()


# In[82]:


model.save(os.getenv("additional_output_folder_path"))


# In[83]:


tf2onnx.convert.from_keras(model, output_path=os.getenv("model_file_path"))
