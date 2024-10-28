const db = require('../config/db');

class User {
  static getAll(callback) {
    db.query('SELECT * FROM users', (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  }
}

module.exports = User;
