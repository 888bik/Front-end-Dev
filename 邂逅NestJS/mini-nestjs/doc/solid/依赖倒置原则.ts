// // Not following DIP
// class MySQLDatabase {
//   connect() {
//     // Connect to MySQL database
//   }
// }

// class UserRepository {
//   private database: MySQLDatabase;

//   constructor() {
//     this.database = new MySQLDatabase();
//   }

//   save(user: any) {
//     this.database.connect();
//     // Save user to database
//   }
// }
// Following DIP
interface Database {
  connect(): void;
}

class MySQLDatabase implements Database {
  connect() {
    // Connect to MySQL database
  }
}

class UserRepository {
  private database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  save(user: any) {
    this.database.connect();
    // Save user to database
  }
}
export {};
