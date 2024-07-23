// models/View.js
const mongoose = require("mongoose");

const viewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", required: true
    },
    article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article",
        required: true,
    },
});

module.exports = mongoose.model("View", viewSchema);
