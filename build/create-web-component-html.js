"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const vamtiger_create_directory_1 = require("vamtiger-create-directory");
const vamtiger_create_file_1 = require("vamtiger-create-file");
const export_empty_string_1 = require("./snippet/export-empty-string");
const { cwd } = process;
const folder = path_1.resolve(cwd(), 'source', 'html');
const htmlPath = path_1.resolve(folder, 'index.html');
const modulePath = path_1.resolve(folder, 'index.ts');
async function default_1() {
    await vamtiger_create_directory_1.default(folder);
    await Promise.all([
        vamtiger_create_file_1.default(htmlPath, ''),
        vamtiger_create_file_1.default(modulePath, export_empty_string_1.default)
    ]);
}
exports.default = default_1;
//# sourceMappingURL=create-web-component-html.js.map