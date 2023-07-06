# Write your code here!
class Members:
    def __init__(self, name, intro):
        self.name = name
        self.intro = intro

class Student(Members):
    def __init__(self, name, reason):
        super().__init__(name, reason)
        self.reason = reason
    
    def __str__(self):
        print(f"My name is {self.name} and {self.reason}")
        return super().__str__()

class Instructor(Members):
    def __init__(self, name, bio):
        super().__init__(name, bio)
        self.bio = bio
        self.skills = []

    def __str__(self):
        print(f"My name is {self.name} and {self.bio}")
        return super().__str__()
    
    def add_skill(self, skill):
        self.skills.append(skill)

class Workshop():
    def __init__(self, date, subject):
        self.date = date
        self.subject = subject
        self.students = []
        self.instructors = []
        pass

    def add_participant(self, Member):
        if isinstance(Member, Instructor):
            self.instructors.append(Member)
        if isinstance(Member, Student):
            self.students.append(Member)

    def print_details(self):
        print(f"Date of Workshop: {self.date}")
        print(f"Subject: {self.subject}")
        print(f"Students: ")

        for student in self.students:
            print(student.name, student.reason)

        print(f"Instructors: ")

        for instructor in self.instructors:
            print(instructor.name, instructor.bio)


workshop = Workshop("12/03/2014", "Shutl")

jane = Student("Jane Doe", "I am trying to learn programming and need some help")
lena = Student("Lena Smith", "I am really excited about learning to program!")
vicky = Instructor("Vicky Python", "I want to help people learn coding.")
vicky.add_skill("HTML")
vicky.add_skill("JavaScript")
nicole = Instructor("Nicole McMillan", "I have been programming for 5 years in Python and want to spread the love")
nicole.add_skill("Python")

workshop.add_participant(jane)
workshop.add_participant(lena)
workshop.add_participant(vicky)
workshop.add_participant(nicole)
workshop.print_details()