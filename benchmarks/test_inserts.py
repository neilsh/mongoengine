import os
import pytest
from pymongo import WriteConcern

from mongoengine import DictField, Document


# PyMongo benchmarks
def test_pymongo_insert_w1(benchmark, pymongo_client):
    db = pymongo_client.mongoengine_benchmark_test
    noddy = db.noddy

    def insert():
        example = {"fields": {}}
        for j in range(20):
            example["fields"][f"key{j}"] = f"value {j}"
        noddy.insert_one(example)

    benchmark(insert)


def test_pymongo_insert_w0(benchmark, pymongo_client):
    db = pymongo_client.mongoengine_benchmark_test
    noddy = db.noddy.with_options(write_concern=WriteConcern(w=0))

    def insert():
        example = {"fields": {}}
        for j in range(20):
            example["fields"][f"key{j}"] = f"value {j}"
        noddy.insert_one(example)

    benchmark(insert)


# MongoEngine benchmarks
class Noddy(Document):
    fields = DictField()


@pytest.fixture()
def collection_setup(db):
    Noddy.drop_collection()


def test_mongoengine_insert_w1(benchmark, collection_setup):
    def insert():
        noddy = Noddy()
        for j in range(20):
            noddy.fields[f"key{j}"] = f"value {j}"
        noddy.save()

    benchmark(insert)


def test_mongoengine_insert_single_assignment(benchmark, collection_setup):
    def insert():
        noddy = Noddy()
        fields = {}
        for j in range(20):
            fields[f"key{j}"] = f"value {j}"
        noddy.fields = fields
        noddy.save()

    benchmark(insert)


def test_mongoengine_insert_w0(benchmark, collection_setup):
    def insert():
        noddy = Noddy()
        for j in range(20):
            noddy.fields[f"key{j}"] = f"value {j}"
        noddy.save(write_concern={"w": 0})

    benchmark(insert)


def test_mongoengine_insert_w0_novalidate(benchmark, collection_setup):
    def insert():
        noddy = Noddy()
        for j in range(20):
            noddy.fields[f"key{j}"] = f"value {j}"
        noddy.save(write_concern={"w": 0}, validate=False)

    benchmark(insert)


def test_mongoengine_insert_w0_novalidate_force(benchmark, collection_setup):
    def insert():
        noddy = Noddy()
        for j in range(20):
            noddy.fields[f"key{j}"] = f"value {j}"
        noddy.save(force_insert=True, write_concern={"w": 0}, validate=False)

    benchmark(insert)
