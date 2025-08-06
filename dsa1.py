#Given a string, find the first character that does not repeat anywhere in the string. 
#Return None if all characters repeat.

# Input: "Hello"      Input: "Swiss"
# Output: "H"         Output: "w"
                  




def unique_character(a):
    
    char_count = {}

    for char in a:
        char_lower = char.lower()

        if char_lower in char_count:
         char_count[char_lower] += 1

        else:
         char_count[char_lower] = 1


    for char in a:
        if char_count[char.lower()] == 1:
            return char  

    
    return None




print(unique_character("Hello")) # Output: H
print(unique_character("Swiss"))  # Output: w
print(unique_character("TtSsDd"))  # Output: None


