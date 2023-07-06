import re

# Group digits
phone_num_regex = re.compile(r'(\d\d\d)-(\d\d\d-\d\d\d\d)')
mo = phone_num_regex.search('My number is 415-555-4242')

print(mo.group(1))
print(mo.group(2))
print(mo.group(0))
print(mo.group())
print(mo.groups())

# Assign variables to the groups tuple
area_code, main_number = mo.groups()

print(area_code)
print(main_number)

# Escape a parenthese to be able to find in an expression
phone_num_regex_escaped = re.compile(r'(\(\d\d\d\)) (\d\d\d-\d\d\d\d)')
me = phone_num_regex_escaped.search('My phone number is (415) 555-4242')

print(me.group(1))
print(me.group(2))