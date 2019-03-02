#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("vamtiger-argv/build/main");
const vamtiger_get_directory_content_1 = require("vamtiger-get-directory-content");
const _1 = require(".");
const workingDirectory = process.cwd();
const args = new main_1.default();
main().catch(handleError);
async function main() {
    const directoryContent = await vamtiger_get_directory_content_1.default(workingDirectory);
    const ignore = directoryContent.includes('package.json');
    if (ignore) {
        throw new Error("This project has already been created" /* alreadyCreated */);
    }
    await _1.default();
    if (!args.has('keepAlive'))
        process.exit();
}
function handleError(error) {
    console.error(error);
    process.exit();
}
;
//# sourceMappingURL=bin.js.map