require("dotenv").config();
const mongoose = require("mongoose");
const Question = require("./models/question");


const questions = [
    {question: "What is the name of my grandmother?", answer: "Mama Achenetu"},
    {question: "What is Samuel Middle name?", answer: "Ojonugwa"},
    {question: "What is Gloria middle name?", answer: "Ojonumi"},
    {question: "What is Bob best meal?", answer: "chips and Egg"},
    {question: "What is  Ojonugwa best meal?", answer: "Swallow"},
];

mongoose.connect(process.env.MONGODB_URL) 
.then(async() => {
    console.log("Connected to MongoDB");
    await Question.deleteMany({});  // This clears the existing questions 
    await Question.insertMany(questions); // This is insert new questions.
    console.log("Questions seeded successfully");
    mongoose.disconnect();
})
.catch(err => {
    console.error("Error connecting to MongoDB:", err)
});