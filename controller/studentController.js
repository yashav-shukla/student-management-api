const db = require('../utils/db-connection');
const Students = require("../models/students");


const addEntries = async (req, res) => {
    try {
        const { email, name } = req.body;
        const student = await Students.create({
            email: email,
            name: name
        });

        res.status(201).send(`User with name: ${name} is created!`);

    } catch (error) {

        res.status(500).send(`Unable to make an entry.`);

    }

};


const updateEntry = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const updateQuery = "UPDATE students set name =? WHERE id =?";

    db.execute(updateQuery, [name, id], (err, result) => {
        if (err) {
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }

        if (result.affectedRows === 0) {
            res.status(404).send("Student not found");
            return;
        }

        res.status(200).send("User has been updated");

    })
}

const deleteEntry = (req, res) => {
    const { id } = req.params;
    const deleteQuery = "DELETE FROM students WHERE id= ?";

    db.execute(deleteQuery, [id], (err, results) => {
        if (err) {
            console.log(err.message);
            res.status(500).send(err.message);
        }

        if (results.affectedRows === 0) {
            res.status(404).send("Student is not found");
            return;
        }

        res.status(200).send(`User with ${id} is deleted`);
    })
}

module.exports = {
    addEntries,
    updateEntry,
    deleteEntry
}