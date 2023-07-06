import random

# Pick a random number between 0 and 100
rand_num = str(random.randint(0,101))
print(rand_num)

# Prompt the game
print("This is a guessing game. I will think of a number between 0 and 100, do you think you can guess it?")

# Ask the user to guess the number
ans = ''

def loop_through(ans):
    while ans != rand_num:
        ans = input("What is your guess? ")
        if ans == rand_num:
            print('CORRECT! Do you have ESPN?')
            break
        else:
            retry = str(input('Incorrect, would you like to try again? Y/N? '))
            if retry == 'y':
                loop_through(ans)
            else:
                exit()

loop_through(ans)
