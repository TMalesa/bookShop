const { UserModel } = require('../Models/UserModel');
const express = require("express");
app = express();

const getAllUsers = async () => {
    const users = await UserModel.find();

    return users;
}

const getUserById = async (userId) => {
    const user = await UserModel.findOne({ _id: userId }).populate('books');

    return user;
}

const deleteUserById = async (userId) => {
    const user = await UserModel.deleteOne({ _id: userId });

    return user;
}

const creteUser = async ({ name, surname, email }) => {
    await UserModel.create({
        name: name,
        surname: surname,
        email: email
    });

    return `Operation created successfully`;
}

const updateUser = async (userId, { name, surname, email }) => {
    const user = await UserModel.updateOne({
        _id: userId,
        name: name,
        surname: surname,
        email: email
    });

    return user;
}

const linkBookToUser = async (userId, bookId) => {

    await UserModel.updateOne(
        {
            _id: userId
        },
        { $addToSet: { books: bookId } }

    );

    return `Operation completed successfully`;
};

const getUserByEmail = async (email) => {
    const user = await UserModel.findOne({ email: email });

    return user;
}
module.exports = { getAllUsers, getUserById, deleteUserById, updateUser, creteUser, linkBookToUser, getUserByEmail }