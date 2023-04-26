---
sidebar_position: 2
---

# File and Folder Structure

If you want to set up a Crackpipe Server, you need to pay attention to the file and folder structure. The `/files` folder that you mount into the server must contain compressed archives with games. These games must be in one of the supported archive formats, and they must follow a specific naming convention in order to be detected correctly by Crackpipe.

## Supported Archive Formats

- `.zip`
- `.7z`

## Naming Convention for Games

The name of each game file must follow this format:

`Gamename (vVersion) (EA) (ReleaseYear).zip`

Note that the parentheses must be included, and the naming convention is case sensitive.

Here's an explanation of each part of the naming convention:

| Part            | Description                                                        | Example Value(s)         |
| --------------- | ------------------------------------------------------------------ | ------------------------ |
| **Gamename**    | The name of the game                                               | `Far Cry 6`, `HITMAN 3`  |
| **Version**     | An optional version tag that must begin with a lowercase `v`       | `(v1.0)`, `(v1.224)`     |
| **EA**          | An optional tag that indicates whether the game is in Early Access | `(EA)`                   |
| **ReleaseYear** | The year of the game's release, for accurate detection             | `(2021)`, `(2019)`, etc. |

Here's an example of a full game name that follows this convention:

`Far Cry 6 (v1.5.0) (2021).zip`

By following this naming convention and using the common values listed in the table above, you can ensure that your games are detected correctly by Crackpipe.

### Other Examples

Here are some other valid examples of game names that follow the naming convention:

- `Star Wars Jedi - Fallen Order (v1.0.10.0) (2019).zip`
- `HITMAN 3 (v3.10.1) (2021).7z`
- `The Wandering Village (v0.1.32) (EA) (2022).zip`
- `Saints Row (2022).zip`
- `Stray (2022).7z`
- `Captain of Industry (v0.4.12b) (EA) (2022).zip`
