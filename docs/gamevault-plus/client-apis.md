---
sidebar_position: 4
title: "Client APIs"
---

The GameVault Client APIs expose parts of the GameVault client application to GameVault+ subscribers. You can interact with the client through the command line, the `gamevault://` URI scheme, or a named pipe. These interfaces are mainly intended for third-party integrations such as the Playnite extension.

This page explains the available APIs, their actions, and their parameters.

## Available APIs

### CLI

Use the Command Line Interface (CLI) to interact with the GameVault client directly from a terminal.

### URI

Use the URI handler to trigger client actions through the custom `gamevault://` scheme.

### NamedPipe

Use the named pipe to exchange messages with the GameVault client from another process on the same machine.

## Usage

The following sections show how to use each API.

## Available Actions & Parameters

The list below shows the supported actions and parameters. Bold parameters are required. An asterisk marks the default value.

- `<none>`

  - Supported for direct command-line usage only.
  - Alias for `show`

- `show`

  - Starts and if the main application or a specific game.
  - Parameters:
    - `gameid=[id]`: Target a specific game to show.
    - `minimized=[true/false*]`: Run the application minimized to the tray.

- `install`

  - Starts the download of a specific game defined by `gameid`.
  - Additional parameters:
    - **`gameid=[id]`: Target a specific game to install.**
    - `minimized=[true/false*]`: Run the application minimized to the tray.

- `uninstall`

  - Uninstalls a specific game defined by `gameid`.
  - Additional parameters:
    - **`gameid=[id]`: Target a specific game to uninstall.**
    - `minimized=[true/false*]`: Run the application minimized to the tray.

- `start`

  - Starts a specific game defined by `gameid`.
  - Additional parameters:
    - **`gameid=[id]`: Target a specific game to start.**
    - `minimized=[true/false*]`: Run the application minimized to the tray.
    - `autoinstall=[true/false*]`: Whether to automatically install the game if not already installed.

- `help <action>`

  - Displays help for the command line interface or a specific action.

- `version`
  - Displays the version of the GameVault client application.

## URI "Query" Action

The URI `query` action returns simple information from the client application. It does not replace server-side API access.

Set the `query` parameter to one of the following values:

- `exists`: Check if the provided `gameid`-parameter exists locally or on the configured server (True/False).
- `installed`: Check if the provided `gameid`-parameter is installed (True/False).
- `downloaded`: Check if the provided `gameid`-parameter is downloaded (True/False).
- `getname`: Get the name of the game defined by `gameid`-parameter.
- `getinstalldirectory`: Get the install directory of the game defined by `gameid`-parameter.
- `getappversion`: Get the version of the application.
- `getserverurl`: Get the URL that we're currently configured to point to.
- `isloggedin`: Returns if the user is currently logged in (True/False).
- `getallgames`: Returns a JSON string as Base64 with all games available on the server that the current GameVault client profile is connected to.

## Command-line Examples

Examples:

```ps1
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

URI examples:

```uri
gamevault://show
gamevault://show?minimized=true
gamevault://install?gameid=3
gamevault://uninstall?gameid=3
gamevault://start?gameid=3
gamevault://start?gameid=3&minimized=false
```

## Query Examples

Query examples:

```uri
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

The following C# example sends a message through the named pipe:

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
