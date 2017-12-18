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
const vamtiger_create_directory_1 = require("vamtiger-create-directory");
const vamtiger_create_file_1 = require("vamtiger-create-file");
const vamtiger_copy_file_1 = require("vamtiger-copy-file");
const initialize_repository_1 = require("./initialize-repository");
const initialize_package_1 = require("./initialize-package");
const update_package_1 = require("./update-package");
const install_dependecies_1 = require("./install-dependecies");
exports.default = () => __awaiter(this, void 0, void 0, function* () {
    const workingDirectory = process.cwd();
    const sourceBranch = 'source';
    const sourceFolder = path_1.resolve(workingDirectory, sourceBranch);
    const testFolder = path_1.resolve(sourceFolder, 'test');
    const main = path_1.resolve(sourceFolder, 'index.ts');
    const projectPackage = path_1.resolve(workingDirectory, 'package.json');
    const tsconfigSource = path_1.resolve(__dirname, '..', 'tsconfig.json');
    const tsconfigDestination = path_1.resolve(workingDirectory, path_1.basename(tsconfigSource));
    const tsconfig = {
        source: tsconfigSource,
        destination: tsconfigDestination
    };
    yield vamtiger_create_directory_1.default(sourceFolder);
    yield initialize_package_1.default();
    yield update_package_1.default({ projectPackage });
    yield Promise.all([
        initialize_repository_1.default({ workingDirectory }),
        vamtiger_create_directory_1.default(testFolder),
        vamtiger_create_file_1.default(main, ''),
        install_dependecies_1.default({ workingDirectory }),
        vamtiger_copy_file_1.default(tsconfig)
    ]);
    return true;
});
//# sourceMappingURL=index.js.map