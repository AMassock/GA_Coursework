[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# DOTS: The Game

Dots is an interactive game with up to 3 levels. In each level, the user has to
click a moving dot until they reach a certain score, at which point they can
move on to the next level.

## Prerequisites

- HTML and CSS
- Programming with JavaScript
- JavaScript and the DOM
- Events and Event Handlers

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Fulfill the listed requirements.

Starter code is available in [`lib/`](lib/). You are required to turn in your
submission by making a pull request on the original repository.

Unless otherwise specified on the calendar or by an instructor, homework is due
the next morning by 9:00am.

## Requirements

Please commit after finishing each level.

## Level 1

For level 1, implement a single event listener to the `.js-dot` element. When
the user clicks on the dot, it should increment their score by 10 points. When
the user reaches 100 points, they've beat the level and can move on!

## Level 2

Level 2 has 3 moving dots that the user can click on to increment their score.
Implement a single click handler to listen for when a user clicks on one of the
dots and increment their score until they reach 100.

> You want to write only one event listener for all three dots!

## Level 3

Level 3 also has 3 moving dots but of different sizes! Each dot is therefore
worth a different amount of points. The number of points the user should get for
each dot is saved in side of a data attribute on the dot HTML elements. You
can access the data attribute of an element from the event object by looking at
the event target's `dataset` property. When the user clicks on a dot, increment
their score based on how many points that dot is worth until they reach 100.

## Tip:

When the score is greater than or equal to 100, the player has beat the level!
This part is mostly built out for you - all you need to do is add a `game-over`
class to the document body. If you don't remember how to do that - ask for
a hint!

## Plagiarism

Take a moment to refamiliarize yourself with the [Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md). Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
