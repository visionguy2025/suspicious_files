"use strict";

// IMPORT BUILT-IN MODULES
import fs from "fs";

// FEATURE to READ JSON FILE
async function jsonRead(file_path=null) {
    const request = await fs.readFileSync(file_path, "utf-8");
    const data = await JSON.parse(request);
    return data;
};

// EXPORT FUNCTION
export {jsonRead};
