const User = require('../models/userModel');

module.exports = {
    createUser: async (req, res) => {
        try {
            const { nombre, apellido, edad } = req.body;
            const newUser = new User({ nombre, apellido, edad });
            await newUser.save();
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const { nombre, apellido, edad } = req.body;
            const updatedUser = await User.findByIdAndUpdate(id, { nombre,apellido, edad }, { new: true });
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            await User.findByIdAndDelete(id);
            res.status(200).json({ message: 'Usuario eliminado' });
        } catch (error) {
            console.log("deleting")
            res.status(500).json({ message: error.message });
        }
    }
};