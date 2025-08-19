import pytest
import mongoengine


@pytest.fixture(scope="module")
def db():
    """
    Connects to a test database, drops it, and disconnects after the tests.
    """
    connection = mongoengine.connect(
        db="mongoengine_benchmark_test",
        w=1,
        host="localhost",
        directConnection=True,
    )
    connection.drop_database("mongoengine_benchmark_test")
    yield
    mongoengine.disconnect()
