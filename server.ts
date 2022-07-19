import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app : express.Application = express();
const port : string = process.env.PORT;
const mongodb_uri = process.env.MONGODB_URI;

if (mongodb_uri) {
    mongoose
        .connect(mongodb_uri)
        .then(() => console.log("Connected To DB"))
        .catch(() => console.log("Couldn't Connect To DB"));
} else {
    console.log("Couldn't find mongodb_uri");
}

app.use(express.json());
app.use(express.static("public"));

app.listen(port, () => {
    console.log("Server up and running");
});