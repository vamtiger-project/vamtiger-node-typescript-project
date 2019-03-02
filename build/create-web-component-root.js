"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const vamtiger_create_file_1 = require("vamtiger-create-file");
const webcomponent_1 = require("./snippet/webcomponent");
const { cwd } = process;
const folder = path_1.resolve(cwd(), 'source');
async function default_1({ packagePath }) {
    const { name } = require(packagePath);
    const filePath = path_1.resolve(folder, `${name}.ts`);
    await vamtiger_create_file_1.default(filePath, webcomponent_1.default);
}
exports.default = default_1;
//# sourceMappingURL=create-web-component-root.js.map