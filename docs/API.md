# API Documentation

This document provides comprehensive documentation on the API for the OMG PLATFORME.

## Base URL

The base URL for all API endpoints is: `https://api.omgplatforme.com/v1`

## Endpoints

### 1. **Get User Information**  
**GET** `/users/{id}`  
- **Description**: Retrieves information about a user by their ID.  
- **Parameters**:  
  - `id` (required): The ID of the user to retrieve.  
- **Example Request**:  
  ```http
  GET /users/123
  ```  
- **Response**:  
  ```json
  {
    "id": 123,
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
  ```  
- **Error Handling**:  
  - `404 Not Found`: User with the specified ID does not exist.

### 2. **Create New User**  
**POST** `/users`  
- **Description**: Creates a new user.  
- **Parameters**:  
  - `name` (required): The name of the user.  
  - `email` (required): The email address of the user.  
- **Example Request**:  
  ```http
  POST /users
  {
    "name": "Jane Doe",
    "email": "jane.doe@example.com"
  }
  ```  
- **Response**:  
  ```json
  {
    "id": 124,
    "name": "Jane Doe",
    "email": "jane.doe@example.com"
  }
  ```  
- **Error Handling**:  
  - `400 Bad Request`: Missing required fields.

### 3. **Update User Information**  
**PUT** `/users/{id}`  
- **Description**: Updates existing user information by ID.  
- **Parameters**:  
  - `id` (required): The ID of the user to update.  
  - `name` (optional): The new name of the user.  
  - `email` (optional): The new email address of the user.  
- **Example Request**:  
  ```http
  PUT /users/124
  {
    "email": "jane.newemail@example.com"
  }
  ```  
- **Response**:  
  ```json
  {
    "id": 124,
    "name": "Jane Doe",
    "email": "jane.newemail@example.com"
  }
  ```  
- **Error Handling**:  
  - `404 Not Found`: User with the specified ID does not exist.

### 4. **Delete User**  
**DELETE** `/users/{id}`  
- **Description**: Deletes a user by their ID.  
- **Parameters**:  
  - `id` (required): The ID of the user to delete.  
- **Example Request**:  
  ```http
  DELETE /users/124
  ```  
- **Response**:  
  ```json
  {
    "message": "User deleted successfully."
  }
  ```  
- **Error Handling**:  
  - `404 Not Found`: User with the specified ID does not exist.

## Usage Examples

- To get information about a user, send a GET request to `/users/{id}`.
- To create a new user, send a POST request to `/users` with the required fields.
- To update user information, send a PUT request to `/users/{id}`.
- To delete a user, send a DELETE request to `/users/{id}`.

## Conclusion

This API provides essential functionalities for managing users within the OMG PLATFORME. Refer to the endpoints above for more details on usage.  

If you have any questions or need further assistance, feel free to reach out!
