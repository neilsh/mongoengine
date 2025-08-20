import os

import pytest
from pymongo import MongoClient

import mongoengine


@pytest.fixture(scope="module")
def db():
    """
    Connects to a test database, drops it, and disconnects after the tests.
    """
    mongodb_uri = os.environ.get("MONGODB_URI", "mongodb://localhost/")
    connection = mongoengine.connect(
        db="mongoengine_benchmark_test",
        w=1,
        host=mongodb_uri,
        directConnection=True,
    )
    connection.drop_database("mongoengine_benchmark_test")
    yield
    mongoengine.disconnect()


@pytest.fixture
def pymongo_client():
    """
    Provides a PyMongo client, drops the database, and closes the connection.
    """
    mongodb_uri = os.environ.get("MONGODB_URI", "mongodb://localhost/")
    client = MongoClient(mongodb_uri, directConnection=True)
    client.drop_database("mongoengine_benchmark_test")
    yield client
    client.close()
