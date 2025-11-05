// IMPORT CUSTOM FEATURE MODULES
import {jsonRead} from "../features/json_read.js";

// HANDLER FUNCTION FOR GETTING ALL BLOGS
export default async function blogAll(request, response) {
    const file_path = "../database/blogs.json";
    let data = await jsonRead(file_path);
    data = await JSON.parse(data);

    response.send(data);
};
