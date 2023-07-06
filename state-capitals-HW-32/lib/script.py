from capitals import states
import random
import time

random.shuffle(states)

# Greeting:
def greet():
    print("Greetings! How well do you know the geography of the United States?")
    time.sleep(2)

# Instruct:
def instruct():
    print("Guess the capitals of each state and test your knowledge!")
    time.sleep(3)

greet()
instruct()

def play_game():
    correct = 0
    incorrect = 0
# Loop through states
    for state in states:
        # Prompt:
        ans = input(f"What is the capital of {state['name']}? ")

        # Check answer:
        if ans.lower() == state["capital"].lower():
            correct += 1
            print(f"Correct! You have {correct} correct answers and {incorrect} incorrect answers")
        else:
            incorrect += 1
            print(f"Sorry incorrect. You have {correct} correct answers and {incorrect} incorrect answers")



    print(f"Your final score is Correct: {correct} and Incorrect: {incorrect}")
    time.sleep(2)
    play_again = input("Would you like to play again? Yes(y) No(n) ")

    if play_again == "y":
        play_game()
    else:
        exit()

play_game()
