import { DbSingleton } from "./DbSingleton";

export class DbFacade {
  private instance: DbSingleton;

  constructor() {
    this.instance = DbSingleton.getInstance();
  }

  createTable() {
    const createTableStmt =
      "CREATE TABLE Address (ID INTEGER, StreetName VARCHAR(20), City VARCHAR(20))";
    const conn = this.instance.getConnection();
    conn.run(createTableStmt, function (err: { message: any }) {
      if (err) {
        return console.error(err.message);
      }
    });
  }

  insertIntoTable() {
    const insertStatement = `INSERT INTO Address (ID, StreetName, City) values (1, '1234 Some street', 'Layton')`;
    const conn = this.instance.getConnection();
    conn.run(insertStatement, function (err: { message: any }) {
      if (err) {
        return console.error(err.message);
      }
    });
  }

  async getAddresses(): Promise<Address[]> {
    const addresses: Address[] = new Array();

    const selectStmt = `SELECT * FROM Address`;
    const conn = this.instance.getConnection();
    await new Promise((resolve, reject) => {

      conn.all(selectStmt, (err, rows) => {
        if (err) {
          reject(err);
          throw err;
        }
        rows.forEach((row) => {
          const addr = new Address();
          addr.setId(row.ID);
          addr.setStreetName(row.StreetName);
          addr.setCity(row.City);
  
          addresses.push(addr)
        });
        resolve(addresses);
      });
    })

    return addresses;
  }

  serialize(callback: () => void) {
    const conn = this.instance.getConnection();
    conn.serialize(() => {
      callback();

      conn.close();
    })
  }
}

class Address {
  private id: string;
  private streetName: string;
  private city: string;

  constructor() {
    this.id = '';
    this.streetName = '';
    this.city = '';
  }

  getId(): string {
    return this.id;
  }
  getStreetName(): string {
    return this.streetName;
  }
  getCity(): string {
    return this.city;
  }

  setId(id: string) {
    this.id = id;
  }
  setStreetName(streetName: string) {
    this.streetName = streetName;
  }
  setCity(city: string) {
    this.city = city;
  }
}
