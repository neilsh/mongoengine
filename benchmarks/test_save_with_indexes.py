import pytest
from mongoengine import Document, IntField, StringField


class User0(Document):
    name = StringField()
    age = IntField()


class User1(Document):
    name = StringField()
    age = IntField()
    meta = {"indexes": [["name"]]}


class User2(Document):
    name = StringField()
    age = IntField()
    meta = {"indexes": [["name", "age"]]}


class User3(Document):
    name = StringField()
    age = IntField()
    meta = {"indexes": [["name"]], "auto_create_index_on_save": True}


class User4(Document):
    name = StringField()
    age = IntField()
    meta = {"indexes": [["name", "age"]], "auto_create_index_on_save": True}


@pytest.mark.parametrize(
    "user_cls",
    [
        pytest.param(User0, id="0 indexes"),
        pytest.param(User1, id="1 index"),
        pytest.param(User2, id="2 indexes"),
        pytest.param(User3, id="1 index (auto_create)"),
        pytest.param(User4, id="2 indexes (auto_create)"),
    ],
)
def test_save_with_indexes(benchmark, db, user_cls):
    user_cls.drop_collection()
    benchmark(lambda: user_cls(name="Nunu", age=9).save())
