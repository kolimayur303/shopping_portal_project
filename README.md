# Shopping Portal RESTful API

This project implements a RESTful API for managing tasks in a shopping portal. It allows users to perform basic CRUD operations (Create, Read, Update, Delete) on tasks, with each task having a title, description, status, and timestamps for creation and last update. The API is built using Node.js, Express, and MongoDB.

## Features

- Create a new task with title, description, and status.
- Retrieve all tasks or a specific task by its ID.
- Update a task's title, description, or status.
- Delete a task by its ID.

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

- `POST /tasks`: Create a new task.
- `GET /tasks`: Retrieve all tasks.
- `GET /tasks/:id`: Retrieve a specific task by its ID.
- `PUT /tasks/:id`: Update a task by its ID.
- `DELETE /tasks/:id`: Delete a task by its ID.

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


