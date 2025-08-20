from mongoengine import (
    BooleanField,
    Document,
    EmailField,
    EmbeddedDocument,
    EmbeddedDocumentField,
    IntField,
    ListField,
    StringField,
)


def test_basic_doc_initialization(benchmark):
    class Book(Document):
        name = StringField()
        pages = IntField()
        tags = ListField(StringField())
        is_published = BooleanField()
        author_email = EmailField()

    def init_book():
        return Book(
            name="Always be closing",
            pages=100,
            tags=["self-help", "sales"],
            is_published=True,
            author_email="alec@example.com",
        )

    benchmark(init_book)


def test_basic_doc_get_attr(benchmark):
    class Book(Document):
        name = StringField()

    b = Book(name="Old Name")

    def get_attr():
        return b.name

    benchmark.pedantic(get_attr, iterations=100, rounds=100)


def test_basic_doc_set_attr(benchmark):
    class Book(Document):
        name = StringField()

    b = Book(name="Old Name")

    def set_attr():
        b.name = "New Name"

    benchmark.pedantic(set_attr, iterations=100, rounds=100)


def test_basic_doc_to_mongo(benchmark):
    class Book(Document):
        name = StringField()
        pages = IntField()
        tags = ListField(StringField())

    b = Book(name="Test", pages=100, tags=["test"])
    benchmark(b.to_mongo)


def test_basic_doc_validation(benchmark):
    class Book(Document):
        name = StringField()
        pages = IntField()
        tags = ListField(StringField())

    b = Book(name="Test", pages=100, tags=["test"])
    benchmark(b.validate)


def test_basic_doc_save(benchmark, db):
    class Book(Document):
        name = StringField()
        tags = ListField(StringField())

    Book.drop_collection()
    b = Book(name="Test", tags=["test"])

    def save_book():
        b._mark_as_changed("name")
        b._mark_as_changed("tags")
        b.save()

    benchmark(save_book)


def test_basic_doc_load_from_son(benchmark):
    class Book(Document):
        name = StringField()
        pages = IntField()
        tags = ListField(StringField())

    b = Book(name="Test", pages=100, tags=["test"])
    son = b.to_mongo()
    benchmark(lambda: Book._from_son(son))


def test_basic_doc_load_from_db(benchmark, db):
    class Book(Document):
        name = StringField()

    Book.drop_collection()
    Book(name="Test").save()
    benchmark(lambda: Book.objects[0])


def test_basic_doc_create_delete(benchmark, db):
    class Book(Document):
        name = StringField()

    Book.drop_collection()

    def create_and_delete():
        Book(name="test").save()
        Book.objects.first().delete()

    benchmark(create_and_delete)


def test_big_doc_to_mongo(benchmark):
    class Contact(EmbeddedDocument):
        name = StringField()

    class Company(Document):
        name = StringField()
        contacts = ListField(EmbeddedDocumentField(Contact))

    company = Company(
        name="MongoDB, Inc.",
        contacts=[Contact(name=f"Contact {x}") for x in range(1000)],
    )
    benchmark(company.to_mongo)


def test_big_doc_validation(benchmark):
    class Contact(EmbeddedDocument):
        name = StringField()

    class Company(Document):
        name = StringField()
        contacts = ListField(EmbeddedDocumentField(Contact))

    company = Company(
        name="MongoDB, Inc.",
        contacts=[Contact(name=f"Contact {x}") for x in range(1000)],
    )
    benchmark(company.validate)


def test_big_doc_save(benchmark, db):
    class Contact(EmbeddedDocument):
        name = StringField()

    class Company(Document):
        name = StringField()
        contacts = ListField(EmbeddedDocumentField(Contact))

    Company.drop_collection()
    company = Company(
        name="MongoDB, Inc.",
        contacts=[Contact(name=f"Contact {x}") for x in range(1000)],
    )
    company.save()

    def save_company():
        company._mark_as_changed("name")
        company._mark_as_changed("contacts")
        company.save()

    benchmark(save_company)


def test_big_doc_load_from_son(benchmark):
    class Contact(EmbeddedDocument):
        name = StringField()

    class Company(Document):
        name = StringField()
        contacts = ListField(EmbeddedDocumentField(Contact))

    company = Company(
        name="MongoDB, Inc.",
        contacts=[Contact(name=f"Contact {x}") for x in range(1000)],
    )
    son = company.to_mongo()
    benchmark(lambda: Company._from_son(son))


def test_big_doc_load_from_db(benchmark, db):
    class Contact(EmbeddedDocument):
        name = StringField()

    class Company(Document):
        name = StringField()
        contacts = ListField(EmbeddedDocumentField(Contact))

    Company.drop_collection()
    Company(
        name="MongoDB, Inc.",
        contacts=[Contact(name=f"Contact {x}") for x in range(1000)],
    ).save()
    benchmark(lambda: Company.objects[0])


def test_big_doc_create_delete(benchmark, db):
    class Contact(EmbeddedDocument):
        name = StringField()

    class Company(Document):
        name = StringField()
        contacts = ListField(EmbeddedDocumentField(Contact))

    Company.drop_collection()

    def create_and_delete():
        Company(
            name="MongoDB, Inc.",
            contacts=[Contact(name=f"Contact {x}") for x in range(1000)],
        ).save()
        Company.objects.first().delete()

    benchmark(create_and_delete)
