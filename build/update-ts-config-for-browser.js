"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vamtiger_get_file_text_1 = require("vamtiger-get-file-text");
const vamtiger_create_file_1 = require("vamtiger-create-file");
const config_1 = require("./config");
const { parse, stringify } = JSON;
async function default_1({ path: tsConfigPath }) {
    const tsConfigText = await vamtiger_get_file_text_1.default(tsConfigPath);
    const tsConfig = parse(tsConfigText);
    tsConfig.compilerOptions = Object.assign({}, tsConfig.compilerOptions, config_1.compilerOptionsForBrowser);
    await vamtiger_create_file_1.default(tsConfigPath, stringify(tsConfig));
}
exports.default = default_1;
//# sourceMappingURL=update-ts-config-for-browser.js.map