// IMPORT CUSTOM FEATURE MODULES
import {jsonRead} from "../features/json_read.js";
import {jsonWrite} from "../features/json_write.js";

// HANDLER FUNCTION FOR ADDING NEW BLOG
export default async function blogAdd(request, response) {
    const file_path = "../database/blogs.json";
    let data = await jsonRead(file_path);
    data = await JSON.parse(data);

    const newBlog = request.body;
    data.push(newBlog);

    jsonWrite(file_path, data);
    response.status(200);
};
