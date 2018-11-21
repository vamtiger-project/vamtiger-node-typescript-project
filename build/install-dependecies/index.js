"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vamtiger_bash_1 = require("vamtiger-bash");
exports.default = async (params) => {
    const workingDirectory = params.workingDirectory;
    const bashOptions = {
        cwd: workingDirectory
    };
    const dependencies = [
        '@types/node',
        'mocha',
        '@types/mocha',
        'chai',
        '@types/chai',
        'typescript',
        'vamtiger-node-typescript-commit'
    ].join(' ');
    const install = await vamtiger_bash_1.default(`npm install --save-dev ${dependencies}`, bashOptions)
        .catch(error => console.warn(error));
};
//# sourceMappingURL=index.js.map