---
sidebar_position: 2
---

# File and Folder Structure

## Game Name Format

Here comes the most Painful part of setting up a Crackpipe Server. But it is definitely worth every effort.
The `/files` folder you mount into the server must contain zip files with games.

These Games **must** be in a .zip or .7z format and follow this name
scheme to work correctly and get detected:

`Gamename (vVersion) (EA) (ReleaseYear).zip`

> **The Parentheses must be included**

Everything else will be ignored by Crackpipe.

### Syntax Explanation

- Game name could be: `Far Cry 6`
- Version Tag is optional
  - it **must** begin with a lowercase `v`: e.g. `(v1.0)`, `(v1.224)`, `(vALPHA_BUILD123)`
- EA Tag is optional
  - it will set the Early Access Status of the game to true if given ``(EA)
- Release Year
  - For the most accurate detection I recommend using the release year on rawg.io's website `(2021)`

Full Example would be: `Far Cry 6 (v1.5.0) (2021).zip`

### Other valid Examples

- `Star Wars Jedi - Fallen Order (v1.0.10.0) (2019).zip`
- `HITMAN 3 (v3.10.1) (2021).7z`
- `The Wandering Village (v0.1.32) (EA) (2022).zip`
- `Saints Row (2022).zip`
- `Stray (2022).7z`
- `Captain of Industry (v0.4.12b) (EA) (2022).zip`

## I have a ton of unsorted Games with different naming some compressed some not how do i make it work with crackpipe?

Manual Labour. Lets go through this step by step.

First you will need to compress all games.