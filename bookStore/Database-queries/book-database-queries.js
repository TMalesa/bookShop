const { BookModel } = require('../Models/BooksModel')


const getAllBooks = async () => {
    const books = await BookModel.find({});

    return books;
}

const getBookById = async (bookId) => {
    const book = await BookModel.findOne({ _id: bookId }).populate('author');

    return book;
}

const deleteBookById = async (bookId) => {
    const book = await BookModel.deleteOne({ _id: bookId });

    return book;
}

const createBook = async ({ title, description, author, price }) => {
    const book = await BookModel.create({
        title: title,
        description: description,
        price: price,
        author: author
    });

    return book;
}

const updateBook = async (bookId, { title, description, author, price }) => {
    await BookModel.updateOne({ _id: bookId },
        {
            title: title,
            description: description,
            price: price,
            author: author
        });

    return `Operation updated successfully`;
}

const deleteMultipleBooksByAuthorId = async (authorId) => {
    await BookModel.deleteMany({ author: authorId });

    return `Operation deleted successfully`;
}

const linkUserToBook = async (bookId, authorId) => {
    await BookModel.updateOne({ _id: bookId }, { author: authorId });

    return `Operation completed successfully`;
}

module.exports = { createBook, deleteBookById, updateBook, getAllBooks, getBookById, deleteMultipleBooksByAuthorId, linkUserToBook }