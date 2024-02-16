---
sidebar_position: 4
---

# Gamevault+ Documentation

GameVault+ offers a set of premium features that enhance the user experience beyond our core product offerings. These features are designed as optional add-ons for users who wish to support our development efforts. The subscription is priced affordably and is entirely optional, ensuring that our core product remains freely accessible to all.

## Setting up GameVault+ in Your Client

### Phalcode Login

- Users can register or log in using their Phalcode account through the settings in the GameVault+ Tab.
- Account credentials are securely stored locally within the application.
- Upon startup, the app attempts to log in using the stored credentials:
  - If the credentials are valid, users are automatically logged in, and the app proceeds to fetch their licenses.
  - If the credentials are invalid, users are notified with an error message.

### GameVault+ License

- Once logged in, the client attempts to retrieve the GameVault+ license:
  - If a valid license is found, users receive a success message in the GameVault+ settings app, along with license details.
  - If no license is found, users are notified of an error indicating an invalid, missing, or expired license.
- Users can also manually request to check their licenses.

### Offline Usage

- When a valid license is found, an encrypted copy is stored locally within the application, allowing for offline use.
- Users can access GameVault+ offline.
- Offline licenses are re-verified upon each login, provided an internet connection is available.
- If an offline license has expired, users are notified of the expiration error.
