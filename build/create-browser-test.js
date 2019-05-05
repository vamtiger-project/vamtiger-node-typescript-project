"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const vamtiger_create_directory_1 = require("vamtiger-create-directory");
const vamtiger_create_file_1 = require("vamtiger-create-file");
const get_web_component_test_html_1 = require("./get-web-component-test-html");
const webcomponent_test_browser_1 = require("./snippet/webcomponent-test-browser");
const webcomponent_test_load_script_1 = require("./snippet/webcomponent-test-load-script");
const webcomponent_test_node_1 = require("./snippet/webcomponent-test-node");
const webcomponent_test_generate_1 = require("./snippet/webcomponent-test-generate");
const { cwd } = process;
const folder = path_1.resolve(cwd(), 'source', 'test', 'html');
const testFolder = path_1.dirname(folder);
const htmlPath = path_1.resolve(folder, 'test.html');
const cssPath = path_1.resolve(folder, 'test.css');
const browserTest = path_1.resolve(testFolder, 'browser.ts');
const loadScriptTest = path_1.resolve(testFolder, 'load-script.ts');
const nodeScriptTest = path_1.resolve(testFolder, 'node.ts');
const generateScriptTest = path_1.resolve(testFolder, 'generate.ts');
async function default_1({ packagePath }) {
    const { name } = require(packagePath);
    const html = get_web_component_test_html_1.default({ name });
    await vamtiger_create_directory_1.default(folder);
    await Promise.all([
        vamtiger_create_file_1.default(htmlPath, html),
        vamtiger_create_file_1.default(cssPath, ''),
        vamtiger_create_file_1.default(browserTest, webcomponent_test_browser_1.default),
        vamtiger_create_file_1.default(loadScriptTest, webcomponent_test_load_script_1.default({ name })),
        vamtiger_create_file_1.default(nodeScriptTest, webcomponent_test_node_1.default),
        vamtiger_create_file_1.default(generateScriptTest, webcomponent_test_generate_1.default)
    ]);
}
exports.default = default_1;
//# sourceMappingURL=create-browser-test.js.map