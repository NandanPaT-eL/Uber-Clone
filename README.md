# Uber-Clone

# Backend API Documentation

## User Endpoints

### `/users/register`

**Description:** Registers a new user by creating a user account with the provided information.

**HTTP Method:** `POST`

**Request Body:**
```json
{
  "fullname": {
    "firstname": "string", // required, minimum 3 characters
    "lastname": "string"   // optional, minimum 3 characters
  },
  "email": "string",       // required, must be a valid email
  "password": "string"     // required, minimum 6 characters
}
```

**Response:**
```json
{
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "password": "string"
  },
  "token": "string"        // JWT Token
}
```

---

### `/users/login`

**Description:** Authenticates a user using their email and password, returning a JWT token upon successful login.

**HTTP Method:** `POST`

**Request Body:**
```json
{
  "email": "string",       // required, must be a valid email
  "password": "string"     // required, minimum 6 characters
}
```

**Response:**
```json
{
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "password": "string"
  },
  "token": "string"        // JWT Token
}
```

---

### `/users/profile`

**Description:** Retrieves the profile information of the currently authenticated user.

**HTTP Method:** `GET`

**Authentication:** Requires a valid JWT token in the Authorization header
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
}
```

---

### `/users/logout`

**Description:** Logout the current user and blacklist the token provided in cookie or headers.

**HTTP Method:** `GET`

**Authentication:** Requires a valid JWT token in the Authorization header or cookie

**Response:**
```json
{
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "password": "string"
  },
  "token": "string"        // JWT Token
}
```

---

## Captain Endpoints

### `/captains/register`

**Description:** Registers a new captain by creating a captain account with the provided information.

**HTTP Method:** `POST`

**Request Body:**
```json
{
  "fullname": {
    "firstname": "string", // required, minimum 3 characters
    "lastname": "string"   // optional, minimum 3 characters
  },
  "email": "string",       // required, must be a valid email
  "password": "string",    // required, minimum 6 characters
  "vehicle": {
    "color": "string",     // required, minimum 3 characters
    "plate": "string",     // required, minimum 3 characters
    "capacity": "number",  // required, minimum 1
    "vehicleType": "string" // required, must be 'car', 'motorcycle', or 'auto'
  }
}
```

**Response:**
```json
{
  "captain": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "password": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "string"
    }
  },
  "token": "string"        // JWT Token
}
```

---

### `/captains/login`

**Description:** Authenticates a captain using their email and password, returning a JWT token upon successful login.

**HTTP Method:** `POST`

**Request Body:**
```json
{
  "email": "string",       // required, must be a valid email
  "password": "string"     // required, minimum 6 characters
}
```

**Response:**
```json
{
  "captain": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "password": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "string"
    }
  },
  "token": "string"        // JWT Token
}
```

---

### `/captains/profile`

**Description:** Retrieves the profile information of the currently authenticated captain.

**HTTP Method:** `GET`

**Authentication:** Requires a valid JWT token in the Authorization header
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "captain": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "string"
    }
  }
}
```

---

### `/captains/logout`

**Description:** Logout the current captain and blacklist the token provided in cookie or headers.

**HTTP Method:** `GET`

**Authentication:** Requires a valid JWT token in the Authorization header or cookie

**Response:**
```json
{
  "message": "Logout successfully"
}
```

---

## Authentication

All protected endpoints require a valid JWT token to be included in the request headers:

```
Authorization: Bearer <your-jwt-token>
```

## Data Validation Rules

- **firstname/lastname**: Minimum 3 characters
- **email**: Must be a valid email format
- **password**: Minimum 6 characters
- **vehicle.color**: Minimum 3 characters
- **vehicle.plate**: Minimum 3 characters
- **vehicle.capacity**: Minimum 1
- **vehicle.vehicleType**: Must be one of: `'car'`, `'motorcycle'`, or `'auto'`
