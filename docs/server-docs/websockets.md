---
sidebar_position: 8
---

# WebSockets

:::warning Work in progress

GameVault doesn't fully use Websockets yet. Both the client and the server are still lacking a full implementation. Right now, it's just a basic version to begin with on the server. If you're interested in how we're doing with implementing Websockets, you can check out [this page on GitHub](https://github.com/Phalcode/gamevault-app/issues/205) to see our progress.

:::

GameVault Backend 9.0.0 introduced WebSockets. The implementation uses [Socket.io](https://socket.io/), which in turn relies on the WebSocket protocol.

WebSockets enable real-time communication between the server and clients. Clients can request data, and the server can also push updates on its own.

To use this feature, make sure WebSocket support is enabled on your machine, network, or reverse proxy.

The API is documented via AsyncAPI standard in `/api/docs/async`. However, please note that, at the time of writing, this documentation may not run on Docker due to a bug. If you encounter this issue, you can refer to the source code for manual implementation.

## Activities

Starting with GameVault Backend 9.0.0, clients can share their current activity with the server. Examples include:

- User 1 is online.
- User 2 is offline.
- User 3 is playing Mindustry.
- User 4 is marked as busy.

Once a client reports an activity, the server forwards it to other users. If a client does not report activity, the server shows that user as offline.

### Disabling Activities

If you want to disable activities, set `SERVER_ONLINE_ACTIVITIES_DISABLED` to `true`. Depending on the client implementation, this may cause every user to appear offline all the time.

## Security

Each user is assigned a randomly generated API-Key, which they can retrieve at `/api/users/me`. This api-key must be included in the headers (X-Api-Key) of every subsequent Socket.IO Handshake request to the server.
