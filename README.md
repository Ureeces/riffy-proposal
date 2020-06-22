# Dice Roller App
  
This app allows you to roll multiple dice of any number of sides! (Note that you can only roll one type of die at a time though). It takes in two numbers, an amount of dice to be rolled and the number of sides
each dice has. It rolls each die, and then returns your total along with each roll! You even get a bonus comment.

It will even add one constant to the total if you need quick math!

## Prerequisites
* You must have a terminal open
* You must have node installed

---

### If you DON'T have Node:
_*I'm going to save your life._*

Here's a Guide to Install Node:
1) Go to the following and download the version appropriate for your OS: https://nodejs.org/en/download/ 

  *If you're confused on which one you should install:
  *  For Windows use the one labeled **Windows Installer (.msi)**
  *  For Mac, use the one labeled **MacOS Installer (.pkg)**
  *  For Linux... I think you know what you're doing already, it's not because I don't know.
2) Follow the installation wizard

---

## Installation:
1) In the terminal, navigate to the directory you want to install the diceroller app, using `cd [filepath]`.
2) Type `git clone https://github.com/Ureeces/riffy-proposal`
   
   **To get the copy link, look for the green clone or download** button on the right of your screen - there will be a copy link, to easily get it, copy it, simply click the button to the right of the link shown.
3) Once you've cloned it, go it using `cd riffy-proposal`
4) Now you're ready to run it!


## How to Use Diceroller
Now that you've installed it, time to learn how to use it:

1) Type `node main.js [number of dice] [sides of die]`
   * Fill in [number of dice] with the number of dice you want to roll, followed by the number of sides you want each die to have.
2) Example: `node main.js 1 20`
  
  ![Proper Input 1](Store/proper_input1.png)

  This will roll a 1d20 for you!

3) If you like, you can add a third parameter to add a constant!
  * Example: `node main.js 1 d20 5`

  ![Proper Input 2](Store/proper_input2.png)

  This will roll a 1d20 for you, and then add 5 to the total!

And now you know how to use the diceroller app! You may also type `node main.js format` to give you the proper format again! May the rolls be with you.

---

## So, What Did I Learn?

To Keep things simple, I will give brief list:
* For loops in Javascript
* Math.random()
  * How to implement in Math.random()
* The importance of organization
* Divide and conquer tasks via functions
* Array practice
* isNaN
* ~~Sometimes coding while sleep deprived helps get things done, because you just wanna get the task done instead of adding more and more~~

