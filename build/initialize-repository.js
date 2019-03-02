"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vamtiger_bash_1 = require("vamtiger-bash");
exports.default = (params) => {
    const workingDirectory = params.workingDirectory;
    const bashOptions = {
        cwd: workingDirectory
    };
    const initializeRepository = 'git init';
    console.log(initializeRepository);
    return vamtiger_bash_1.default('git init', bashOptions);
};
//# sourceMappingURL=initialize-repository.js.map