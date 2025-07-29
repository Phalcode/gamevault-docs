---
sidebar_position: 1
---

# Setting up a GameVault Client

If you want to use GameVault to download and install games on your computer, you need to follow these steps.

## Installation

### Recommended Installation Option

**Requirement:** Windows 10/11 Operating System with Microsoft Store installed

To begin, install the GameVault application from [the official Microsoft Store](https://www.microsoft.com/store/apps/9PCKDV76GL75).

Experienced users can also simply run this command in the PowerShell:

```ps
winget install gamevault
```

This process should be straightforward and will only consume a few minutes of your time. After installing, feel free to continue at [Initial Configuration](#initial-configuration).

### Alternative Installation Options

If you for some reason prefer not to use the Microsoft Store or if you are operating on a different platform, there are multiple other methods available for installing the GameVault Client Application.

:::warning
Please not that any other method than installing it from the Microsoft Store is **unsupported** and **unrecommended** and should only be used as a last resort. Also be aware [that you will be responsible for managing updates manually!](updating-client.md#other-sources)
:::

#### Option 1: Obtain Pre-Built Artifacts from Github

Access the most recent Pre-Built Artifact [here.](https://github.com/Phalcode/gamevault-app/releases/latest)

:::note Antivirus/Smartscreen Warning
Your Antivirus or Windows Smartscreen may attempt to prevent you from running our pre-built application, because it is a suspicious-looking binary compiled by an unfamiliar source. This is because we lack a Code Signing Certificate due to budget constraints. You can safely disregard this warning and proceed to run the App by selecting `More Details` and then choosing `Run Anyway`.
:::

#### Option 2: Linux Installation

To run GameVault on Linux utilizing Wine, follow this community-driven method. Visit [this](../advanced-usage/linux-client.md) page for more details.

#### Option 3: Self-Compiling on Windows

1. Install Visual Studio IDE (2022 recommended)
2. Install Workload ".Net Desktop development" and make sure DotNet 8.0 is installed.
3. Clone the gamevault-app source code
4. Open Visual Studio and choose the `.sln` file
5. Pick `Release` from the Dropdown menu.
6. Build > Build gamevault
7. Utilize the output files.

#### Option 4: Extracting from the .appxbundle

1. Go to [https://store.rg-adguard.net](https://store.rg-adguard.net)
2. Paste `https://www.microsoft.com/store/apps/9PCKDV76GL75` in the search box
3. Download the current .appxbundle
4. Extract the .appxbundle, followed by the `ReleasePackage_[VERSION]_x64.appx` file.

## Initial Configuration

Once you have installed and launched GameVault, the first thing you come across is the login window.

![profiles](/img/docs/setup-client/login-window-profiles.png)

Here you can see your current created profiles. You must first create one in order to proceed.

:::note Info
If you do not yet have your own profile, the demo user will automatically be created as your profile. This will be removed as soon as you have created at least one profile of your own.

In case you want to add the demo user profile manually:  
Server Url **demo.gamevau.lt**  
Username:  **demo**  
Password:  **demodemo**  
:::

### Method 1: Sign In with a existing User Account

Click on "New Profile" -> "Sign In".

![signin](/img/docs/setup-client/login-window-signin.png)

First enter your Server Url. Then the Username and Password. If you want to sign in with SSO, then check the box "Sign in using your Identity Provider" at the bottom.

See more details about [Server Input validation](setup.md#server-input-validation) (If you have grayed out input boxes and don't know why)

See more details about [SSO Login](setup.md#sso-login) if you want to login with a identity provider (or dont know why fields are grayed out after checking the "Sign in using your Identity Provider" box)

If you press the "Save" button a new profile will be created and you will be send back to the profile overview.

If you press the "Save and Login" button gamevault will create the profile and directly tries to launch this new profile.

### Method 2: Sign Up creting a new User Account

Click on "New Profile" -> "Sign Up".

![signup](/img/docs/setup-client/login-window-signup.png)

First enter your Server Url. Then the rest of the fields.

See more details about [Server Input validation](setup.md#server-input-validation) (If you have grayed out input boxes and don't know why)

See more details about [SSO Login](setup.md#sso-login) if you want to login with a identity provider (or dont know why fields are grayed out after checking the "Sign in using your Identity Provider" box)

What happens after clicking the "Save and Sign Up" button depends on how the server is configured.

**1.** After signing up, the new user is immediately activated. Then you will be logged in.

**2.** The new user must first be activated by an administrator on the server.
Then this UI will be displayed.

![pendingactivation](/img/docs/setup-client/login-window-pending-activation.png)

Here you can either go back to the profile selection or wait until an admin activates you on the server. If that happens, you will be logged in immediately.

### Server Input validation

Both Sign In and Sign Up have built-in input validation when entering the server URL. The client checks whether the server is accessible or not. In addition, certain fields can be configured as mandatory on the server. Or SSO can be enforced. All these server-side configurations are then displayed as input validation.

If you have entered a valid gamevault server address, this is indicated by a green check mark. If the URL cannot be reached or there are other problems, this is indicated by a red error symbol. When you hover over it with the mouse, you can also get more information about the error.

### SSO Login

When logging in with SSO, instead of using a username and password, you are authenticated via the identity provider configured on the server. This could be Google, Microsoft, or GitHub, for example. When you log in for the first time, or after your session has expired, a webview popup opens that redirects you to the authentication page of the respective identity provider.

After checking the "Sign in using your Identity Provider" in the sign in or sign up dialogs, all fields except Server Url will be grayed out. Thats because gamevault will get all these information out of the identity provider authentication.

### Additional Request Headers

In the top right corner of the Login Window you can find a gear icon to open the Login windows settings.

Here you can find the controls to set the additional request headers.

![pendingactivation](/img/docs/setup-client/login-window-settings.png)

Press the "Add" button to create a new additional request header Key/Value pair. Enter your data and press "Save". Remove the header by pressing the red cross button on each header entry.

The additional request headers are sent with every web request from the client.

This can be useful if your server has special connection conditions. This ensures that the gamevault client can still function in such cases.

### Select the Root Directories

The last necessary step to be able to use the GameVault client properly is to select the root directories.

In this step, you will choose one or more locations where your downloaded and installed games will be stored. These folders will serve as the base directories for your game library. We recommend reading the  ["How to Use" Chapter](how-to-use.md) to better understand how root folders are managed.

Navigate to Settings -> Data -> File System -> Root Directories.

![rootpath](/img/docs/setup-client/client-settings-root-path.png)

Click the "Add" Button and select your path from the file dialog. Repeat if you want to have multiple root directories.

:::note Please Note
GameVault will automatically create a subfolder called `GameVault` in each selected directory and initialize it with the required data.
:::


## Conclusion

Congratulations! You have successfully installed and completed the initial configuration of GameVault. You are now ready to explore and enjoy the features and functionality of the app. If you have any further questions or need assistance, refer to the remaining chapters of this documentation or reach out to our support team for help.

We specifically recommend to read the ["How to Use" Chapter](how-to-use.md) to understand how GameVault works.
