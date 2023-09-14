# People API

The People API is a CRUD (Create, Read, Update, Delete) RESTful API built using Node.js, Express.js, and Mongoose. It allows you to store and manage people's names.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the API](#running-the-api)
- [API Documentation](#api-documentation)
- [Examples](#examples)

## Prerequisites

Before you can run the People API locally, ensure you have the following software installed on your machine:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- npm (Node Package Manager): Typically included with Node.js installation
- MongoDB: [Download and Install MongoDB](https://docs.mongodb.com/manual/installation/)

## Getting Started

Follow these steps to get the People API up and running on your local machine.

### Installation

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/your-username/people-api.git
   ```

2. Navigate to the project directory:

   ```shell
   cd people-api
   ```

3. Install the project dependencies:

   ```shell
   npm install
   ```

### Running the API

1. Start your MongoDB server. You can do this by running the `mongod` command in your terminal.

2. Create a `.env` file in the project root directory and add the following line to connect to your MongoDB instance (replace `<YOUR_MONGODB_URI>` with your actual MongoDB connection string):

   ```env
   MONGODB_URI=<YOUR_MONGODB_URI>
   ```

3. Start the API:

   ```shell
   npm start
   ```

   The API will be available at `http://localhost:3000`.

4. You can now use tools like Postman, cURL, or your preferred HTTP client to interact with the API. Refer to the [API Documentation](#api-documentation) section for details on available endpoints.

## API Documentation

Detailed documentation for the People API can be found in the [API Documentation](API_DOCUMENTATION.md) file.