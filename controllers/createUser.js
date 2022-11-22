const pool = require('../db/index.js');

const newUser = async (req, res, next) => {
  // destructure req.body in variables firstname, lastname, age
  const { firstname, lastname, age } = req.body;
  // create a query to insert data to table users
  const insertQuery = `INSERT INTO users (first_name, last_name, age) VALUES ($1,$2,$3) RETURNING *`;
  // assign extracted variables from req.body as values to be inserted
  const insertValues = [firstname, lastname, age];

  try {
    const result = await pool.query(insertQuery, insertValues);
    console.log(result.rows[0]);
    res.status(201).json({ msg: 'new user created', data: { ...req.body } });
  } catch (err) {
    console.log(err);
  }
};

module.exports = newUser;
