"use strict";

// IMPORT BUILT-IN MODULES
import fs from "fs";

// FEATURE TO OVERWRITE JSON FILE
function jsonWrite(file_path=null, updatedData=null) {
    fs.writeFileSync(file_path, JSON.stringify(updatedData, null, 4), "utf-8");
};

// EXPORT FUNCTION
export {jsonWrite};
