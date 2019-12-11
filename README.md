# Description

- First tech-test from Tray.io.
- The program is completed.
- All tests passing.
- Prints the output on the terminal by running `node src/hoover.js` in the main folder.

# Introduction
Program that navigates an imaginary robotic hoover (much like a Roomba) through an equally imaginary room based on:

- Room dimensions as X and Y coordinates, identifying the top right corner of the room rectangle. This room is divided up in a grid based on these dimensions; a room that has dimensions X: 5 and Y: 5 has 5 columns and 5 rows, so 25 possible hoover positions. The bottom left corner is the point of origin for our coordinate system, so as the room contains all coordinates its bottom left corner is defined by X: 0 and Y: 0.
- Locations of patches of dirt, also defined by X and Y coordinates identifying the bottom left corner of those grid positions.
- An initial hoover position (X and Y coordinates like patches of dirt)
- Driving instructions (as cardinal directions) where e.g. N and E mean "go north" and "go east" respectively). The room will be rectangular, has no obstacles (except the room walls), no doors and all locations in the room will be clean (hoovering has no effect) except for the locations of the patches of dirt presented in the program input. Placing the hoover on a patch of dirt ("hoovering") removes the patch of dirt so that patch is then clean for the remainder of the program run. The hoover is always on - there is no need to enable it. Driving into a wall has no effect (the robot skids in place).

# Goal
The goal of the program is to take the room dimensions, the locations of the dirt patches, the hoover location and the driving instructions as input and to then output the following:

- The final hoover position (X, Y)
- The number of patches of dirt the robot cleaned up

# Input
Program input will be received in a file with the format described here. You can process it however you like. The file will be named input.txt and reside in the same directory as your executable program/web page. Example:

5 5<p>
1 2<p>
1 0<p>
2 2<p>
2 3
NNESEESWNWW
- the first line holds the room dimensions (X Y), separated by a single space (all coordinates will be presented in this format)
- the second line holds the hoover position
- subsequent lines contain the zero or more positions of patches of dirt (one per line)
- the next line then always contains the driving instructions (at least one)

# Output
Program output should be printed to the standard output (STDOUT) of the terminal (or equivalent in the browser, console.log())

- The first line of your program output should display the X and Y coordinates marking the position of the hoover after processing all commands.
- The second line of the program output should display the number of patches of dirt the robot cleaned up. Example (matching the input above):<p>
-1 3<p>
-1<p>

# Instructions

- Open your terminal.
- Clone the repository in a folder by executing `https://github.com/LeoRoma/roomba-tech-test.git` on you terminal.
- Press `cd roomba-tech-test` to join the folder.
- Run `npm install` to install all the dependecies and `npm test` to run the tests.

# Approach

- I started with writing on a paper the grid with x and y axes.
- Following the given input, I started to track down the main points from the coordinate.
- At the end I was drawing down the track done by the hoover following "N", "E", etc.
- In terms of code I started with writing the input in the `input.txt` file.
- Using `fs` to fetch the text file into Javascript.
- String manipulation to get the desired data to work with.
- I prefered to work in only with "Room" class and later I extracted two more classes (Dirt and Hoover).
- In class Hoover is where there is the physical action on the grid.
- The Room class is where handle the data retrieved from input.txt and distributed to the other two classes.
- Finally Dirt class holds the coordinates for the patches of dirt.
- I built the application by writing tests for each function implemented and pushed on Github before to write new code.

# Thoughts

- To be my first tech-test I had a lot of fun, I felt that I learned a lot about Javascript ES6 and Jest, I faced new logics that I didn't face before.
- I think I can improve with the data handle by using node.js modules.export to have a better architecture of the program.
- The most important I have enjoyed.
