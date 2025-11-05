"use strict";

// IMPORT BUILT-IN MODULES
import fs from "fs";

// OVERWRITE REQUESTED JSON FILE
export function jsonWrite(filePath=null, data=[]) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4), "utf-8");
};
