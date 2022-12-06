[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Haiku

Practice working with git!

## Prerequisites

- Familiarity with git

## Instructions

You do not have the necessary rights to update this repository. Therefore, you
must fork it, make changes to your fork, and then send a pull request to the
owners of this repository:

1. Fork and clone this repository.
1. Change into the new directory.
1. Fulfill the listed requirements.

When you have fulfilled the requirements below, make a pull request on this
repository to turn in your work.

Unless otherwise specified on the calendar or by an instructor, homework is due
the next morning by 9:00am.

## Requirements

Work through the following instructions:

1. Open the current directory in your text editor (`code .` or `atom .`).
1. Create a text file named `your_gh_username.txt`, e.g. `nickolds.txt`.
1. Write a haiku on a topic of your choice, commit your changes, and push those
   changes with `git push`.
1. Make one more commit **_that removes only the content of_** your `.txt` file
   (**do not delete the file**).
1. Undo the commit you just made. The thing to Google is "undo last commit".
   (Hint: look for `git revert`)
1. Push the changes again to your remote. (Your `remote`, named `origin` by
   default, should point to your fork of this repository.)
1. You should still see your original haiku on GitHub after pushing.

### Troubleshooting

**Oh No I cloned down the original repository!**

> Error: Your changes were rejected because you don't have push access.

No problem! This a chance to learn another useful `git` command!

1. Make sure you fork this repository to your GitHub Enterprise account.
   > Recall that forking creates a copy of a repository that belongs to another
   > user to your own account
2. Copy the clone URL to your clipboard.
3. After you've done that, run the following command inside your `haiku`
   directory. Make sure to replace
   > `git remote set-url origin <paste clone URL here>` Note: Make sure to
   > replace `<paste clone URL here>` with the clone URL on your clipboard. This
   > will set the `remote` named `origin` to point to your forked repository,
   > and not the original.
4. Now when you run `git push origin master`, it will push the changes to your
   forked repository, and not the original (this repo).

## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
