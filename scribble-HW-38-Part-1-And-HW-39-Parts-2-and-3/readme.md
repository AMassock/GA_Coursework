[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Scribble

![](https://dl.dropboxusercontent.com/s/8frf8rblw6pnpds/hipsterlogogenerator_1438007087793.png?dl=0)

Scribble is a Django application where users can read, write and interact with
the best content all around the world.

## Prerequisites

* Python
* `pipenv` and managing virtual environments
* Django views, templates, and models

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Fulfill the listed requirements.

Build your Django application in the root of this repository. **When asked if you
want to overwrite the readme, enter "n" (for no).**

## Requirements

This lab is broken up in to three parts, each focusing on a different piece of
the Django application.

### Part 1: Models + Migrations

Create models for `Post` and `Comment`.

A `Post` should have the following fields:

* `author` (`CharField`)
* `title`  (`CharField`)
* `body` (`CharField`)

A `Comment` should have the following fields:

* `author` (`CharField`)
* `body` (`CharField`)
* `post` (`ForeignKey` for `Post`)

Create migrations for `Post` and `Comment`.

Test your models by creating records in the database through the Django Shell.

### Part 2: Views

Now that you have your models and migrations, build out your views.

You need the following views:

1. List: Create an list view where a user can see all posts.
2. Detail: Create a detail view where a user can see each individual post. The
   show page should also list all of the post's comments.
3. Creating Posts and Comments: Allow the user to create new posts and comments.
4. Updating and Editing: Allow the user to edit existing posts and comments.
5. Deletion: Allow the user to delete existing posts and comments.

### Part 3: Templates

Your Scribble app will need the following templates:

1. List template: Create an list template where a user can see all posts. Each
   post should link to its respective detail page.
2. Detail template: Create a detail template where a user can see each
   individual post. The show page should also list all of the post's comments.
3. Forms for creating Posts and Comments: Allow the user to create new posts and
   comments.
4. Updating and Editing: Allow the user to edit existing posts and comments.
5. Deletion: Allow the user to delete existing posts and comments.  You can add
   this form or link in the detail view for posts.

## Plagiarism

Take a moment to refamiliarize yourself with the [Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md). Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
