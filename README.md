# robot-movement-challenge

Challenge was written with JavaScript, and uses node.js to run.

Command to start script is: `node robot.js`

Inputs are taken on the commandline, and commands need to be followed by a newline (\n) value in order to record every command (including the last). To run, trigger EOF command (Ctrl+D), which will output the final location of the robot.

#### Example:
```
PLACE 0,1,SOUTH
RIGHT
REPORT

```

## Example commands:
### normal example
```
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT

```
#### Result:
```
output: 3,3,NORTH
```

### robot does not move off table even if commanded to (movements to move off table are ignored)
```
PLACE 0,0,NORTH
MOVE
MOVE
MOVE
MOVE
MOVE
MOVE
LEFT
MOVE
LEFT
MOVE
LEFT
MOVE
REPORT

```
#### Result:
```
output: 1,4,EAST
```

### PLACE command is ignored if not valid, along with commands that are before a PLACE command
```
PLACE 6,3,NORTH
MOVE
PLACE 4,3,WEST
RIGHT
REPORT

```
#### Result:
```
output: 4,3,NORTH
```

### Multiple PLACE and REPORT commands
```
MOVE
MOVE
PLACE 3,1,SOUTH
RIGHT
MOVE
REPORT
PLACE 1,1,NORTH
LEFT
MOVE
REPORT

```
#### Result:
```
output: 2,1,WEST
output: 0,1,WEST
```
### Proving that 0,0 is fully SOUTH WEST
```
PLACE 0,0,WEST
MOVE
LEFT
MOVE
REPORT

```
#### Result:
```
output: 0,0,SOUTH
```
### Spiral around the 5 by 5 area, starting from south west corner
```
PLACE 0,0,EAST
MOVE
MOVE
MOVE
MOVE
REPORT
LEFT
MOVE
MOVE
MOVE
MOVE
REPORT
LEFT
MOVE
MOVE
MOVE
MOVE
REPORT
LEFT
MOVE
MOVE
MOVE
REPORT
LEFT
MOVE
MOVE
MOVE
REPORT
LEFT
MOVE
MOVE
REPORT
LEFT
MOVE
MOVE
REPORT
LEFT
MOVE
REPORT
LEFT
MOVE
REPORT

```
#### Result:
```
output: 4,0,EAST
output: 4,4,NORTH
output: 0,4,WEST
output: 0,1,SOUTH
output: 3,1,EAST
output: 3,3,NORTH
output: 1,3,WEST
output: 1,2,SOUTH
output: 2,2,EAST
```
