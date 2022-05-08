const { model, Schema } = require('mongoose');


const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    books: [{ type: Schema.Types.ObjectId, ref: "Book" }]
});

const UserModel = model("User", UserSchema);

module.exports = { UserModel }
