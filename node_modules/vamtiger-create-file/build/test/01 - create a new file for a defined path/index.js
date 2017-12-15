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
const __1 = require("../..");
const vamtiger_get_directory_content_1 = require("vamtiger-get-directory-content");
describe('vamtiger-create-file should', function () {
    it('create a new file for a defined path', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const fileName = 'new-file.ts';
            const newFilePath = path_1.resolve(__dirname, fileName);
            const fileData = `export default '${new Date()}';`;
            const create = yield __1.default(newFilePath, fileData);
            const directoryContent = yield vamtiger_get_directory_content_1.default(__dirname);
            const result = new Set(directoryContent).has(fileName);
            chai_1.expect(result).to.be.ok;
        });
    });
});
//# sourceMappingURL=index.js.map