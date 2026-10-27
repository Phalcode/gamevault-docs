---
description: Restrict game visibility and playtime for child accounts with age ratings and limits.
sidebar_position: 10
---

# Parental control

Parental control hides games and progress entries that are above a user's age
rating. It is off by default.

When enabled, users cannot see games above their age rating, and they cannot see
progress entries for those games.

:::warning Before you enable it

- Every existing user needs a birth date, or the limits do not apply to them.
- Do not give a child the `ADMIN` role: admins always see every game, whatever the
  rating.
- The age rating comes from the metadata providers you enable. Check how they set
  it.
- Games without a rating are visible to everyone. Rate your games if you want them
  restricted.
- With several providers, the highest-priority one wins. A rating set by hand on a
  game overrides the providers. The client shows the applied minimum age on the
  game page.

:::

## Enabling parental control

Set `PARENTAL_AGE_RESTRICTION_ENABLED` to `true`, then set the birth date for
every existing user.

New users are then asked for their birth date during registration.

## Changing the age of majority

Below the age of majority a user cannot change their own birth date; an admin has
to set it. The default comes from `PARENTAL_AGE_OF_MAJORITY`, which is `18`.

## Overriding the age rating of a game

Admins can change the age rating of a single game in the game's edit form.
