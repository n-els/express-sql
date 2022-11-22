const pool = require('../db/index.js');
const getAllUsers = async (req, res, next) => {
  const { rows } = await pool.query('SELECT * FROM users');
  res.json(rows);
};

module.exports = getAllUsers;
