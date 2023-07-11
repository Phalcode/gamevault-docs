---
sidebar_position: 1
---

# Setting up a Crackpipe Client

If you want to use Crackpipe to download and install games on your computer, you need to follow these steps.

## Installation

### Recommended Installation Option

**Requirement:** Windows 10/11 Operating System with Microsoft Store installed

To begin, install the Crackpipe application from [the official Microsoft Store](https://www.microsoft.com/store/apps/9PCKDV76GL75). This process should be straightforward and will only consume a few minutes of your time. After installing, feel free to continue at [Initial Configuration](#initial-configuration).

### Alternative Installation Options

If you for some reason prefer not to use the Microsoft Store or if you are operating on a different platform, there are multiple other methods available for installing the Crackpipe Client Application.

:::caution
Please not that any other method than installing it from the Microsoft Store is **unsupported** and **unrecommended** and should only be used as a last resort. Also be aware [that you will be responsible for managing updates manually!](updating-client#other-sources)
:::

#### Option 1: Obtain Pre-Built Artifacts from Github

Access the most recent Pre-Built Artifact [here.](https://github.com/Phalcode/crackpipe-app/releases/latest)

#### Option 2: Linux Installation

To run Crackpipe on Linux utilizing Wine, follow this community-driven method. Visit [this](../advanced-usage/linux-client) page for more details.

#### Option 3: Self-Compiling on Windows

1. Install Visual Studio IDE
2. Include the 2017 build system
3. Clone the crackpipe-app source code
4. Open Visual Studio and choose the `.sln` file
5. Pick `Release` from the Dropdown menu.
6. Build > Build crackpipe
7. Utilize the output files.

#### Option 4: Extracting from the .appxbundle

1. Go to [https://store.rg-adguard.net](https://store.rg-adguard.net)
2. Paste `https://www.microsoft.com/store/apps/9PCKDV76GL75` in the search box
3. Download the current .appxbundle
4. Extract the .appxbundle, followed by the `ReleasePackage_[VERSION]_x64.appx` file.

## Initial Configuration

Once you have installed and launched Crackpipe, you need to do some initial configuration to get it up and running properly.

### Step 1: Select the Root Folder

In this step, you will choose the location where all your downloaded and installed games will be stored. This folder will act as the central location for your game library. We recommend you to have a read on the ["How to Use" Chapter](how-to-use.md) to understand how the root folder works.

To select the root folder, follow the instructions below:

1. Click the "Select Root Path" button.
2. Navigate to the desired location on your computer.
3. Choose a folder with sufficient storage space to store your game collection.
4. Once you have selected the folder, click "Next" to proceed.
5. Crackpipe will automatically generate a Subfolder called `Crackpipe` in your selected Folder with some initial data.

### Step 2: Entering the Selfhosted Backend Server URL

To connect your Crackpipe application to the backend server, you need to provide the URL of the server. Depending on your setup, follow one of the two options below:

#### Option 1: Self-hosted Crackpipe Server

If you have your own self-hosted Crackpipe server, please enter its URL in the provided field. Follow the instructions below:

1. Enter the URL of your self-hosted Crackpipe server in the provided field.
2. Make sure you have the correct URL and it is accessible.
3. Click "Next" to proceed.

#### Option 2: Using the Demo Server

If you only want to try out Crackpipe, without setting up your own server, you can use the demo server. There are no real games on the demo server and the functionality is very limited. ToFollow the instructions below:

1. Enter "demo.crackpipe.de" as the URL in the provided field.
2. This will allow you to explore the features and functionality of Crackpipe.
3. Click "Next" to proceed

:::info Demo Server Credentials
Username: **demo**  
Password: **demodemo**  
:::

### Step 3: Login or Register

In this step, you will need to log in to your Crackpipe account on the selected backend server. Choose one of the following options based on your situation:

#### Option 1: Login

If you already have a Crackpipe account on the selected server, follow these steps:

1. Select "Login" from the options.
2. Enter your login credentials (username and password) in the provided fields.
3. Ensure that the credentials are specific to the Crackpipe backend server you have chosen.
4. Click "Login" to proceed.

#### Option 2: Register

If you don't have an account on the selected Crackpipe backend server, follow these steps:

1. Click the "Register" button.
2. Follow the instructions provided to create your Crackpipe account on the backend server.
3. The server administrators may have to activate your account before you can use it to log in. Contact them if necessary.

## Conclusion

Congratulations! You have successfully installed and completed the initial configuration of Crackpipe. You are now ready to explore and enjoy the features and functionality of the app. If you have any further questions or need assistance, refer to the remaining chapters of this documentation or reach out to our support team for help.

We specifically recommend to read the ["How to Use" Chapter](how-to-use.md) to understand how Crackpipe works.
