# 🚀 Express MySQL CRUD API

<p align="center">
  <h3 align="center">Student Management System using Express.js & MySQL</h3>
</p>

<p align="center">
  A RESTful API that performs <b>Create, Update, and Delete</b> operations on student records using Express.js and MySQL.
</p>

---

## 📖 Overview

This project demonstrates how to connect a Node.js Express application with a MySQL database using the `mysql2` package.

The API allows users to:

* ➕ Add a new student
* ✏️ Update an existing student
* 🗑️ Delete a student
* ⚠️ Handle database errors gracefully
* 📋 Log database operations for debugging

---

## 🛠️ Tech Stack

| Technology | Usage                |
| ---------- | -------------------- |
| Node.js    | Runtime Environment  |
| Express.js | Backend Framework    |
| MySQL      | Database             |
| mysql2     | MySQL Driver         |
| JavaScript | Programming Language |

---

## 📂 Project Structure

```text
SQL/
│
├── controller/
│   └── studentController.js
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
git clone https://github.com/yashavshukla/Express-MySQL-CRUD.git
```

### Move to Project Folder

```bash
cd Express-MySQL-CRUD
```

### Install Dependencies

```bash
npm install
```

---

## 🗄️ Database Setup

Create Database:

```sql
CREATE DATABASE studentdb;
```

Use Database:

```sql
USE studentdb;
```

Create Table:

```sql
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);
```

---

## 🔌 Configure Database Connection

Update your database credentials inside:

```text
utils/db-connection.js
```

```javascript
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "YOUR_PASSWORD",
    database: "studentdb"
});

module.exports = connection;
```

---

## ▶️ Running the Server

Development Mode:

```bash
npm run dev
```

Production Mode:

```bash
node index.js
```

Expected Output:

```bash
Database Connected Successfully
Server Running on Port 3000
```

---

## 📮 API Endpoints

### ➕ Add Student

```http
POST /students
```

Request Body:

```json
{
  "name": "Virat Kohli",
  "email": "virat.kohli@example.com"
}
```

Success Response:

```json
{
  "message": "Student Added Successfully"
}
```

---

### ✏️ Update Student

```http
PUT /students/:id
```

Request Body:

```json
{
  "name": "King Kohli",
  "email": "king.kohli@example.com"
}
```

Success Response:

```json
{
  "message": "Student Updated Successfully"
}
```

---

### 🗑️ Delete Student

```http
DELETE /students/:id
```

Success Response:

```json
{
  "message": "Student Deleted Successfully"
}
```

---

## 🧪 Assignment Verification

### Step 1: Insert Entry

```json
{
  "name": "Virat Kohli",
  "email": "virat.kohli@example.com"
}
```

### Step 2: Update Entry

```json
{
  "name": "King Kohli",
  "email": "king.kohli@example.com"
}
```

### Step 3: Delete Entry

Delete the updated student using its ID.

---

## ⚠️ Error Handling

The API properly handles:

* Invalid Database Connections
* Invalid Student IDs
* Updating Non-Existing Students
* Deleting Non-Existing Students
* Internal Server Errors

Example:

```json
{
  "message": "Student Not Found"
}
```

---

## 📋 Console Logs

```bash
Student Added Successfully
Student Updated Successfully
Student Deleted Successfully
```

---

## 👨‍💻 Author

### Yashav Shukla

GitHub: [@yashavshukla](https://github.com/yashavshukla)
- Profile: https://github.com/yashavshukla

---

## ⭐ Show Your Support

If you found this project useful, consider giving it a ⭐ on GitHub.

Happy Coding! 🚀
