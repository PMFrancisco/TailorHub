
## API Reference

#### Register new user

```http
  POST /users/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your API key |
| `email` | `string` | **Required**. Your API key |
| `password` | `string` | **Required**. Your API key |

#### Login

```http
  POST /users/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Your API key |
| `password`      | `string` | **Required**. Your API key |

#### Get all restaurants

```http
  GET /restaurants
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ID`      | `string` | **Required**. Id of item to fetch |
| `name`      | `string` | **Required**. Id of item to fetch |
| `latlng`      | `string` | **Required**. Id of item to fetch |
| `image`      | `string` | **Required**. Id of item to fetch |
| `reviews`      | `string` | **Required**. Id of item to fetch |



#### Get single restaurant

```http
  GET /restaurants/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ID`      | `string` | **Required**. Id of item to fetch |
| `name`      | `string` | **Required**. Id of item to fetch |
| `latlng`      | `string` | **Required**. Id of item to fetch |
| `image`      | `string` | **Required**. Id of item to fetch |
| `reviews`      | `string` | **Required**. Id of item to fetch |

#### Create new restaurant

```http
  POST /restaurants
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ID`      | `string` | **Required**. Id of item to fetch |
| `name`      | `string` | **Required**. Id of item to fetch |
| `latlng`      | `string` | **Required**. Id of item to fetch |
| `image`      | `string` | **Required**. Id of item to fetch |
| `reviews`      | `string` | **Required**. Id of item to fetch |

