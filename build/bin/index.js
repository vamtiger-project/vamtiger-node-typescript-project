#!/usr/bin/env node
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
const vamtiger_get_directory_content_1 = require("vamtiger-get-directory-content");
const __1 = require("..");
const workingDirectory = process.cwd();
main().catch(handleError);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const directoryContent = yield vamtiger_get_directory_content_1.default(workingDirectory);
        const ignore = directoryContent.includes('package.json');
        if (ignore) {
            throw new Error("This project has already been created" /* alreadyCreated */);
        }
        yield __1.default();
    });
}
function handleError(error) {
    console.error(error);
    process.exit();
}
;
//# sourceMappingURL=index.js.map