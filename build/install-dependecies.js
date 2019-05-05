"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vamtiger_bash_1 = require("vamtiger-bash");
const main_1 = require("vamtiger-argv/build/main");
const types_1 = require("./types");
const args = new main_1.default();
const webComponent = args.has(types_1.CommandlineArgument.webComponent)
    || args.has(types_1.ShortCommandlineArgument.webComponent);
const jsonLd = args.has(types_1.CommandlineArgument.jsonLd)
    || args.has(types_1.ShortCommandlineArgument.jsonLd);
const bundle = args.has(types_1.CommandlineArgument.bundle)
    || args.has(types_1.ShortCommandlineArgument.bundle);
const devDependencies = [
    '@types/node',
    'mocha',
    '@types/mocha',
    'chai',
    '@types/chai',
    'typescript',
    'vamtiger-node-typescript-commit'
];
const bundleDevDependencies = [
    'vamtiger-bundle-typescript',
    'vamtiger-bundle-css-next',
    'vamtiger-bundle-html',
    'vamtiger-remove',
    'vamtiger-get-directory-content',
    'vamtiger-bash'
];
const webComponentsDevDependecies = [
    'vamtiger-browser-method@source',
    'vamtiger-copy-file',
    'vamtiger-get-directory-content',
    'vamtiger-watch'
];
const jsonDevDependecies = [
    'vamtiger-browser-method'
];
exports.default = async (params) => {
    const { workingDirectory } = params;
    const bashOptions = {
        cwd: workingDirectory
    };
    const dependencies = devDependencies;
    let installDependencies;
    if (bundle || webComponent) {
        dependencies.push(...bundleDevDependencies);
    }
    if (webComponent) {
        dependencies.push(...webComponentsDevDependecies);
    }
    if (jsonLd) {
        dependencies.push(...jsonDevDependecies);
    }
    installDependencies = `npm install --save-dev ${dependencies.join(' ')}`;
    console.log(installDependencies);
    return vamtiger_bash_1.default(installDependencies, bashOptions)
        .then(console.log)
        .catch(error => console.warn(error));
};
//# sourceMappingURL=install-dependecies.js.map