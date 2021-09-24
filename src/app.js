const dotenv = require("dotenv");
dotenv.config();
const express = require("express")
const app = express();
const path = require("path");
const User = require("./models/userschema");
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");
const staticpath = path.join(__dirname, "../public");
app.use(express.static(staticpath))

const DB = process.env.DB;

mongoose.connect(DB).then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
})

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/", async (req, res) => {
    try {
        // res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        res.status(201).redirect("/#home");

    } catch (error) {
        res.status(500).send(error);
    }
})

app.listen(port, () => {
    console.log(`app is running on ${port}`);
})