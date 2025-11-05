// IMPORT INSTALLED NPM MODULES
import express from "express";
import cors from "cors";

// IMPORT CUSTOM HANDLER MODULES
import {blogAdd, blogAll, blogDetails, blogEdit, blogRemove, projectAdd, projectAll, projectDetails, projectEdit, projectRemove} from "./handlers/init.js";

// CONSTANT VARIABLES
const PORT = 5000;
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// API ENDPOINTS
app.post("/api/blog/new", blogAdd);
app.get("/api/blog/all", blogAll);
app.get("/api/blog/all/:id", blogDetails);
app.put("/api/blog/edit/:id", blogEdit);
app.delete("/api/blog/remove/:id", blogRemove);
app.post("/api/project/new", projectAdd);
app.get("/api/project/all", projectAll);
app.get("/api/project/all/:id", projectDetails);
app.put("/api/project/edit/:id", projectEdit);
app.delete("/api/project/remove/:id", projectRemove);

// SERVER
app.listen(PORT, () => {console.log(`APPLICATION LAUNCHED ON http://localhost:${PORT}/`);});
