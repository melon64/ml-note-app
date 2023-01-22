from google.cloud import cloud_storage
from google.cloud import storage
from datetime import datetime
import time
import logging

def upload_data_to_gcs(data, bucket_name='historical_images_directory'):
    try:
        # Instantiates a client
        storage_client = storage.Client()
        # The name for the new bucket
        bucket_name = "ImageBucket"

        file_name = "Image-" + datetime.fromtimestamp(time.time()).strftime('%Y-%m-%d-%H-%M-%S')

        # Creates the new bucket
        bucket = storage_client.create_bucket(bucket_name)
        bucket.blob(file_name).upload_from_string(data, predefined_acl='publicRead')

        return True, bucket.blob(file_name).public_url
    except:
        logging.error("Error uploading data to GCS")
        return False
    