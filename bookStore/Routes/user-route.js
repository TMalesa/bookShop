const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, creteUser, updateUser } = require('../Database-queries/user-database-queries');
const { deleteUserService } = require('../Services/user-service');
const { errorHandler } = require('../Middleware/errorHandler');

router.get('/get-all-users', errorHandler(async (req, res) => {
    const user = await getAllUsers();

    res.status(200).send(user);
}));

router.get('/get-user-by-id/:id', errorHandler(async (req, res) => {
    const { id } = req.params;

    const user = await getUserById(id)

    res.status(200).send(user);
}));

router.delete('/delete-user-by-id/:id', errorHandler(async (req, res) => {
    await deleteUserService()

    res.status(200).send({ message: `Successfully deleted` });
}));

router.post('/create-user', errorHandler(async (req, res) => {
    const { name, surname, email } = req.body;
    await creteUser({ name: name, surname: surname, email: email })

    res.status(200).send({ message: `Successfully created` });
}));

router.put('/update-book/:id', errorHandler(async (req, res) => {
    const { id } = req.params;
    const { name, surname, email } = req.body;
    await updateBook(id, { name: name, surname: surname, email: email })

    res.status(200).send({ message: `Successfully updated` });
}));

module.exports = router;