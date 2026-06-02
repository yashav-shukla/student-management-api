const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Yashav@3528',
    database: 'testdb'
 })

 connection.connect((err) => {
    if(err){
        console.log(err);
        return;
    }

    console.log('Connection has been created');

    const creationQuery = `create table  if not exists Students (
    id int primary key auto_increment,
    name varchar(20),
    email varchar(255)
    )`

    connection.execute(creationQuery, (err) => {
        if(err){
            console.log(err);
            console.log.end();
            return;
        }

        console.log('Table is created');
    })
  })

  module.exports = connection;