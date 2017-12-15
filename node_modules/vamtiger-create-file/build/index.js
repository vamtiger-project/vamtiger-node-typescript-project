"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const util_1 = require("util");
exports.default = util_1.promisify(fs_1.writeFile);
//# sourceMappingURL=index.js.map