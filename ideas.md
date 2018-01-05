# HTML5 Snake, Using React and Flux.

## User Stories:
- I can start a game. There is a blank stage and a small snake that always moves forward.
- I can change the snakes direction - right and left - with the arrow keys.
- Mushrooms appear in the level, as I eat the mushrooms my score goes up and my snake grows longer.
- If the snake runs into a wall, or itself, it dies and the game ends.

## Implementation Ideas:
- The board is kept in state as a multi-dimensional array. 
- - Each element is a number from 0 to 3: 0 = empty, 1 = Wall, 2 = Snake, 3 = mushroom

- The snake is kept in state as an object. 
- - It's length and position is kept as another multi-dimensional array. Each sub array represents a piece of the snake's body, and
 contains two elements which represent that piece's position on the board. The first element represents which sub-array it is in, and the second
represents which index of the sub-array
- - The first element represents the snake's head, and moves in the direction of travel each tick
- - The remaining elements simply adopt the previous elements position each tick.
- - The snake's direction is represented as a string or number. If it is moving down, the first element of the position increments; up, it decrements;
right, the second element increments; left it decrements

- The player's score is a number

- Each tick, check the value of the index the snake will move into:
- - if it is a mushroom, remove the mushroom from the board, add 1 to the snake's length (add an element to the snake length array before making the next move),
and add 1 to the player's score
- - if it is a wall, the game is over
- - if it is another snake piece, the game is over
- - if it is an empty space, nothing happens

- When the game ends, display the player's score


- Use, and chain, promises for the game loop(?). (https://medium.freecodecamp.org/promises-and-pokemon-how-i-learned-to-think-in-async-2ec098c2c90d)
- Use Redux for state management.
