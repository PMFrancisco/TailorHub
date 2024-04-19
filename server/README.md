
# Server README

This README provides information about the backend of the Restaurants List application. Here you will find details about the technologies used, how to set up and run the backend in your local environment, and any other relevant information for working with the backend of the application.


## Technologies Used

**Server:**

- Express: Web application framework for Node.js.
- Axios: Promise-based HTTP client for making HTTP requests from the frontend.
- Bcrypt: Library for hashing passwords.
- Body-parser: Middleware for parsing incoming request bodies.
- Cookie-parser: Middleware for parsing cookies.
- Cors: Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.
- Dotenv: Module for loading environment variables from a .env file.
- Jsonwebtoken: Library for generating and verifying JSON Web Tokens (JWT).
- Morgan: HTTP request logger middleware for Node.js.
- Multer: Middleware for handling multipart/form-data, primarily used for file uploads.
- Nodemon: Utility for automatically restarting the Node.js application when file changes are detected (development dependency).

## Installation

1. Clone this repository to your local machine.

```bash
  git clone <repository_url>
```

2. Navigate to the client directory in your terminal.

```bash
  cd server
```

3. Install dependencies using npm or yarn:

```bash
  npm install
  # or
  yarn install
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`CORS_DOMAINS`

`JWT_SECRET`

`GOOGLE_MAPS_API_KEY`



## Deployment

To deploy this project run

```bash
  npm run dev
  # or
  yarn dev
```


## API Reference

### Register User

Registers a new user with the provided username, email, and password.

```http
POST /users/register
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| username  | string   | **Required**. User's username    |
| email     | string   | **Required**. User's email       |
| password  | string   | **Required**. User's password    |


### Login User

Logs in an existing user with the provided email and password.

```http
POST /users/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| email     | string   | **Required**. User's email       |
| password  | string   | **Required**. User's password    |


### Get User Details

Retrieves the details of the authenticated user.
```http
GET /users/user
```


### Logout User

Logs out the authenticated user.
```http
POST /users/logout
```


### Toggle Favorite Restaurant

Adds or removes a restaurant from the user's favorites list.
```http
POST /users/favorites/toggle
```

| Parameter      | Type     | Description                             |
| :------------- | :------- | :-------------------------------------- |
| restaurantId   | string   | **Required**. ID of the restaurant      |


### Get All Restaurants

Retrieves a list of all restaurants.
```http
GET /restaurants
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of the restaurant|

### Get Restaurant by ID

Retrieves a specific restaurant by its ID.
```http
GET /restaurants/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of the restaurant|

### Add Restaurant

Adds a new restaurant to the database.
```http
POST /restaurants
```

| Parameter     | Type     | Description                             |
| :------------ | :------- | :-------------------------------------- |
| `name`        | `string` | **Required**. Name of the restaurant    |
| `description` | `string` | **Required**. Description of the restaurant |
| `address`     | `string` | **Required**. Address of the restaurant |
| `image`       | `file`   | Image of the restaurant (optional)      |

### Add Review to Restaurant

Adds a new review to a specific restaurant.
```http
POST /restaurants/:id/reviews
```

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| `id`      | `string` | **Required**. ID of the restaurant    |
| `name`    | `string` | **Required**. Name of the reviewer    |
| `rating`  | `number` | **Required**. Rating of the restaurant |
| `comments`| `string` | **Required**. Comments on the restaurant |

### Delete Review

Deletes a review from a specific restaurant.
```http
DELETE /restaurants/:restaurantId/reviews/:reviewId
```

| Parameter      | Type     | Description                            |
| :------------- | :------- | :------------------------------------- |
| `restaurantId`| `string` | **Required**. ID of the restaurant    |
| `reviewId`     | `string` | **Required**. ID of the review        |

### Update Review

Updates a review for a specific restaurant.
```http
PUT /restaurants/:restaurantId/reviews/:reviewId
```

| Parameter      | Type     | Description                            |
| :------------- | :------- | :------------------------------------- |
| `restaurantId`| `string` | **Required**. ID of the restaurant    |
| `reviewId`     | `string` | **Required**. ID of the review        |
| `name`         | `string` | Name of the reviewer                   |
| `rating`       | `number` | Rating of the restaurant               |
| `comments`     | `string` | Comments on the restaurant             |
