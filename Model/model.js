'use strict';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const languageSchema = new Schema({
    title: String,
    imageUrl: String,
});

const languageModel = mongoose.model("languages", languageSchema);

module.exports = languageModel;