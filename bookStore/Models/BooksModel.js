const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type:Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },

});
const BookModel = model("Book", BookSchema);
module.exports = { BookModel }

