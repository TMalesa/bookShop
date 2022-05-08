const { createBook } = require('../Database-queries/book-database-queries');
const { linkBookToUser } = require('../Database-queries/user-database-queries');

const createBookService = async ({ title, authorId, description, price }) => {
    const createdBook = await createBook({
        title: title,
        author: authorId,
        description: description,
        price: price
    });

    await linkBookToUser(authorId, createdBook._id);

    return `Operation completed successfully`;
}

module.exports = { createBookService };