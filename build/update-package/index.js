"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_beautify_1 = require("js-beautify");
const vamtiger_create_file_1 = require("vamtiger-create-file");
const main_1 = require("vamtiger-argv/build/main");
const types_1 = require("../types");
const get_web_component_scripts_1 = require("../get-web-component-scripts");
const args = new main_1.default();
const webComponent = args.has(types_1.CommandlineArgument.webComponent);
args.has(types_1.ShortCommandlineArgument.webComponent);
exports.default = async (params) => {
    const projectPackage = params.projectPackage;
    const currentPackage = require(projectPackage);
    const { name } = currentPackage;
    let updatedPackage;
    currentPackage.main = 'build';
    currentPackage.types = 'build/index.d.ts';
    currentPackage.scripts.test = 'npm run build && npm run mocha';
    currentPackage.scripts.mocha = 'mocha build/test --recursive';
    currentPackage.scripts.build = 'tsc';
    currentPackage.scripts.commit = 'vamtigerNodeTypescriptCommit --push --publish';
    if (args.has('bundle')) {
        currentPackage.scripts.commit = 'npm run bundle && vamtiger-node-typescript-commit --push --publish --buildScript bundle';
        currentPackage.scripts.clean = 'rm -rf build/*';
        currentPackage.scripts['clean-bundle'] = 'vamtiger-remove -d build -p \"(index|bin)\\.(js(\\.map)?|d\\.ts)\"';
        currentPackage.scripts['bundle-source'] = 'vamtiger-bundle-typescript --relativePath --entryFilePath source/index.ts --bundleFilePath build/index.js --format cjs --sourcemap true --copySourceMap --minify';
        currentPackage.scripts.bundle = 'npm test && npm run clean && npm run build && npm run bundle-source && npm run clean-bundle';
        currentPackage.scripts.watch = 'npm run bundle -- --watch';
    }
    else if (webComponent) {
        Object.assign(currentPackage, get_web_component_scripts_1.default({ name }));
    }
    updatedPackage = js_beautify_1.js_beautify(JSON.stringify(currentPackage));
    await vamtiger_create_file_1.default(projectPackage, updatedPackage);
};
//# sourceMappingURL=index.js.map