---
sidebar_position: 11
---

# Server News

You can keep your users informed by adding a `news.md` file. Use it to link your game wishlist form, share key updates, or simply greet them.

This file supports [Markdown](https://wikipedia.org/wiki/Markdown) syntax, making it easy to format and structure your content. You can edit the `news.md` file using any text editor or script. It is located at `/config/news.md`. If you're using Docker, simply mount that folder as a volume:

:::note
When updating the ``news.md`` file., users will receive a notification ping-icon in their client, ensuring they see the latest news.
:::

```yaml
[...]
volumes:
    - /your/config/folder:/config
    - [...]
[...]
```
