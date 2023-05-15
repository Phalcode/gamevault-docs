---
sidebar_position: 5
---

# Roles

Roles play a crucial role in ensuring the security and proper functioning of a software application. They determine what actions and data a user can access or manipulate based on their assigned role. In Crackpipe, we have implemented a straightforward role system to enhance security and prevent unauthorized access and manipulation of data.

| Role            | Description                                                                                                        | Level |
| --------------- | ------------------------------------------------------------------------------------------------------------------ | ----- |
| Guest           | This role allows users to view all content within the application.                                                 | 1     |
| Users (Default) | This role includes permissions such as downloading games, creating progresses, and editing the user's own profile. | 2     |
| Editors         | Editors have the ability to edit and remap games within the application.                                           | 3     |
| Admins          | Admins possess full control over user management and can edit user profiles.                                       | 4     |

We believe that assigning different roles to users based on their responsibilities and privileges is essential for maintaining a secure and organized software environment. By implementing this role system in Crackpipe, we ensure that each user has appropriate access and permissions within the application, reducing the risk of unauthorized actions and maintaining data integrity.
