"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vamtiger_bash_1 = require("vamtiger-bash");
const main_1 = require("vamtiger-argv/build/main");
const types_1 = require("../types");
const args = new main_1.default();
const webComponent = args.has(types_1.CommandlineArgument.webComponent)
    || args.has(types_1.shortCommandlineArgument.w);
const baseDependencies = [
    '@types/node',
    'mocha',
    '@types/mocha',
    'chai',
    '@types/chai',
    'typescript',
    'vamtiger-node-typescript-commit'
];
const webComponentDependencies = webComponent && [
    'vamtiger-remove',
    'vamtiger-bundle-typescript',
    'vamtiger-bundle-html',
    'vamtiger-bundle-css-next',
    'vamtiger-watch'
] || [];
const dependencyGroups = [
    baseDependencies,
    webComponentDependencies
];
exports.default = async (params) => {
    const workingDirectory = params.workingDirectory;
    const bashOptions = {
        cwd: workingDirectory
    };
    const dependencies = Array
        .from(new Set(dependencyGroups.reduce((dependencies, dependencyGroup) => dependencies.concat(dependencyGroup), [])))
        .join(' ');
    const install = await vamtiger_bash_1.default(`npm install --save-dev ${dependencies}`, bashOptions)
        .catch(error => console.warn(error));
};
//# sourceMappingURL=index.js.map