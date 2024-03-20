---
sidebar_position: 4
title: "Client APIs"
---

The GameVault Client APIs offer interfaces for external use of the GameVault client application for subscribers of GameVault+. Whether you're interacting via the command line, URI, or NamedPipe, you have access to various functionalities provided by the GameVault Client Application. This can be useful for third-party developers who want to integrate with the GameVault ecosystem. (e.g. Playnite Extension)

This guide provides comprehensive information on utilizing various interfaces offered by the GameVault client application for third-party developers. Whether you're building extensions or integrating with the GameVault ecosystem, this documentation will guide you through the available APIs and their specifications.

## Available APIs

### CLI

The Command Line Interface (CLI) provides a straightforward way to interact with the GameVault client application directly from the command line. It supports various actions and parameters for seamless integration into your workflows.

### URI

The Uniform Resource Identifier (URI) handler allows for communication with the GameVault client application through custom URI schemes. By leveraging URI endpoints, you can trigger actions and pass parameters conveniently.

### NamedPipe

The NamedPipe interface facilitates communication between processes on the same machine. Through NamedPipe, you can send messages to and receive responses from the GameVault client application, enabling real-time interaction.

## Usage

The following sections detail how to use each API provided by the GameVault client application.

## Available Actions & Parameters

Explore the list of actions and parameters supported by the GameVault client APIs. (Bold parameters are required, Asterisks indicate default values )

- `<none>`

  - Supported for direct command-line usage only.
  - Alias for `show`

- `show`

  - Starts and if the main application or a specific game.
  - Parameters:
    - `minimized=[true/false*]`: Run the application minimized to the tray.
    - `gameid=[id]`: Target a specific game to show.

- `install`

  - Installs a specific game defined by `gameid`.
  - Additional parameters:
    - **`gameid=[id]`**: Target a specific game to install.
    - `minimized=[true/false*]`: Run the application minimized to the tray.

- `uninstall`

  - Uninstalls a specific game defined by `gameid`.
  - Additional parameters:
    - **`gameid=[id]`**: Target a specific game to uninstall.
    - `minimized=[true/false*]`: Run the application minimized to the tray.

- `start`

  - Starts a specific game defined by `gameid`.
  - Additional parameters:
    - **`gameid=[id]`**: Target a specific game to start.
    - `minimized=[true/false*]`: Run the application minimized to the tray.
    - `autoinstall=[true/false*]`: Whether to automatically install the game if not already installed.

- `help <action>`

  - Displays help for the command line interface or a specific action.

- `version`
  - Displays the version of the GameVault client application.

## URI "Query" Action

The URI "query" action allows you to retrieve information from the client-side app. It is not a replacement for server-side backend interaction but serves as a means to obtain simple information.

When sending a request via URI, an additional action called `query` is available, which lets you get information from the client-side app. This is **not** a replacement for the server-side backend and is just a way to get simple information. The specific value to query is provided in the `query` parameter, with the following options available:

- `exists`: Check if the provided `gameid`-parameter exists locally or on the configured server (True/False).
- `installed`: Check if the provided `gameid`-parameter is installed (True/False).
- `downloaded`: Check if the provided `gameid`-parameter is downloaded (True/False).
- `getname`: Get the name of the game defined by `gameid`-parameter.
- `getinstalldirectory`: Get the install directory of the game defined by `gameid`-parameter.
- `getappversion`: Get the version of the application.
- `getserverurl`: Get the URL that we're currently configured to point to.
- `isloggedin`: Returns if the user is currently logged in (True/False).

## Command-line Examples

Explore examples of using the GameVault client APIs via the command line:

```bash
# Launch GameVault
gamevault.exe

# Open GameVault in the background
gamevault.exe --minimized=true

# Show a specific game (ID 3)
gamevault.exe show --gameid=3

# Install a game (ID 3)
gamevault.exe install --gameid=3

# Uninstall a game (ID 3)
gamevault.exe uninstall --gameid=3

# Start a game (ID 3)
gamevault.exe start --gameid=3

# Start a game (ID 3) and bring GameVault into view
gamevault.exe start --gameid=3 --minimized=false

# Same as above without '='
gamevault.exe start --gameid 3 --minimized false

# Display help screen
gamevault.exe help

# Display help for 'start'
gamevault.exe help start
```

## URI Examples

Discover examples of using the GameVault client APIs via URI:

```plaintext
gamevault://show
gamevault://show?minimized=true
gamevault://install?gameid=3
gamevault://uninstall?gameid=3
gamevault://start?gameid=3
gamevault://start?gameid=3&minimized=false
```

## Query Examples

Explore examples of querying the GameVault client application through URI:

```plaintext
gamevault://query?query=exists&gameid=3
gamevault://query?query=installed&gameid=3
gamevault://query?query=downloaded&gameid=3
gamevault://query?query=getname&gameid=3
gamevault://query?query=getinstalldirectory&gameid=3
gamevault://query?query=getappversion
gamevault://query?query=getserverurl
gamevault://query?query=isloggedin
```

## C# Code Example

For developers working with C#, here's an example of interacting with the GameVault app through the NamedPipe:

```csharp
using System;
using System.IO;
using System.IO.Pipes;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

public static class GameVaultInteraction
{
    public static async Task<string> SendPipeMessage(string message, CancellationToken cancellationToken, bool expectsResult = false, int timeout = 500)
    {
        string result = null;
        using var client = new NamedPipeClientStream("GameVault");
        StreamWriter writer = null;
        StreamReader reader = null;

        try
        {
            await client.ConnectAsync(timeout, cancellationToken);

            writer = new StreamWriter(client, Encoding.UTF8, 1024, leaveOpen: true) { AutoFlush = true };
            await writer.WriteLineAsync(message);

            if (expectsResult)
            {
                reader = new StreamReader(client, Encoding.UTF8, false, 1024, leaveOpen: true);
                result = await reader.ReadLineAsync();
            }
        }
        finally
        {
            SafeDispose(writer);
            SafeDispose(reader);
            SafeDispose(client);
        }

        return result;
    }

    private static void SafeDispose(IDisposable disposable)
    {
        if (disposable == null)
            return;

        try
        {
            disposable.Dispose();
        }
        catch (Exception) { }
    }
}
```
