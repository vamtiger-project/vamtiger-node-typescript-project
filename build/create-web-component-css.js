"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const vamtiger_create_directory_1 = require("vamtiger-create-directory");
const vamtiger_create_file_1 = require("vamtiger-create-file");
const { cwd } = process;
const { all: parallel } = Promise;
const folder = path_1.resolve(cwd(), 'source', 'css');
const cssPath = path_1.resolve(folder, 'index.css');
const documentCssPath = path_1.resolve(folder, 'document-index.css');
async function default_1() {
    await vamtiger_create_directory_1.default(folder);
    await parallel([
        vamtiger_create_file_1.default(cssPath, ''),
        vamtiger_create_file_1.default(documentCssPath, '')
    ]);
}
exports.default = default_1;
//# sourceMappingURL=create-web-component-css.js.map