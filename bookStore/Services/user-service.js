const { deleteUser } = require('../Database-queries/user-database-queries');
const { deleteMultipleBooksByAuthorId } = require('../Database-queries/book-database-queries');

const deleteUserService = async (userId) => {
    await deleteUser(userId);
    await deleteMultipleBooksByAuthorId(userId);

    return `Operation completed successfully`;
}

module.exports = { deleteUserService };