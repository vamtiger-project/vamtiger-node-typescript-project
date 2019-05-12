"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const empty_object_export_1 = require("./snippet/empty-object-export");
const path_1 = require("path");
const vamtiger_create_file_1 = require("vamtiger-create-file");
const { cwd } = process;
const folder = path_1.resolve(cwd(), 'source');
async function default_1() {
    const filePath = path_1.resolve(folder, 'json.ts');
    await vamtiger_create_file_1.default(filePath, empty_object_export_1.default);
}
exports.default = default_1;
//# sourceMappingURL=create-json-ls-json.js.map