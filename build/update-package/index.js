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
const js_beautify_1 = require("js-beautify");
const vamtiger_create_file_1 = require("vamtiger-create-file");
exports.default = (params) => __awaiter(this, void 0, void 0, function* () {
    const projectPackage = params.projectPackage;
    const currentPackage = require(projectPackage);
    let updatedPackage;
    currentPackage.main = 'build';
    currentPackage.types = 'build/index.d.ts';
    currentPackage.scripts.test = 'mocha build/test --recursive';
    currentPackage.scripts.build = 'tsc';
    currentPackage.scripts.commit = 'vamtigerNodeTypescriptCommit --push --publish';
    updatedPackage = js_beautify_1.js_beautify(JSON.stringify(currentPackage));
    yield vamtiger_create_file_1.default(projectPackage, updatedPackage);
});
//# sourceMappingURL=index.js.map