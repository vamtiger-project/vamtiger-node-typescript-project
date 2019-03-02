"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const vamtiger_create_file_1 = require("vamtiger-create-file");
const webcomponent_element_1 = require("./snippet/webcomponent-element");
const webcomponent_config_1 = require("./snippet/webcomponent-config");
const webcomponent_get_template_1 = require("./snippet/webcomponent-get-template");
const webcomponent_types_1 = require("./snippet/webcomponent-types");
const { cwd } = process;
const folder = path_1.resolve(cwd(), 'source');
const elementPath = path_1.resolve(folder, 'element.ts');
const configPath = path_1.resolve(folder, 'config.ts');
const getTemplatePath = path_1.resolve(folder, 'config.ts');
const typesPath = path_1.resolve(folder, 'config.ts');
async function default_1({ packagePath }) {
    const { name } = require(packagePath);
    await Promise.all([
        vamtiger_create_file_1.default(elementPath, webcomponent_element_1.default({ name })),
        vamtiger_create_file_1.default(configPath, webcomponent_config_1.default),
        vamtiger_create_file_1.default(getTemplatePath, webcomponent_get_template_1.default),
        vamtiger_create_file_1.default(typesPath, webcomponent_types_1.default)
    ]);
}
exports.default = default_1;
//# sourceMappingURL=create-web-component-element.js.map