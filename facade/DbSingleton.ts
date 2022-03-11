import sqlite3 from 'sqlite3';

export class DbSingleton {
  private static instance: DbSingleton;
  db: sqlite3.Database;

  private constructor() {
    this.db = new sqlite3.Database(':memory:')
  }

  static getInstance(): DbSingleton {
    if (this.instance === undefined) {
      this.instance = new DbSingleton();
    }
    return this.instance;
  }

  getConnection() {
    return this.db;
  }
}