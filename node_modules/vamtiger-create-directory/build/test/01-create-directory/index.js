"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const chai_1 = require("chai");
const vamtiger_get_directory_content_1 = require("vamtiger-get-directory-content");
const vamtiger_bash_1 = require("vamtiger-bash");
const __1 = require("../..");
describe('vamtiger-create-directory should', function () {
    it('create a directory for a defined path', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const directoryName = 'directory-to-create';
            const directoryPath = path_1.resolve(__dirname, directoryName);
            const create = yield __1.default(directoryPath);
            const directoryContent = new Set(yield vamtiger_get_directory_content_1.default(__dirname));
            const removeDirectory = vamtiger_bash_1.default(`rm -rf ${directoryPath}`);
            chai_1.expect(directoryContent.has(directoryName)).to.be.ok;
        });
    });
});
//# sourceMappingURL=index.js.map