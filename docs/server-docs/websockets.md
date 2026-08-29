---
sidebar_position: 9
---

# WebSockets

:::warning Work in progress

GameVault's WebSocket support is still in an early state. It is implemented on the server, but **no client uses it yet**. If you're interested in how we're doing with implementing WebSockets, you can check out [this page on GitHub](https://github.com/Phalcode/gamevault-app/issues/205) to see our progress.

:::

GameVault Backend 9.0.0 introduced WebSockets. The implementation uses [Socket.io](https://socket.io/), which in turn relies on the WebSocket protocol.

WebSockets enable real-time communication between the server and clients. Clients can send data to the server, and the server can also push updates on its own.

The WebSocket server runs on the same HTTP(S) port as the REST API (`SERVER_PORT`, or `SERVER_HTTPS_PORT` when HTTPS is enabled) using the default Socket.IO path `/socket.io`. No separate port or additional configuration is required. If you use a reverse proxy, make sure WebSocket upgrade requests are forwarded.

## Activities

Starting with GameVault Backend 9.0.0, clients can share their current activity with the server. Examples include:

- User 1 is online.
- User 2 is offline.
- User 3 is playing Mindustry.
- User 4 is marked as busy.

Once a client reports an activity, the server forwards it to other users. If a client does not report activity, the server shows that user as offline.

### Events

| Direction      | Event            | Payload                          |
| -------------- | ---------------- | -------------------------------- |
| Client to Server | `set-activity`  | The activity to broadcast        |
| Client to Server | `get-activities` | Request all current activities   |
| Server to Client | `activity`      | A single user's updated activity |
| Server to Client | `activities`    | All users' current activities    |

### Disabling Activities

If you want to disable activities, set `SERVER_ONLINE_ACTIVITIES_DISABLED` to `true`. This causes all users to appear offline.

## Security

Each user is assigned a randomly generated API-Key, which they can retrieve at `/api/users/me`. This API key must be included in the `X-Api-Key` header of every Socket.IO handshake request to the server.
