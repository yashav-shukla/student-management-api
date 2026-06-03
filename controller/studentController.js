const db = require('../utils/db-connection');
const Students = require("../models/students");

const getAllStudents = async (req, res) => {
    try {
        const students = await Students.findAll();
        res.status(200).json(students);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

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


const updateEntry = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const student = await Students.findByPk(id);

        if (!student) {
            res.status(404).send("User is not found");
        }

        student.name = name;
        await student.save();
        res.status(200).send("User has been updated!");

    } catch (error) {
        res.status(500).send("User cannot not updated");
    }
};


const deleteEntry = async(req, res) => {

    try {
        const { id } = req.params;
        const student=await Students.destroy({
            where:{
                id:id
            }
        })

        if(!student){
        res.status(404).send("Student is not found");
    }
        res.status(200).send(`User with id: ${id} is deleted`);
    } catch (error) {
        res.status(500).send(`Error encountered while deleting.`);
    }

};

module.exports = {
    getAllStudents,
    addEntries,
    updateEntry,
    deleteEntry
}