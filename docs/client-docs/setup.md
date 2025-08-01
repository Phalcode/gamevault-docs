---
sidebar_position: 1
---

# Setting up a GameVault Client

If you want to use GameVault to download and install games on your computer, you need to follow these steps.

## Installation

### Recommended Installation Option

**Requirement:** Windows 10/11 operating system with Microsoft Store installed

To begin, install the GameVault application from [the official Microsoft Store](https://www.microsoft.com/store/apps/9PCKDV76GL75).

Experienced users can also simply run this command in PowerShell:

```ps
winget install gamevault
```

This process should be straightforward and will only take a few minutes. After installing, proceed to [Initial Configuration](#initial-configuration).

### Alternative Installation Options

If, for some reason, you prefer not to use the Microsoft Store or are using a different platform, there are several other methods available to install the GameVault Client Application.

:::warning
Please not that any other method than installing it from the Microsoft Store is **less supported** and **unrecommended** and should only be used as a last resort. Also be aware [that you will be responsible for managing updates manually!](updating-client.md#other-sources)
:::

#### Option 1: Obtain Pre-Built Artifacts from GitHub

Access the latest pre-built artifact [here](https://github.com/Phalcode/gamevault-app/releases/latest).

:::note Antivirus/Smartscreen Warning
Your antivirus software or Windows Smartscreen may attempt to prevent you from running our pre-built application because it is a suspicious-looking binary compiled by an unfamiliar source. This is due to the lack of a code signing certificate for budget reasons. You can safely disregard this warning and proceed to run the app by selecting `More Details` and then choosing `Run Anyway`.
:::

#### Option 2: Linux Installation

To run GameVault on Linux using Wine, [follow this community-driven method](../advanced-usage/linux-client.md).

#### Option 3: Self-Compiling on Windows

1. Install Visual Studio IDE (2022 recommended).
2. Install the ".NET Desktop Development" workload and ensure that .NET 8.0 is installed.
3. Clone the `gamevault-app` source code.
4. Open Visual Studio and choose the `.sln` file.
5. Select `Release` from the dropdown menu.
6. Build > Build gamevault.
7. Use the output files.

#### Option 4: Extracting from the .appxbundle

1. Go to [https://store.rg-adguard.net](https://store.rg-adguard.net).
2. Paste `https://www.microsoft.com/store/apps/9PCKDV76GL75` into the search box.
3. Download the current `.appxbundle`.
4. Extract the `.appxbundle`, followed by the `ReleasePackage_[VERSION]_x64.appx` file.

## Initial Configuration

Once you have installed and launched GameVault, the first thing you will see is the login window.

![profiles](/img/docs/setup-client/login-window-profiles.png)

Here you can view your currently created profiles. You must create at least one to proceed.

:::note Info
If you do not yet have your own profile, a demo user will automatically be created for you. This will be removed as soon as you create at least one profile of your own.

To manually add the demo user profile:
Server URL: **demo.gamevau.lt**
Username: **demo**
Password: **demodemo**
:::

### Method 1: Sign In with an Existing User Account

Click on "New Profile" -> "Sign In".

![signin](/img/docs/setup-client/login-window-signin.png)

First enter your server URL, then your username and password. If you want to sign in using SSO, check the box "Sign in using your Identity Provider" at the bottom.

See more details about [Server Input Validation](setup.md#server-input-validation) (if input boxes are grayed out and you don't know why).

See more details about [SSO Login](setup.md#sso-login) if you want to log in using an identity provider (or don't know why fields are grayed out after checking the box).

If you press the "Save" button, a new profile will be created and you will be returned to the profile overview.

If you press the "Save and Login" button, GameVault will create the profile and immediately attempt to launch it.

### Method 2: Sign Up by Creating a New User Account

Click on "New Profile" -> "Sign Up".

![signup](/img/docs/setup-client/login-window-signup.png)

First enter your server URL, then fill out the remaining fields.

See more details about [Server Input Validation](setup.md#server-input-validation) (if input boxes are grayed out and you don't know why).

See more details about [SSO Login](setup.md#sso-login) if you want to log in using an identity provider (or don't know why fields are grayed out after checking the box).

What happens after clicking "Save and Sign Up" depends on the server configuration:

    - A: The new user is activated immediately upon signing up, and you will be logged in.
    - B: The new user must first be activated by an administrator. In that case, the following UI is shown:

![pendingactivation](/img/docs/setup-client/login-window-pending-activation.png)

You can either return to the profile selection or wait until an admin activates your account. Once activated, you will be logged in automatically.

### Server Input Validation

Both Sign In and Sign Up include built-in input validation for the server URL. The client checks whether the server is accessible. In addition, some fields may be required by the server configuration, or SSO may be enforced. These requirements will be reflected in the input validation.

A valid GameVault server address will be marked with a green check mark. If the URL cannot be reached or other problems occur, a red error symbol appears. Hover over it for more detailed error information.

### SSO Login

When using SSO, you authenticate via the identity provider configured on the server—such as Google, Microsoft, or GitHub—instead of using a username and password. On your first login or after session expiration, a webview popup opens to redirect you to the provider’s authentication page.

After checking "Sign in using your Identity Provider" in the Sign In or Sign Up dialogs, all fields except the server URL will be grayed out. This is because GameVault retrieves all necessary information from the identity provider.

### Additional Request Headers

Click the gear icon in the top right corner of the login window to access the login settings.

There you can configure additional request headers.

![pendingactivation](/img/docs/setup-client/login-window-settings.png)

Click the "Add" button to create a new request header (key/value pair). Enter your data and press "Save". Remove a header by clicking the red cross icon next to it.

These headers are sent with every web request from the client and are useful if your server has special connection requirements.

### Select the Root Directories

The final required step to properly use the GameVault client is selecting the root directories.

These are the locations where your downloaded and installed games will be stored. They act as base folders for your game library. We recommend reading the ["How to Use" chapter](how-to-use.md) for more details on root folder management.

Navigate to:
**Settings → Data → File System → Root Directories**

![rootpath](/img/docs/setup-client/client-settings-root-path.png)

Click "Add" and select your desired path in the file dialog. Repeat to add multiple root directories.

:::note Please Note
GameVault will automatically create a subfolder named `GameVault` in each selected directory and initialize it with the required data.
:::

## Conclusion

Congratulations! You have successfully installed and configured GameVault. You are now ready to explore and enjoy the features and functionality of the app.

If you have further questions or need help, refer to the remaining chapters of this documentation or contact our support team.

We especially recommend reading the ["How to Use" chapter](how-to-use.md) to better understand how GameVault works.
