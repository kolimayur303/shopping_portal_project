# Shopping Portal RESTful API

This project implements a RESTful API for managing tasks in a shopping portal. It allows users to perform basic CRUD operations (Create, Read, Update, Delete) on tasks, with each task having a title, description, status, and timestamps for creation and last update. The API is built using Node.js, Express, and MongoDB.

## Features

- Create a new data with title, description, and status.
- Retrieve all data or a specific data by its ID.
- Update a data title, description, or status.
- Delete a data by its ID.

## Installation

1. Clone the repository:
git clone https://github.com/kolimayur303/shopping_portal_project.git


2. Install dependencies:
npm install


3. Set up environment variables:
   - Create a `.env` file in the project root.
   - Add the following environment variables:
     ```
     PORT=3000
     MONGODB_URI=mongodb://localhost:27017/shopping_portal
     ```

4. Start the server:
npm run dev


## Usage

Once the server is running, you can interact with the API using tools like Postman or cURL.

### Endpoints

- `POST /api`: Create a new data.
- `GET /api`: Retrieve all data.
- `GET /api/:id`: Retrieve a specific data by its ID.
- `PUT /api/:id`: Update a data by its ID.
- `DELETE /api/:id`: Delete a data by its ID.

### Request and Response Formats

#### Create a Task (POST /tasks)

Request Body:
```json
{
  "title": "Task Title",
  "description": "Task Description",
  "status": "pending"
}
```
#### status should be "pending" or "completed"



Response (Status Code: 201 Created):
```json
{
  "message": "Task created successfully",
  "data": {
    "_id": "task_id",
    "title": "Task Title",
    "description": "Task Description",
    "status": "pending",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
}
```

Retrieve All Data (GET /api)
Response (Status Code: 200 OK):
```json
[
  {
    "_id": "task_id",
    "title": "Task Title",
    "description": "Task Description",
    "status": "pending",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
]
```

Retrieve a Specific Data (GET /api/:id)
Response (Status Code: 200 OK):
```json
{
  "_id": "task_id",
  "title": "Task Title",
  "description": "Task Description",
  "status": "pending",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

Update a Data (PUT /api/:id)
Request Body:
```json
{
  "title": "Updated Task Title",
  "description": "Updated Task Description",
  "status": "completed"
}

```

#### status should be "pending" or "completed"

Response (Status Code: 200 OK):
```json
{
  "message": "Task updated successfully",
  "data": {
    "_id": "task_id",
    "title": "Updated Task Title",
    "description": "Updated Task Description",
    "status": "completed",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
}
```

Delete a Data (DELETE /api/:id)
Response (Status Code: 200 OK):

```json
{
  "message": "Task deleted successfully"
}

```