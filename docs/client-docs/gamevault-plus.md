---
sidebar_position: 4
---

# GameVault+ Documentation

GameVault+ offers a set of premium features that enhance the user experience beyond our core product offerings. These features are designed as optional add-ons for users who wish to support our development efforts. The subscription is priced affordably and is entirely optional, ensuring that our core product remains freely accessible to all.

## Setting up GameVault+ in Your Client

Setting up GameVault+ in your client is straightforward.

### 1. Phalcode Account

- Register or log in to your Phalcode account through the `GameVault+ Settings`.
- Your credentials will be securely stored within the application for future use.
- From now on upon start start of the application, it attempts to log in using the stored credentials:
  - If the credentials are valid, users are automatically logged in, and the app proceeds to fetch their licenses.
  - If the credentials are invalid, users are notified with an error message.

### 2. GameVault+ License

- Once logged in, the client attempts to fetch the user's GameVault+ license:
  - If a valid license is found, users receive a success message in the GameVault+ settings app, along with license details and a button to manage their subscription.
  - If no license is found, users are notified with an error indicating an invalid, missing, or expired license.
- Users can also manually request to check their licenses using the `Fetch Licenses` button in the `GameVault+ Settings`.

#### Offline Usage

- When a valid license is found, an encrypted copy of the license is stored within the application, allowing for offline use.
- Users can access GameVault+ offline until their license expires.
- Offline licenses get renewed upon each login, provided an internet connection is available.
- If an offline license has expired, users are notified of the expiration and can no longer use GameVault+.
