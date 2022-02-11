# Mr. Robogers' Neighborhood

##### A website showcasing a simple understanding of loop methods
#### By **Cameron Ray**

## Technologies Used

* _HMTL_
* _CSS_
* _JavaScript_
* _JQUERY_

## Description

Mr. Robogers' Neihgborhood allows a user to input a number into a form and submit it to have a robot version of Mr. Rogers write out a song based on the number entered. The song length will be that of the number. Certain numbers in the song will be replaced by robotic language and familiar and lovable lines from the Mr. Rogers television program.

## Setup/Installation Requirements

* Clone or download the repository

  ```sh
  $ git clone https://github.com/Sploob/mr-robogers-neighborhood.git
  ```
* Open HTML index.html
* To alter the code, open the documents in an IDE or text document. If your IDE is setup with your terminal use the following command
  ```sh
  $ code .
  ```
* Any changes should incorporate properly formatted commits with regular history
* Website is live at [gh-pages](https://sploob.github.io/mr-robogers-neighborhood/)


## Known Bugs

* _No known bugs_

## Specs
1. Take a number from a user and return a range of numbers from 0 to the user input.
2. Numbers containing are replaced by the string "Beep!"
3. Numbers containing 2 are replaced with the string "Boop!"
4. Numbers containig 3 are replaced with the string "Won't you be my neighbor?"
5. It should have a hierachy of of prescedence for replacement. 3>2>1. 

## Tests
##### Describe numberGenerator()


**Test**:"It should create an array with numbers from 0 through the inputted number"
**Code:** numberGenerator(3);
**Expected Output:** [0,1,2,3]


##### Describe numReplace()

**Test:**"It should replace the number 1 with 'Beep!'"
**Code:** numOneReplace(numberGenerator(3));
**Expected Output:** [0,"Beep!",2,3]

**Test:**"It should replace any number containing 1 with 'Beep!'"
**Code:** numReplace([1,3,11,15,100]);
**Expected Output:** ["beep!",3,"beep!","beep!","beep!"]

**Test:**"It should replace any number containing 2 with 'Boop!'"
**Code:** numReplace([1,2,3]);
**Expected Output:** ["beep!","Boop!",3]

**Test:**"It should replace a number containing 1 and 2 with 'Boop!'"
**Code:** numReplace([1,2,3,12]);
**Expected Output:** ["beep!","Boop!",3,"boop!"]

**Test:**"It should replace a number containing 3 with 'Won't you be my neighbor?'"
**Code:** numReplace([1,2,3,12]);
**Expected Output:** ["beep!","Boop!","Won't you be my neighbor?","boop!"]

**Test:**"It should replace a number contianing 1 and/or 2 and 3 with 'Won't you be my neighbor?'"
**Code:** numreplace([0,1,2,3,12,13,23,123]);
**Expected Output:** [0, "beep!","Boop!","Won't you be my neighbor?","boop!", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?"]

**Test:**"It should add the users name to the end of the string "Won't you be my neighbor?
**Code:** numreplace([3],name);
**Expected Output:** ["Won't you be my neighbor name?"]


## License

_This code utilizes a GNU GPLv3 License. If you have any issues/find bugs. Feel free to report them to me here or contribute a fix to the code. Thanks!_

Copyright (c) _February, 2022_ _Cameron Ray(s)_