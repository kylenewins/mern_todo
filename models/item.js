const mongoose = require("mongoose")
const Schema = mongoose.Schema;

//Generate the Schema
const itemSchema = new Schema({
    note: {type: String, required: true},
    author: {type: String, required: true},
    date: {type: Date, default: Date.now()}
});

//store the schema in a single variable
const Item = mongoose.model("Item", itemSchema)

//export the schema
module.exports = Item