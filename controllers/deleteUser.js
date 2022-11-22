const pool = require('../db/index.js');

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  const queryString = `DELETE FROM users where id = $1`;

  try {
    await pool.query(queryString, [id]);
    res.status(202).json({ msg: `user with id: ${id} successfully deleted` });
  } catch (err) {
    console.error(err);
  }
};

module.exports = deleteUser;
