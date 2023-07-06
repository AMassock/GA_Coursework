import re

# Compile a raw string via regex to be searched
phoneNumRegex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')

# Create search and save to variable to group
mo = phoneNumRegex.search('My number is 415-555-4242.')

# Print the group of digits found from search
print('Phone number found: ' + mo.group())