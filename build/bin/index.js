#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vamtiger_get_directory_content_1 = require("vamtiger-get-directory-content");
const __1 = require("..");
const workingDirectory = process.cwd();
main().catch(handleError);
async function main() {
    const directoryContent = await vamtiger_get_directory_content_1.default(workingDirectory);
    const ignore = directoryContent.includes('package.json');
    if (ignore) {
        throw new Error("This project has already been created" /* alreadyCreated */);
    }
    await __1.default();
}
function handleError(error) {
    console.error(error);
    process.exit();
}
;
//# sourceMappingURL=index.js.map