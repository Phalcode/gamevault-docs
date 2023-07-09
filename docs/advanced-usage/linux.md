# Linux

This page is to help with setting up the Crackpipe client on Linux.

## Getting the application
To use Crackpipe on Linux you first need to get the application. There are currently 2 ways of doing it until build artifacts are put on Github, which is [planned](https://github.com/Phalcode/crackpipe-app/issues/14).

### Compiling on Windows
1. Install Visual Studio to Windows
2. Add the 2017 build system
3. Clone the source code of crackpipe-app
4. Open Visual Studio and select the `.sln` file
5. Build > Build crackpipe
6. Copy the built files to your Linux machine

### Extracting from the Appx
1. Go to https://store.rg-adguard.net/
2. Paste the Microsoft Store link for Crackpipe into the search box
3. Download the .AppxBundle
4. Extract the .AppxBundle, and then the `ReleasePackage_[VERSION]_x64.appx`
5. Copy the `crackpipe` folder to a more convenient location

## Setting up with Wine

:::caution

As of writing this page, using wine outside of bottles did not work in my testing. All it did was open a black box and nothing else.

:::

1. Install Wine
2. Install [.NET 6.0](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)
3. Run `crackpipe.exe`

## Setting up with Bottles

:::tip

When using Bottles under flatpak, your data will be in the following directory:

`~/.var/app/com.usebottles.bottles/data/bottles/[YOUR BOTTLE NAME]`

Keep that in mind when unpacking games to install them.

:::

1. Install [Bottles](https://usebottles.com/)
2. Create a new bottle
![](/img/linux/bottles/make_bottle.png)
3. Inside your bottle click `Dependencies` and install `dotnetcoredesktop6`
![](/img/linux/bottles/dotnet.png)
4. Go back to the main page for your bottle and press `Run Executable...` and select `crackpipe.exe`

## Known issues
 - Text can look very broken if certain fonts are not installed on your system. If you're on Arch Linux, [this](https://aur.archlinux.org/packages/ttf-ms-win11-auto) AUR package fixes most of them.
 - Closing the app will cause it to throw an error, seems to be related to closing to tray