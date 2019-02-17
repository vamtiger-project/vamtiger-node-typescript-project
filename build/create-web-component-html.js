"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const vamtiger_create_directory_1 = require("vamtiger-create-directory");
const vamtiger_create_file_1 = require("vamtiger-create-file");
const get_web_component_test_html_1 = require("./get-web-component-test-html");
const { cwd } = process;
const folder = path_1.resolve(cwd(), 'source', 'test', 'html');
const htmlPath = path_1.resolve(folder, 'test.html');
async function default_1({ packagePath }) {
    const { name } = require(packagePath);
    const html = get_web_component_test_html_1.default({ name });
    await vamtiger_create_directory_1.default(folder);
    await vamtiger_create_file_1.default(htmlPath, html);
}
exports.default = default_1;
//# sourceMappingURL=create-web-component-html.js.map