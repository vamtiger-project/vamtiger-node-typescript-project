"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json_ld_1 = require("./snippet/json-ld");
const path_1 = require("path");
const vamtiger_create_file_1 = require("vamtiger-create-file");
const { cwd } = process;
const folder = path_1.resolve(cwd(), 'source');
async function default_1() {
    const filePath = path_1.resolve(folder, 'json-ld.ts');
    await vamtiger_create_file_1.default(filePath, json_ld_1.default);
}
exports.default = default_1;
//# sourceMappingURL=create-json-ld.js.map