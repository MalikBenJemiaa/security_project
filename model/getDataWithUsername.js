// const { rejects } = require("assert");
const mysql = require("mysql2");
// const { resolve } = require('path');

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "security_project",
});
exports.get_info = (a) => {
  return new Promise((resolve, reject) => {
    // (SELECT id FROM security_project.employee where salary=(SELECT MIN(salary) FROM security_project.employee ))
    connection.query(
      "SELECT * FROM security_project.employee where employee.id=" + a + ";",

      (err, result, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};
