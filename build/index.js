"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const main_1 = require("vamtiger-argv/build/main");
const vamtiger_create_directory_1 = require("vamtiger-create-directory");
const vamtiger_create_file_1 = require("vamtiger-create-file");
const vamtiger_copy_file_1 = require("vamtiger-copy-file");
const initialize_repository_1 = require("./initialize-repository");
const initialize_package_1 = require("./initialize-package");
const update_package_1 = require("./update-package");
const install_dependecies_1 = require("./install-dependecies");
const args = new main_1.default();
exports.default = async () => {
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
    await vamtiger_create_directory_1.default(sourceFolder);
    await initialize_package_1.default();
    await update_package_1.default({ projectPackage });
    console.log(args.raw);
    console.log({ "args.has('keepAlive')": args.has('keepAlive') });
    await Promise.all([
        initialize_repository_1.default({ workingDirectory }),
        vamtiger_create_directory_1.default(testFolder),
        vamtiger_create_file_1.default(main, ''),
        install_dependecies_1.default({ workingDirectory }),
        vamtiger_copy_file_1.default(tsconfig)
    ]);
    console.log({ "args.has('keepAlive')": args.has('keepAlive') });
    return true;
};
//# sourceMappingURL=index.js.map