# Article Management

## Overview

This project is a backend system built with Node.js and MongoDB. It features:

- Article management with tracking of views and likes.
- User management with notifications.
- Caching for popular articles using Redis.

## Features

- Articles Table: Stores article details including id, title, author, body, number of likes, and number of views.
- Users Table: Stores user details including id and name.
- Tracking Tables: Tracks which articles are liked and viewed b

# API Endpoints

## Users

```
user https://simplyfi-d1va.onrender.com/users
```

- GET /users: Retrieve all users.
- POST /users: Create a new user.
- GET /users/
  : Retrieve a specific user by ID.

## Articles

```https://simplyfi-d1va.onrender.com/articles

```

- GET /articles: Retrieve all articles.
- POST /articles: Create a new article.
- GET /articles/
  : Retrieve a specific article by ID.
- PUT /articles/
  : Update a specific article by ID.
- DELETE /articles/
  : Delete a specific a
