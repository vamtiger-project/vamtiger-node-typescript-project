"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
exports.compilerOptionsForBrowser = {
    target: types_1.BrowserTarget.es2015,
    lib: [
        types_1.BrowserTarget.es2015,
        'dom'
    ]
};
//# sourceMappingURL=config.js.map