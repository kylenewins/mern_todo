const mongoose = require("mongoose")
const db = require("../models")

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/mern_todo", {useNewUrlParser: true}
)

const itemSeed = [
    {
        note: "Buy Milk",
        author: "Kyle",
        date: new Date(Date.now())

    },
    {
        note: "Buy Eggs",
        author: "Kyle",
        date: new Date(Date.now())
    },
    {
        note: "Walk the Dog",
        author: "Jimbo",
        date: new Date(Date.now())
    },
    {
        note: "Do some HW",
        author: "Lucy",
        date: new Date(Date.now())
    }
];

db.Item.remove({})
    .then(() => db.Item.collection.insertMany(itemSeed))
    .then(data => {
        console.log(data.result.n + "records inserted")
        process.exit(0)
    })
    .catch(err => {
        console.log(err)
        process.exit(1)
    })