﻿# Med_Wander_assignment
# Dynamic Form Builder

This is a web application built using the SQL, Express, React, and Node.js stack that features dynamic forms based on user interaction. The application demonstrates proficiency in frontend and backend development, including database operations and external data synchronization with a Google Sheet.

## Features

- Dynamic forms for Form A and Form B.
- Form validation.
- Data storage in a SQL database.
- Data synchronization with a Google Sheet.
- User-friendly and responsive UI.
- Data persistence using local storage.

## Prerequisites

- Node.js
- npm
- MySQL database
- Google Service Account for Google Sheets API

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/dynamic-form-builder.git
    cd dynamic-form-builder
    ```

2. Install dependencies:
    ```bash
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

3. Set up MySQL database:
    - Create a new database in MySQL.
    - Update the database configuration in `backend/src/config/db.js`.

4. Set up Google Sheets API:
    - Create a service account in the Google Cloud Console.
    - Share your Google Sheet with the service account email.
    - Download the service account credentials JSON file.
    - Place the credentials file in the `backend/src` directory and name it `credentials.json`.

5. Configure environment variables:
    - Create a `.env` file in the `backend` directory with the following content:
      ```
      GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account-email
      GOOGLE_PRIVATE_KEY=your-private-key
      DB_HOST=your-database-host
      DB_USER=your-database-username
      DB_PASSWORD=your-database-password
      DB_NAME=your-database-name
      ```

## Running the Application

1. Start the backend server:
    ```bash
    cd backend
    npm start
    ```

2. Start the frontend application:
    ```bash
    cd frontend
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

