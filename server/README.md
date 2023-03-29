# PERN App Backend

## Configuration

Create a PostgreSQL database using the example in `database/example-database.sql`.

Create a `.env` with the following variables

```
DB_HOST:<psql-username>
DB_PASS:<psql-password>
PORT:<port-number>
```

## Installing dependencies

Navigate to the `server` directory.

Run the following command in the terminal

```
npm install
```

## Running the backend

Ensure the PostgreSQL service is running.

Start the Node.js server with

```
node index.js
```
