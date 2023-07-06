import re

# Use optional matching ()?
bat_regex = re.compile(r'Bat(wo)?man')
mo1 = bat_regex.search('The Adventures of Batman')
mo2 = bat_regex.search('The Advetures of Batwoman')

# Should print "Batman"
print(mo1.group())

# Should print "Batwoman"
print(mo2.group())

# Use optional match to find phone number with or without area code
phone_regex = re.compile(r'(\d\d\d-)?\d\d\d-\d\d\d\d')
mo3 = phone_regex.search('My number is 415-555-4242')
mo4 = phone_regex.search('My number is 555-4242')

# Should print both phone numbers
print(mo3.group(), mo4.group())

# Matching zero or more with *
bat_regex_more = re.compile(r'Bat(wo)*man')
mo5 = bat_regex_more.search('The Adventures of Batman')
mo6 = bat_regex_more.search('The Adventures of Batwoman')
mo7 = bat_regex_more.search('The Adventures of Batwowowowowowoman')

print(mo5.group(), mo6.group(), mo7.group())
