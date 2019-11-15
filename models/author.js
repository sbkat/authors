const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "is required"],
        minlength: [
            2,
            "must be at least {MINLENGTH} characters."
        ]
    },
    quote: {
        type: String,
        required: [true, "is required"],
        minlength: [
            5,
            "must be at least {MINLENGTH} characters."
        ]
    },
    
}, { timestamps: true });

const Author = mongoose.model('Author', AuthorSchema);

