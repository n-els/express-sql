const pool = require('../db/index.js');

const getSingleUser = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const { rows } = await pool.query(`SELECT * FROM users WHERE id = ${id}`);
  res.json(rows);
};

module.exports = getSingleUser;
