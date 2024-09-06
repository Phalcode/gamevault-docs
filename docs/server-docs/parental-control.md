---
sidebar_position: 10
---

# Parental Control

GameVault supports a parental control feature that **hides** games and game progresses based on the games age rating for some users. **By default**, age restrictions are **disabled**.

**When enabled:**

- Users will **not be able** to see **games** above their age rating.
- Users will **not be able** to see any **progresses** for games above their age rating.

:::warning Things to keep in mind

- If you **enable** parental control, **do not forget** to set the **birth date** for **existing** users.
- Children **must not** be of **role** `ADMIN`, because they would be able to alter their birth date.
- The age rating value for games is set by the **metadata providers you use**. It is in your responsibility to check how the providers determine the age rating. 
- If you use multiple metadata providers, the provider with the **highest priority** will be used. **User-set** age ratings will **always override** the metadata providers setting.

:::

## Enabling Parental Control

To enable parental control, set the `PARENTAL_AGE_RESTRICTION_ENABLED` environment variable to `true`. Then set the birth date for all existing users.

Keep in mind that, when you set this variable to `true`, new users will also be required to set their Birth date upon registration.

## Changing the Age of Majority

The age of majority determines the age at which an individual is legally recognized as an adult. Reaching the age of majority **enables users to alter their birth date**. Otherwise, users will not be able to set their own birth date and an admin will be required to set their birth date.

You can configure the age of majority for parental control by setting the `PARENTAL_AGE_OF_MAJORITY` environment variable. The default value is `18`.

## Overriding the Age Rating of a Game

Admins can override the age rating of a single game by simply editing the age rating field of a game directly.
