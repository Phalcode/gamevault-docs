---
sidebar_position: 8
---

# WebSockets

In Gamevault Backend Version 9.0.0, we introduced an exciting feature – WebSockets. These WebSockets provide an asynchronous and bidirectional gateway for interactive communication with clients. Our implementation is based on [Socket.io](https://socket.io/), which itself relies on the WebSocket protocol.

WebSockets enable real-time communication between the server and clients. This means that not only can the server send data to clients when they ask for it, but the server can also initiate conversations with the clients.

To use this feature effectively, you need to ensure that Web-Socket Support is enabled on your machine, network, or reverse proxy.

The API is documented via AsyncAPI standard in `/api/docs/async`. However, please note that, at the time of writing, this documentation may not run on Docker due to a bug. If you encounter this issue, you can refer to the source code for manual implementation.

## Activities

Starting from Gamevault Backend Version 9.0.0, Gamevault allows clients to share their current activities on the server. These activities provide valuable information about what users are doing, making the platform more interactive. Activities can include:

- User 1 is online.
- User 2 is offline.
- User 3 is playing Mindustry.
- User 4 is marked as busy.

Once a user reports his activity, it will propagate to all other users. Clients have the freedom to report their activities. If they don't, the server will display them as offline by default.

### Disabling Activities

For server owners who wish to disable activities, it's as simple as setting the `SERVER_ONLINE_ACTIVITIES_DISABLED` environment variable to `true`. Please be aware that, depending on your clients implementation, this might result in everyone appearing as offline all the time.

## Security

Each user is assigned a randomly generated Socket Secret that they can retrieve at ``/api/users/me``. This secret must be included in the headers (X-Socket-Secret) of every subsequent Socket.IO Handshake request to the server.
