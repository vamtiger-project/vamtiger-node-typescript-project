"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const vamtiger_create_directory_1 = require("vamtiger-create-directory");
const vamtiger_create_file_1 = require("vamtiger-create-file");
const { cwd } = process;
const folder = path_1.resolve(cwd(), 'source', 'html');
const htmlPath = path_1.resolve(folder, 'inxex.html');
async function default_1() {
    await vamtiger_create_directory_1.default(folder);
    await vamtiger_create_file_1.default(htmlPath, '');
}
exports.default = default_1;
//# sourceMappingURL=create-web-component-html.js.map