const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Ostdata");
const db = mongoose.connection;

db.on("open", (err) => {
    if(err)throw err;
    console.log("connected to database");
});

const usersSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
});
const Users = mongoose.model("usersModel", usersSchema, "users");

const persons = {
    name: "seb",
    email: "seb@gmail.com",
    password: 123456,
}

const data = new Users({
    name: persons.name,
    email: persons.email,
    password: persons.password,
});

data.save((err)=>{
    if(err)throw err;
    console.log("saved to database");
});