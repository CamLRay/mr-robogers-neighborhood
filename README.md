### Specs

1. Take a number from a user and return a range of numbers from 0 to the user input.
2. Numbers containing are replaced by the string "Beep!"
3. Numbers containing 2 are replaced with the string "Boop!"
4. Numbers containig 3 are replaced with the string "Won't you be my neighbor?"
5. it should have a hierachy of of prescedence for replacement. 3>2>1. 

### Describe numberGenerator()

Test:"It should create an array with numbers from 0 through the inputted number"
Code: numberGenerator(3);
Expected Output: [0,1,2,3]

### Describe numOneReplace()

Test:"It should replace the number 1 with "Beep!"
Code: numOneReplace(numberGenerator(3));
Expected Output: [0,"Beep!",2,3]

Test:"it should replace any number containing 1 with "Beep!"
code: numOneReplace([1,3,11,15,100]);
Expected Output: ["beep!",3,"beep!","beep!","beep!"