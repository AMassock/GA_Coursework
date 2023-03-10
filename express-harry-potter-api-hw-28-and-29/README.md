[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Harry Potter API

Build an API of Hogwarts houses and their members!

## Prerequisites

- Node
- MongoDB and Mongoose
- Express

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Install dependencies.
1. Fulfill the listed requirements.

Complete your work inside of the [`lib/`](lib/) directory. Unless otherwise
specified by an instructor, your submission is due by the time on your cohort
calendar.

## Requirements

This lab is divided into two parts.

In the first part, you will set up your database and seed it with the JSON data
provided in the `db/` directory. You'll then build out a basic Express API for
reading and creating data in the API.

In the second part, you will build out the necessary routes for updating and
deleting data from the API.

> **Note:** Check your course calendar on when each part is do. Depending on how
> the schedule works out for your class, both parts could be assigned at once.
> Or each part below could have it's own due date. Follow what's provided on
> your course calendar.

### Part 1:

#### (a) Database Setup and Seeding

We've provided you with two sets of JSON data:
[`houses.json`](./lib/db/houses.json) and
[`characters.json`](./lib/db/characters.json). The `houses` data contains
a `member` property that is an array of ObjectIDs matching objects in the
`characters` data (the `_id` property).

Define a model to represent the houses inside of `houses.json` with a
subdocument model to represent the characters in `characters.json`.

Once your models are defined, write a seed file that takes the data in
`houses.json` and `characters.json` and seeds it into the database.

#### (b) Create and Read

Once you have the data seeded, implement the following routes for creating and
reading (the CR in CRUD). You'll need the following endpoints:

1. GET `/houses` - the houses list view (read)
2. GET `/houses/:id` - the houses detail view (read)
3. POST `/houses` - house create view (create)

### Part 2: Update and Delete

Your database is set up and you have the basic routes in place for creating and
reading data from your API. Now it's time to implement update and delete.

You'll need the following endpoints:

1. PUT `/houses/:id` - the house update route (update)
2. DELETE `/houses/:id` - the houses delete route (delete)

## Bonus

### Redirecting

Look up redirecting in Express and make is to there is a root route (GET `/`) that
redirects to the houses route (GET `/houses`).

### Implement CRUD on the Subdocument

You have the `characters` subdocument nested inside of the houses document.
Implement CRUD on this subdocument. You'll need the following:

- GET `/houses/:id/characters` - characters list route (read)
- GET `/houses/:id/characters/:id` - character detail route (read)
- POST `/houses/:id/characters` - character create route (create)
- PUT `/houses/:id/characters/:id` - character update route (update)
- DELETE `/houses/:id/characters/:id` - character delete route (delete)

Add yourself to your favorite house! I'm sure your letter for Hogwarts just got
lost in the mail.

### Query Strings

Implement [query strings](https://expressjs.com/en/4x/api.html#req.query). This
would allow someone to look up a house in the database by any property of the
document. For example:

- `/house?mascot=lion`
- `/house?houseGhost=The Grey Lady`
- `/house?headOfHouse=Severus Snape`

### `ref`

Rather than nesting the `Character` model in `House` as a subdocument, use the
model to create a `character` collection and `house` collection. Seed the data
into the two collections and then relate the two with a `ref`. That would mean
that your `members` property of a house would be an array of ObjectIDs from the
characters collection.

Check out [the documentation](https://mongoosejs.com/docs/populate.html) on how
to do this.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
