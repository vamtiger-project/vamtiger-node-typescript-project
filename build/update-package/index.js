"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_beautify_1 = require("js-beautify");
const vamtiger_create_file_1 = require("vamtiger-create-file");
exports.default = async (params) => {
    const projectPackage = params.projectPackage;
    const currentPackage = require(projectPackage);
    let updatedPackage;
    currentPackage.main = 'build';
    currentPackage.types = 'build/index.d.ts';
    currentPackage.scripts.test = 'mocha build/test --recursive';
    currentPackage.scripts.build = 'tsc';
    currentPackage.scripts.commit = 'vamtigerNodeTypescriptCommit --push --publish';
    updatedPackage = js_beautify_1.js_beautify(JSON.stringify(currentPackage));
    await vamtiger_create_file_1.default(projectPackage, updatedPackage);
};
//# sourceMappingURL=index.js.map