import { DbSingleton } from "./DbSingleton";

(() => {
  function main() {
    const dbSingleton = DbSingleton.getInstance();
    const conn = dbSingleton.getConnection();

    const createTableStmt = 'CREATE TABLE Address (ID INTEGER, StreetName VARCHAR(20), City VARCHAR(20))';

    conn.serialize(function() {
      conn.run(createTableStmt, function (err: { message: any; }) {
        if (err) {
          return console.error(err.message);
        }
        console.log(`Table created.`);
      })

      const insertStatement = `INSERT INTO Address (ID, StreetName, City) values (1, '1234 Some street', 'Layton')`;
      conn.run(insertStatement, function (err: { message: any; }) {
        if (err) {
          return console.error(err.message);
        }
        console.log(`${this.changes} record(s) created.`);
      })

      const selectStmt = `SELECT * FROM Address`
      conn.all(selectStmt, (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach((row) => {
          console.log(`${row.ID} ${row.StreetName} ${row.City}`);
        })
      })
      
      conn.close();
    })

  }

  main();
})();
