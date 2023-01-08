CREATE EXTENSION IF NOT EXISTS "uuid-ossp"


CREATE TABLE Book(
  uuid uuid DEFAULT uuid_generate_v4(),
  book_name VARCHAR NOT NULL,
  author_name VARCHAR NOT NULL,
  PRIMARY KEY(uuid)
)

INSERT INTO Book(book_name,author_name) VALUES ('Harry Potter','J.K. Rowling')