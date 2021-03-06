
var db = window.openDatabase("t_gear", "1.0", "T GEAR", 200000);

function fetch_transactions_success(name) {
    log(`INFO`, `Insert "${name}" successfully.`);
}

//thong bao chung show ra ngay thang nam.
function log(type, message) {
    var current_time = new Date();
    console.log(`${current_time} [${type}] ${message}`);
}

// thong bao tao thanh cong
function table_transaction_success(table) {
    log(`INFO`, `Create table "${table}" successfully.`);
}

//thong bao loi
function transaction_error(tx, error) {
    log(`ERROR`, `SQL Error ${error.code}: ${error.message}.`);
}

// xu ly databases
function initialize_database() {
    db.transaction(function(tx) {
        
        var query = `CREATE TABLE IF NOT EXISTS city (
         id INTEGER PRIMARY KEY,
         name TEXT UNIQUE NOT NULL
        )`;

        tx.executeSql(query, [], table_transaction_success(`city`), transaction_error);

        
        query = `CREATE TABLE IF NOT EXISTS district (
          id INTEGER PRIMARY KEY,
          name TEXT NOT NULL,
          city_id INTEGER NOT NULL,
          FOREIGN KEY (city_id) REFERENCES city(id)
        )`;

        tx.executeSql(query, [], table_transaction_success(`district`), transaction_error);

        
        query = `CREATE TABLE IF NOT EXISTS ward (
          id INTEGER PRIMARY KEY,
          name TEXT NOT NULL,
          district_id INTEGER NOT NULL,
          FOREIGN KEY (district_id) REFERENCES district(id)
        )`;

        tx.executeSql(query, [], table_transaction_success(`ward`), transaction_error);

        
        query = `CREATE TABLE IF NOT EXISTS account (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         username TEXT UNIQUE NOT NULL,
         password TEXT NOT NULL,
         first_name TEXT NULL,
         last_name TEXT NULL,
         birthday REAL NULL,
         phone TEXT NULL,
         street TEXT NULL,
         ward_id INTEGER NULL,
         district_id INTEGER NULL,
         city_id INTEGER NULL,
         status INTEGER NOT NULL,
         FOREIGN KEY (city_id) REFERENCES city(id)
        )`;

        tx.executeSql(query, [], table_transaction_success(`account`), transaction_error);

        //category
        query = `CREATE TABLE IF NOT EXISTS category (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT UNIQUE NOT NULL,
          description TEXT NULL,
          parent_id INTEGER NULL,
          FOREIGN KEY (parent_id) REFERENCES category(id)
        )`;

        tx.executeSql(query, [], table_transaction_success(`category`), transaction_error);

        // san pham
        query = `CREATE TABLE IF NOT EXISTS product (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          description TEXT NULL,
          price REAL NOT NULL,
          category_id INTEGER NULL,
          FOREIGN KEY (category_id) REFERENCES category(id)
        )`;

        tx.executeSql(query, [], table_transaction_success(`product`), transaction_error);

        // gio hang
        query = `CREATE TABLE IF NOT EXISTS cart (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          account_id INTEGER NOT NULL,
          product_id INTEGER NOT NULL,
          quantity INTEGER NOT NULL,
          FOREIGN KEY (account_id) REFERENCES account(id),
          FOREIGN KEY (product_id) REFERENCES product(id)
        )`;

        tx.executeSql(query, [], table_transaction_success(`cart`), transaction_error);
    });
}

// test thu du lieu vao bang tay
function fetch_database() {
    // de chay duoc phai ghi transaction ra truoc
    db.transaction(function(tx) {
        // khong ghi truc tiep ra de thanh dau ?
        // insert du lieu vo []
        var query = `INSERT INTO category(name, description) VALUES(?, ?)`;

        tx.executeSql(query, ['LAPTOP', 'Description 01'], fetch_transactions_success("Laptop"), transaction_error);
        tx.executeSql(query, ['PC', 'Description 02'], fetch_transactions_success("Pc"), transaction_error);
        tx.executeSql(query, ['GEAR', 'Description 03'], fetch_transactions_success("Gear"), transaction_error);

        // // product
        // query = `INSERT INTO product(name, description, price, category_id) VALUES(?, ?, ?, ?)`;

        // tx.executeSql(query, ['Product 01', 'Description 01', '20000', 1], fetch_transactions_success("Product 01"), transaction_error);
        // tx.executeSql(query, ['Product 02', 'Description 02', '10000', 1], fetch_transactions_success("Product 02"), transaction_error);
        // tx.executeSql(query, ['Product 03', 'Description 03', '100000', 2], fetch_transactions_success("Product 03"), transaction_error);
        // tx.executeSql(query, ['Product 04', 'Description 04', '750000', 2], fetch_transactions_success("Product 04"), transaction_error);
        // tx.executeSql(query, ['Product 05', 'Description 05', '15000', 3], fetch_transactions_success("Product 05"), transaction_error);

        query = `INSERT INTO account(username, password, status) VALUES(?, ?, 1)`;

        tx.executeSql(query, ['admin@gmail.com', '123456'], fetch_transactions_success("test@gmail.com"), transaction_error);
        tx.executeSql(query, ['Thongha@gmail.com', '123456'], fetch_transactions_success("test@gmail.com"), transaction_error);
    });
}