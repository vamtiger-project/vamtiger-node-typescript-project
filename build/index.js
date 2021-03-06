"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const vamtiger_create_directory_1 = require("vamtiger-create-directory");
const vamtiger_create_file_1 = require("vamtiger-create-file");
const vamtiger_copy_file_1 = require("vamtiger-copy-file");
const main_1 = require("vamtiger-argv/build/main");
const types_1 = require("./types");
const initialize_repository_1 = require("./initialize-repository");
const initialize_package_1 = require("./initialize-package");
const update_package_1 = require("./update-package");
const install_dependecies_1 = require("./install-dependecies");
const create_browser_test_1 = require("./create-browser-test");
const create_web_component_html_1 = require("./create-web-component-html");
const create_web_component_css_1 = require("./create-web-component-css");
const create_web_component_element_1 = require("./create-web-component-element");
const create_web_component_root_1 = require("./create-web-component-root");
const create_json_ld_script_1 = require("./create-json-ld-script");
const create_json_ld_1 = require("./create-json-ld");
const gitignore_1 = require("./snippet/gitignore");
const create_json_ld_types_1 = require("./create-json-ld-types");
const create_json_ld_load_script_1 = require("./create-json-ld-load-script");
const create_json_ls_json_1 = require("./create-json-ls-json");
const update_ts_config_for_browser_1 = require("./update-ts-config-for-browser");
const args = new main_1.default();
const webComponent = args.has(types_1.CommandlineArgument.webComponent)
    || args.has(types_1.ShortCommandlineArgument.webComponent);
const jsonLd = args.has(types_1.CommandlineArgument.jsonLd)
    || args.has(types_1.ShortCommandlineArgument.jsonLd);
exports.default = async () => {
    const workingDirectory = process.cwd();
    const sourceBranch = 'source';
    const sourceFolder = path_1.resolve(workingDirectory, sourceBranch);
    const testFolder = path_1.resolve(sourceFolder, 'test');
    const main = path_1.resolve(sourceFolder, 'index.ts');
    const projectPackage = path_1.resolve(workingDirectory, 'package.json');
    const tsconfigSource = path_1.resolve(__dirname, '..', 'tsconfig.json');
    const gitIgnore = path_1.resolve(workingDirectory, '.gitignore');
    const tsconfigDestination = path_1.resolve(workingDirectory, path_1.basename(tsconfigSource));
    const tsconfig = {
        source: tsconfigSource,
        destination: tsconfigDestination
    };
    await vamtiger_create_directory_1.default(sourceFolder);
    await initialize_package_1.default();
    await update_package_1.default({ projectPackage });
    await Promise.all([
        initialize_repository_1.default({ workingDirectory }),
        vamtiger_create_directory_1.default(testFolder),
        () => !webComponent && vamtiger_create_file_1.default(main, ''),
        install_dependecies_1.default({ workingDirectory }),
        vamtiger_copy_file_1.default(tsconfig),
        vamtiger_create_file_1.default(gitIgnore, gitignore_1.default)
    ]);
    if (webComponent) {
        await Promise.all([
            create_browser_test_1.default({ packagePath: projectPackage }),
            create_web_component_html_1.default(),
            create_web_component_css_1.default(),
            create_web_component_element_1.default({ packagePath: projectPackage }),
            create_web_component_root_1.default({ packagePath: projectPackage }),
            update_ts_config_for_browser_1.default({ path: tsconfigDestination })
        ]);
    }
    else if (jsonLd) {
        await Promise.all([
            create_browser_test_1.default({ packagePath: projectPackage }),
            create_json_ld_script_1.default({ packagePath: projectPackage }),
            create_json_ld_1.default(),
            create_json_ld_types_1.default({ packagePath: projectPackage }),
            create_json_ld_load_script_1.default({ packagePath: projectPackage }),
            create_json_ls_json_1.default(),
            update_ts_config_for_browser_1.default({ path: tsconfigDestination })
        ]);
    }
    return true;
};
//# sourceMappingURL=index.js.map