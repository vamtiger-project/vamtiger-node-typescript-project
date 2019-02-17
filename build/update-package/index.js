"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_beautify_1 = require("js-beautify");
const vamtiger_create_file_1 = require("vamtiger-create-file");
const main_1 = require("vamtiger-argv/build/main");
const types_1 = require("../types");
const get_web_component_scripts_1 = require("../get-web-component-scripts");
const args = new main_1.default();
const webComponent = args.has(types_1.CommandlineArgument.webComponent)
    || args.has(types_1.shortCommandlineArgument.w);
exports.default = async (params) => {
    const projectPackage = params.projectPackage;
    const currentPackage = require(projectPackage);
    const { name } = currentPackage;
    let updatedPackage;
    currentPackage.main = 'build';
    currentPackage.types = 'build/index.d.ts';
    currentPackage.scripts.test = 'mocha build/test --recursive';
    currentPackage.scripts.build = 'tsc';
    currentPackage.scripts.commit = 'vamtigerNodeTypescriptCommit --push --publish';
    if (webComponent) {
        Object.assign(currentPackage, get_web_component_scripts_1.default({ name }));
    }
    updatedPackage = js_beautify_1.js_beautify(JSON.stringify(currentPackage));
    await vamtiger_create_file_1.default(projectPackage, updatedPackage);
};
//# sourceMappingURL=index.js.map