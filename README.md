# TO-DOs Web Application

This is a simple TO-DOs web application built with microservices architecture.

## Features

- Create, edit, and delete TO-DOs.
- Set deadlines for TO-DOs.
- Receive notifications for approaching deadlines.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- RabbitMQ
- Nginx (Reverse Proxy)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Docker and Docker Compose

### Installation

1. Clone the repository:

```shell
git clone https://github.com/natilusky/Todo.git
```

2. Navigate to the project directory:

```shell
cd Todo
```

3. Build and start the containers:

```shell
docker-compose up
```

### Configuration

1. Set up environment variables:

- Create a `.env` file in the root directory of each service (e.g., `todos-service/.env`, `notifications-service/.env`) based on the provided `.env.example` files. Modify the variables as needed.








## API Documentation

The API endpoints can be tested using the provided Postman collection. Follow the steps below to import the collection and start testing the API.

1. Open Postman and click on the "Import" button.
2. Select the "Import" option.
3. Enter past the following json to import the collection:
   - [Postman Collection](https://github.com/natilusky/Todo/blob/main/Todo%20List%20API.postman_collection.json)
4. Once imported, you will have access to all the available API endpoints.
5. Set the appropriate environment variables or update the request URLs to match your local setup.
6. Start testing the endpoints by sending requests and observing the responses.
