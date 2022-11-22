const { query } = require('express');
const pool = require('../db/index.js');

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { firstname, lastname, age } = req.body;

  const queryString =
    'UPDATE users SET first_name=$1, last_name=$2, age=$3 WHERE id=$4 RETURNING *';
  const values = [firstname, lastname, age, id];

  try {
    const result = await pool.query(queryString, values);
    console.log(result.rows[0]);
    res
      .status(200)
      .json({ msg: `user with id: ${id} was successfully updated` });
  } catch (err) {
    console.error(err);
    // res.end();
  }
};

module.exports = updateUser;
