---
sidebar_position: 7
---

# Game Indexing

The server watches the files directory (by default `/files`) and creates an index of all games, when changes occur. The indexing can also be triggered via API.

The indexing algorithm follows these steps:

- It recursively scans all game files for changes in the files directory.
- For each changed game file:
  - It checks if the exact same game already exists in the database, either based on the file path or a combination of the title and release year. If it does, the game is skipped, as it is already indexed.
  - It checks if the game exists in the database but was previously deleted, again based on the file path or a combination of the title and release year. If so, it restores the game and updates its information with the current file's details, such as size, title, year, early access flag, path, and version.
  - It checks if the game already exists in the database. If so, it updates the game's information with the current file's details. Such as version, game-type or early-access flag.
  - If the game does not exist in the database at all, it indexes the game.

Finally, a simple integrity check is performed to ensure that the games in the database also exist in the files directory, and vice versa.
