"use strict";

// IMPORT NODE MODULES
import express from "express";
import cors from "cors";

// CUSTOM MODULES
import {jsonRead} from "./custom_modules/json_read.js";
import {jsonWrite} from "./custom_modules/json_write.js";

// CONSTANT VARIABLES
const port = 5000;
const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// HANDLERS
async function createUser(request, response) {
    const FILE_PATH = "./database/users.json";
    const allCurrentUsers = await jsonRead(FILE_PATH);
    const newUser = request.body;
    allCurrentUsers.push(newUser);
    jsonWrite(FILE_PATH, allCurrentUsers);
    response.send(`New user ${newUser.firstname}'s data successfully sent.`);
};
async function getAllUsers(request, response) {
    const FILE_PATH = "./database/users.json";
    const allCurrentUsers = await jsonRead(FILE_PATH);
    response.send(allCurrentUsers);
};
async function showUserDetails(request, response) {
    console.log(request.params);
    response.send(request.params);
};

// API ENDPOINTS
app.post("/user/signup", createUser);
app.get("/user/all", getAllUsers);
app.get("/user/:id", showUserDetails);

// SERVER
app.listen(port, () => {
    console.log(`APP LOADED ON PORT ${port}`);
});
