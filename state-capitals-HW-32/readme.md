[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# State Capitals

We're going to create a game to help us memorize the names of the capitals of all 50 states.

## Prerequisites

- Basics of programming with Python

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Fulfill the listed requirements.

There is starter code available in `lib/script.py`. Note how the states are already imported for you!

Write the rest of your code in the `script` file. You can execute a python file by doing `python3 lib/script.py`

Please turn in your submission by the deadline on your cohort calendar.

## Requirements

To play the game:

- Your program should prompt the user to identify the capital associated with a
  given state.
- There should be running tallies on the number of correct and incorrect answers
  for each state
- After getting through all 50 states one time, users should be asked whether or
  not they want to play again.

**Hint:** It can help to make a copy of the `capitals` list that includes only a few states for testing purposes.

### Game Requirements

- Make sure the **states don't appear in alphabetical order** in the prompts. This will make the game a bit more challenging for the user.
- Provide a **welcome message** to introduce the player to the game.
- Through **all 50 states**, prompt the user to name the capital of the state.
- Score whether the user's guess is **correct or not**.
- Calculate an overall total score, **display a running tally (incorrect and correct answers)** after each prompt
- Once the user has gone **through all 50 states,** **ask them if they'd like to play again**. (This prompt should happen after every time the game ends).  If the player chooses to play again, **the game must restart with the score reset to zero**. If the player chooses to leave the **program ends**.

### Example

Start of the game:

```
Greetings! How well do you know the geography of the United States?
Guess the capitals of each state and test your knowledge!
What is the capital of Kansas: Topeka
Correct: 1 Incorrect: 0
What is the capital of West Virginia: Unsure
Correct: 1 Incorrect: 1
```

End of the game:

```
What is the capital of Wyoming: Cheyenne
Correct: 49 Incorrect: 1
Your final score is 49!
Would you like to play again? Yes (y) or No (n): y
Thank you for playing my game! Goodbye!
```
**If the player doesn't get any of the capitals correct, the overall score can be a negative number.*
### Potentially Useful Python Features

- `print()`
- `input()`
- `for` loop
- `sorted()`
- `random.shuffle()`

## Bonus!

- Initialize **new** keys in the dictionaries that store the number of times a
  user gets a capital `correct` and the number of times the answer is
  `incorrect`.
  - If the answer is correct, display a message saying so, and increment the
    `correct` key.
  - If the answer is incorrect, display a message saying so, and increment the
    `incorrect` key.
- If the user plays again, set the order of how the prompts appear to start with
  the ones they got wrong the most often.
- Add a hint functionality that prints the first 3 letters of a capital

## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.

