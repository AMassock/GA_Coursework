[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Book API

Use what we learned about the Django Rest Framework to build an API for your
local library.

This assignment is broken in to three parts. Check your course calendar to see
which parts are assigned and when they are due. In part one, you'll build
a simple API using the Django Rest Framework. In part two, you add
authentication to that API using the DRF's built-in authentication system. In
part three, you implement one of four possible bonus features to your API.

## Prerequisites

- Python
- Building APIs with Express
- Django

## Instructions

1.  Fork and clone this repository.
1.  Change into the new directory.
1.  Fulfill the listed requirements.

No starter code is provided for this assignment. Please do all your work in this
repository (i.e. your Pipfile should be at the root-level of this repository).

## Requirements

### Part 1: Book API

Your first task is to build the base API using Django and the Django Rest
Framework. You'll need to define the models necessary to track the books in the
library's inventory. Your models should include Book, Author, and Genre. Here
are the properties for each model:

**Book**:

- Title
- ISBN (unique)
- Publisher
- Publication date
- Description
- Cover image (optional)
- Author (Foreign Key)
- Genre (ManyToMany Field)

**Author**:

- Name
- Bio
- Date of birth
- Country of origin

Genre:

- Name
- Description

Once you have defined your models, you'll need to create the necessary
serializers and views to expose the API endpoints for CRUD (Create, Read,
Update, Delete) operations on the Book model. You should also be able to link
between models (i.e. your Book model should return URLs to your Author and Genre
models).

### Part 2: Authentication

Now that you have a functional API, it's time to add authentication using the
Django Rest Framework's [built-in session-based authentication
system](https://www.django-rest-framework.org/api-guide/authentication/). You'll
need to require authentication for any actions that modify the book inventory
(e.g. creating a new book, updating an existing book, or deleting a book).

### Part 3: Choose Your Own Adventure

For the final part of the assignment, you can choose one of the following
features to implement in your API:

1. [Validation](https://www.django-rest-framework.org/api-guide/validators/): Implement validation on the Book model to ensure that required fields are not left blank, and that ISBNs are unique.
2. [Throttling](https://www.django-rest-framework.org/api-guide/throttling/): Add throttling to limit the number of requests a client can make in a given time period. 
3. [Pagination](https://www.django-rest-framework.org/api-guide/pagination/): Implement pagination to limit the number of books returned in a single API response, and provide links to additional pages of results. 
4. [Filtering](https://www.django-rest-framework.org/api-guide/filtering/): Add filtering to allow clients to search for books by various criteria, such as title, author, genre, or publication date.

Whichever feature you choose to implement, be sure to document how it works and
how clients can use it in the API documentation. Good luck, and have fun
building your API!

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
