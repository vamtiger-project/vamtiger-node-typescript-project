"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vamtiger_bash_1 = require("vamtiger-bash");
const main_1 = require("vamtiger-argv/build/main");
const args = new main_1.default();
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
    'vamtiger-remove'
];
exports.default = async (params) => {
    const { workingDirectory } = params;
    const bashOptions = {
        cwd: workingDirectory
    };
    const dependencies = (args.has('bundle') && devDependencies.concat(bundleDevDependencies) || devDependencies).join(' ');
    const installDependencies = `npm install --save-dev ${dependencies}`;
    return vamtiger_bash_1.default(installDependencies, bashOptions)
        .then(console.log)
        .catch(error => console.warn(error));
};
//# sourceMappingURL=index.js.map