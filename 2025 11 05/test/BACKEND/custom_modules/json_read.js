"use strict";

// IMPORT BUILT-IN MODULES
import fs from "fs";

// READ REQUESTED JSON FILE
export async function jsonRead(filePath=null) {
    let output = [];
    try {
        const request = await fs.readFileSync(filePath, "utf-8");
        output = await JSON.parse(request);
        return output;
    } catch(error) {
        console.log(error);
    };
};
