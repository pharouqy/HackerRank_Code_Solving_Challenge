/*An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

Example

 

The hiker first enters a valley  units deep. Then they climb out and up onto a mountain  units high. Finally, the hiker returns to sea level and ends the hike.

Function Description

Complete the countingValleys function in the editor below.

countingValleys has the following parameter(s):

int steps: the number of steps on the hike
string path: a string describing the path
Returns

int: the number of valleys traversed
Input Format

The first line contains an integer , the number of steps in the hike.
The second line contains a single string , of  characters that describe the path.

Constraints

Sample Input

8
UDDDUDUU
Sample Output

1
Explanation

If we represent _ as sea level, a step up as /, and a step down as \, the hike can be drawn as:

_/\      _
   \    /
    \/\/
The hiker enters and leaves one valley.*/

function countingValleys(step, path) {
  const steps = path.split("");
  let valleyCount = 0;
  let seaLevel = 0;
  let isInValley = false;
  const coordinates = [];
  for (let i = 0; i < step; i++) {
    if (steps[i] === "U") {
      seaLevel++;
      coordinates.push(seaLevel);
    } else if (steps[i] === "D") {
      seaLevel--;
      coordinates.push(seaLevel);
    }
  }
  for (let i = 0; i < step; i++) {
    if (coordinates[i] === 0 && isInValley) {
      valleyCount++;
      isInValley = false; // Réinitialisez l'indicateur de vallée
    } else if (coordinates[i] === -1) {
      isInValley = true; // Le marcheur entre dans une vallée
    }
  }
  return valleyCount;
}

console.log(countingValleys(8, "UDDDUDUU")); // Output: 1
console.log(countingValleys(12, "DDUUDDUDUUUD")); // Output: 2
console.log(
  countingValleys(
    84,
    "UUUUUDDDDDUUUUUDDDDDUUUUUDDDDDUUUUUDDDDDUUUUUDDDDDUUUUUDDDDDUUUUUDDDDDUUUUUDDDDDUUUU"
  )
); // Output: 0
console.log(
  countingValleys(
    100,
    "DDUUDDDUDUUDUDDDUUDDUDDDUDDDUDUUDDUUDDDUDDDUDDDUUUDUDDDUDUDUDUUDDUDUDUDUDUUUUDDUDDUUDUUDUUDUUUUUUUUU"
  )
); // Output: 2
