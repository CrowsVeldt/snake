# HTML5 Snake, Using React and Flux.

## User Stories:
- I can start a game. There is a blank stage and a small snake that always moves forward.
- I can change the snakes direction - right and left - with the arrow keys.
- Mushrooms appear in the level, as I eat the mushrooms my score goes up and my snake grows longer.
- If the snake runs into a wall, or itself, it dies and the game ends.

## Components:
### Game:
- Title
- ScoreDisplay
### Snake:
- Head
- Body
### Mushroom
 

## Implementation Ideas:
- Use, and chain, promises for the game loop. (https://medium.freecodecamp.org/promises-and-pokemon-how-i-learned-to-think-in-async-2ec098c2c90d)
- Create the game art with SVG.
- Use Redux for state management.
- Keep it simple.

## Input: 
- Press a key to start a game.
- Press keys to change the snakes direction 90° right or left.

## Game States:
- Active
- Over

-----

## Next Stage:

### User Stories:
- After the game is over I see a leaderboard of high scores, if my score is high enough it gets on the list.

### Components:
#### Leaderboard:
- HighScore

