const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('testdb', 'root', 'Yashav@3528', {
    host: 'localhost',
    dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

(async () => {
    try {

        await sequelize.authenticate();
        console.log("Connection to the database has been created");

    } catch (error) {

        console.log(error);
    }
})();


module.exports = sequelize;




// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Yashav@3528',
//     database: 'testdb'
//  })

//  connection.connect((err) => {
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log('Connection has been created');

//     const creationQuery = `create table  if not exists Students (
//     id int primary key auto_increment,
//     name varchar(20),
//     email varchar(255)
//     )`

//     connection.execute(creationQuery, (err) => {
//         if(err){
//             console.log(err);
//             console.log.end();
//             return;
//         }

//         console.log('Table is created');
//     })
//   })

//   module.exports = connection;

