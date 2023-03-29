require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Import database connection
const pool = require("./db-conn");

// Create express app on port 5000
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ## ROUTES ##

// Users

// create new item in db
app.post("/u", async (req, res) => {
  try {
    const { description } = req.body;
    const newItem = await pool.query(
      "insert into list (description) values ($1) returning *;",
      [description]
    );

    res.json(newItem.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// read all items in db
app.get("/list", async (req, res) => {
  try {
    const allItems = await pool.query("select * from list;");

    res.json(allItems.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// read specific item by id
app.get("/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const item = await pool.query("select * from list where id = $1;", [id]);

    res.json(item.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update
app.put("/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updatedItem = await pool.query(
      "update list set description = $1 where id = $2;",
      [description, id]
    );

    res.json("Item was deleted.");
  } catch (err) {
    console.error(err.message);
  }
});

// delete
app.delete("/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await pool.query("delete from list where id = $1", [
      id,
    ]);

    res.json("Item was deleted.");
  } catch (err) {
    console.error(err.message);
  }
});

// start app
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
