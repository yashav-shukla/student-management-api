
<p align="center">
  <h1 align="center">🚀 Express MySQL CRUD API</h1>
</p>
<p align="center">
  <h1 align="center">🎓 Student Management API using Express & Sequelize</h1>
</p>

<p align="center">
  RESTful API built with Node.js, Express.js, MySQL, and Sequelize ORM for managing student records.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Backend-green" />
  <img src="https://img.shields.io/badge/Express.js-Framework-black" />
  <img src="https://img.shields.io/badge/MySQL-Database-blue" />
  <img src="https://img.shields.io/badge/Sequelize-ORM-teal" />
</p>

---

## 📖 Overview

This project demonstrates how to build a RESTful API using Express.js and Sequelize ORM connected to a MySQL database.

The API supports:

* ➕ Create Student Records
* ✏️ Update Existing Students
* 🗑️ Delete Students
* 🔄 Automatic Database Synchronization
* ⚡ Sequelize ORM Integration
* 🛡️ Error Handling & Validation

---

## 🛠️ Tech Stack

| Technology | Purpose              |
| ---------- | -------------------- |
| Node.js    | Runtime Environment  |
| Express.js | Backend Framework    |
| MySQL      | Relational Database  |
| Sequelize  | ORM                  |
| JavaScript | Programming Language |

---

## 📂 Project Structure

```text
student-management-api/
│
├── controller/
│   └── studentController.js
│
├── models/
│   └── students.js
│
├── routes/
│   └── studentsRoutes.js
│
├── utils/
│   └── db-connection.js
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yashav-shukla/student-management-api.git
```

### Navigate to Project

```bash
cd student-management-api
```

### Install Dependencies

```bash
npm install
```

---

## 📦 Required Packages

```bash
npm install express sequelize mysql2
```

---

## 🗄️ Database Setup

Create Database:

```sql
CREATE DATABASE testdb;
```

Verify:

```sql
SHOW DATABASES;
```

---

## 🔌 Configure Sequelize Connection

File:

```text
utils/db-connection.js
```

```javascript
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'testdb',
    'root',
    'YOUR_PASSWORD',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = sequelize;
```

---

## 📄 Student Model

```javascript
const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const Students = sequelize.define("Students", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Students;
```

---

## ▶️ Run Application

Start Server:

```bash
node index.js
```

Expected Output:

```bash
Connection to the database has been created
Server is running on port 3000
```

---

## 📮 API Endpoints

### ➕ Add Student

```http
POST /students/add
```

Request Body:

```json
{
  "name": "Yashav Shukla",
  "email": "yashav@example.com"
}
```

Response:

```json
{
  "message": "Student added successfully"
}
```

---

### ✏️ Update Student

```http
PUT /students/update/:id
```

Request Body:

```json
{
  "name": "Updated Name"
}
```

Response:

```json
{
  "message": "Student updated successfully"
}
```

---

### 🗑️ Delete Student

```http
DELETE /students/delete/:id
```

Response:

```json
{
  "message": "Student deleted successfully"
}
```

---

## 🧪 Testing with Postman

### Create Student

```http
POST http://localhost:3000/students/add
```

### Update Student

```http
PUT http://localhost:3000/students/update/1
```

### Delete Student

```http
DELETE http://localhost:3000/students/delete/1
```

---

## ⚠️ Error Handling

The API handles:

* Invalid Database Credentials
* Missing Request Data
* Student Not Found
* Database Query Failures
* Internal Server Errors

Example:

```json
{
  "message": "Student not found"
}
```

---

## 🚀 Future Improvements

* Get All Students API
* Get Student By ID API
* Input Validation
* Pagination
* Search Functionality
* Authentication & Authorization
* Environment Variables (.env)
---

## 👨‍💻 Author

### Yashav Shukla

GitHub: [@yashavshukla](https://github.com/yashavshukla)

---

## ⭐ Show Your Support

If you found this project useful, consider giving it a ⭐ on GitHub.

Happy Coding! 🚀
