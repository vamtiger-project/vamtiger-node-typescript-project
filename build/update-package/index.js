"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_beautify_1 = require("js-beautify");
const vamtiger_create_file_1 = require("vamtiger-create-file");
const main_1 = require("vamtiger-argv/build/main");
const types_1 = require("../types");
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
    currentPackage.scripts['clean-bundle'] = `vamtiger-remove -d build -p "(${name})\.(js(\.map)?|d\.ts)"`;
    if (args.has('bundle')) {
        currentPackage.scripts.commit = 'npm run bundle && vamtiger-node-typescript-commit --push --publish --buildScript bundle';
        currentPackage.scripts.clean = 'rm -rf build/*';
        currentPackage.scripts['clean-bundle'] = 'vamtiger-remove -d build -p \"(index|bin)\\.(js(\\.map)?|d\\.ts)\"';
        currentPackage.scripts['bundle-source'] = 'vamtiger-bundle-typescript --relativePath --entryFilePath source/index.ts --bundleFilePath build/index.js --format cjs --sourcemap true --copySourceMap --minify';
        currentPackage.scripts.bundle = 'npm test && npm run clean && npm run build && npm run bundle-source && npm run clean-bundle';
        currentPackage.scripts.watch = 'npm run bundle -- --watch';
    }
    else if (webComponent) {
        currentPackage.scripts.test = 'npm run clean && npm run build && npm run bundle-node-test && npm run bundle-browser-test && npm run mocha && npm run bundle-source';
        currentPackage.scripts.mocha = 'mocha build/test/node --recursive';
        currentPackage.scripts.build = 'tsc';
        currentPackage.scripts.commit = 'npm run bundle && vamtiger-node-typescript-commit --push --publish --buildScript bundle';
        currentPackage.scripts.clean = 'rm -rf build/*';
        currentPackage.scripts['clean-install'] = 'rm -rf package-lock.json node_modules && npm i';
        currentPackage.scripts['clean-bundle'] = `vamtiger-remove -d build -p "(${name})\.(js(\.map)?|d\.ts)"`;
        currentPackage.scripts['bundle-source'] = `vamtiger-bundle-typescript --relativePath --entryFilePath source/${name}.ts --bundleFilePath build/${name}.js --format iife --sourcemap true --copySourceMap --minify`;
        currentPackage.scripts['bundle-node-test'] = 'vamtiger-bundle-typescript --relativePath --entryFilePath source/test/node.ts --bundleFilePath build/test/node.js --format cjs --sourcemap true --copySourceMap --minify';
        currentPackage.scripts['bundle-browser-test'] = 'vamtiger-bundle-typescript --relativePath --entryFilePath source/test/browser.ts --bundleFilePath build/test/browser.js --format iife --sourcemap true --copySourceMap --minify';
        currentPackage.scripts['bundle'] = 'npm test && npm run bundle-source && npm run clean-bundle';
        currentPackage.scripts['bundle-html'] = 'vamtiger-bundle-html --relativePath --entryFilePath source/html/index.html --bundleFilePath --bundleFilePath source/html/index.ts';
        currentPackage.scripts['bundle-css'] = 'npm run bundle-shadow-css && npm run bundle-document-css';
        currentPackage.scripts['bundle-shadow-css'] = 'vamtiger-bundle-css-next --relativePath --entryFilePath source/css/index.css --bundleFilePath source/css/index.ts --sourcemap inline';
        currentPackage.scripts['bundle-document-css'] = 'vamtiger-bundle-css-next --relativePath --entryFilePath source/css/document-index.css --bundleFilePath source/css/document-index.ts --sourcemap inline';
        currentPackage.scripts['watch-source'] = 'npm run bundle-source -- --watch';
        currentPackage.scripts['watch-node-test'] = 'npm run bundle-node-test -- --watch';
        currentPackage.scripts['watch-browser-test'] = 'npm run bundle-browser-test -- --watch';
        currentPackage.scripts['watch-html'] = 'npm run bundle-html -- --watch';
        currentPackage.scripts['watch-css'] = 'npm run bundle-css -- --watch';
        currentPackage.scripts.watch = 'vamtiger-watch --folder source --extension ts --script test --extension html --script bundle-html --extension css --script bundle-css';
        currentPackage.scripts.serve = 'npm run test && cd build && python -m SimpleHTTPServer';
    }
    updatedPackage = js_beautify_1.js_beautify(JSON.stringify(currentPackage));
    await vamtiger_create_file_1.default(projectPackage, updatedPackage);
};
//# sourceMappingURL=index.js.map