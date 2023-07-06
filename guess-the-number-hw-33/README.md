[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Guess the Number

Build a command line app to let users guess a random number

## Prerequisites

- Python

## Instructions

1.  Fork and clone this repository.
1.  Change into the new directory.
1.  Fulfill the listed requirements.

Do your work inside of [`lib/`](lib/). You are required to turn in your
submission by making a pull request on the original repository.

Unless otherwise specified on the calendar, homework is due the next morning by
9:00am.

## Requirements

Build a command line app that does the following:

- Pick a random number between 0 and 100
- Ask the user to guess the number
- If the guess is correct, tell the user they guessed correctly and ask if they'd like to play again.
- If the guess is incorrect, tell the user it's incorrect and ask them for another guess. This action will repeat until the user gives the correct number.
- When the user guessed correctly and chose to play again, a new random number is selected. The user will need to guess the new number.

## Example

```
Guess a number between 1 and 100!: 2
Incorrect. Try again: 70
Incorrect. Try again: 50
Incorrect. Try again: 88
Winner!
Would you like to play again? (y or n) y
Guess a number between 1 and 100!: 88
Incorrect. Try again: 30
Winner!
Would you like to play again? (y or n) n
Thanks for playing!
```

## Bonus

Ask the user for a range of numbers and pick a random number between that range.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
