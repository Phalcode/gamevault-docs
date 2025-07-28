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

1. Install Visual Studio IDE
2. Include the 2017 build system
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
Then this ui will be displayed.

![pendingactivation](/img/docs/setup-client/login-window-pending-activation.png)

Here you can either go back to the profile selection or wait until an admin activates you on the server. If that happens, you will be logged in immediately.

### Server Input validation

Both Sign In and Sign Up have built-in input validation when entering the server URL. The client checks whether the server is accessible or not. In addition, certain fields such as email can be configured as mandatory on the server. Or SSO can be enforced. All these server-side configurations are then displayed as input validation.

If you have entered a valid gamevault server address, this is indicated by a green check mark. If the URL cannot be reached or there are other problems, this is indicated by a red error symbol. When you hover over it with the mouse, you can also get more information about the error.

### SSO Login

When logging in with SSO, instead of using a username and password, you are authenticated via the identity provider configured on the server. This could be Google, Microsoft, or GitHub, for example. When you log in for the first time, or after your session has expired, a webview popup opens that redirects you to the authentication page of the respective identity provider.

After checking the "Sign in using your Identity Provider" in the sign in or sign up dialogs, all fields except Server Url will be grayed out. Thats because gamevault will get all these information out of the identity provider authentication.


### Step 1: Select the Root Folders

In this step, you will choose one or more locations where your downloaded and installed games will be stored. These folders will serve as the base directories for your game library. We recommend reading the  ["How to Use" Chapter](how-to-use.md) to better understand how root folders are managed.

To select your root folders, follow these steps:

1. Click the "Select Root Paths" button.
2. Navigate to one or more desired locations on your computer.
3. Choose folders with sufficient storage space for your game collection.
4. Once you have selected all desired folders, click "Next" to proceed.
5. GameVault will automatically create a subfolder called `GameVault` in each selected folder and initialize it with the required data.

### Step 2: Entering the Selfhosted Backend Server URL

To connect your GameVault application to the backend server, you need to provide the URL of the server. Depending on your setup, follow one of the two options below:

#### Option 1: Self-hosted GameVault Server

If you have your own self-hosted GameVault server, please enter its URL in the provided field. Follow the instructions below:

1. Enter the URL of your self-hosted GameVault server in the provided field.
2. Make sure you have the correct URL and it is accessible.
3. Click "Next" to proceed.

#### Option 2: Using the Demo Server

If you only want to try out GameVault, without setting up your own server, you can use our demo server. There open-source videogames available. Keep in mind that you will have mostly read-only non-admin rights on that server. To use the demo server, follow the instructions below:

1. Enter "demo.gamevau.lt" as the URL in the provided field.
2. This will allow you to explore the features and functionality of GameVault.
3. Click "Next" to proceed

:::info Demo Server Credentials
Username: **demo**  
Password: **demodemo**  
:::

### Step 3: Log In or Register

In this step, you will need to log in to your GameVault account on the selected backend server. Choose one of the following options based on your situation:

#### Option 1: Login

If you already have a GameVault account on the selected server, follow these steps:

1. Select "Login" from the options.
2. Enter your login credentials (username and password) in the provided fields.
3. Ensure that the credentials are specific to the GameVault backend server you have chosen.
4. Click "Log in" to proceed.

#### Option 2: Register

If you don't have an account on the selected GameVault backend server, follow these steps:

1. Click the "Register" button.
2. Follow the instructions provided to create your GameVault account on the backend server.
3. The server administrators may have to activate your account before you can use it to log in. Contact them if necessary.

## Conclusion

Congratulations! You have successfully installed and completed the initial configuration of GameVault. You are now ready to explore and enjoy the features and functionality of the app. If you have any further questions or need assistance, refer to the remaining chapters of this documentation or reach out to our support team for help.

We specifically recommend to read the ["How to Use" Chapter](how-to-use.md) to understand how GameVault works.
