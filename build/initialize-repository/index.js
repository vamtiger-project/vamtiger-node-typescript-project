"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vamtiger_bash_1 = require("vamtiger-bash");
exports.default = async (params) => {
    const workingDirectory = params.workingDirectory;
    const bashOptions = {
        cwd: workingDirectory
    };
    const initializeRepository = await vamtiger_bash_1.default('git init', bashOptions);
    return initializeRepository;
};
//# sourceMappingURL=index.js.map