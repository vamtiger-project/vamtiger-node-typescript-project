"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const chai_1 = require("chai");
const vamtiger_create_directory_1 = require("vamtiger-create-directory");
const vamtiger_bash_1 = require("vamtiger-bash");
const vamtiger_get_directory_content_1 = require("vamtiger-get-directory-content");
const __1 = require("../..");
const workingDirectory = path_1.resolve(__dirname, 'node-typescript-project');
const sourceDirectory = path_1.resolve(workingDirectory, 'source');
const expectedContent = [
    'source',
    'test',
    'index.ts'
];
describe('vamtiger-node-typescript-project should', function () {
    it('initialize a node-typescript project', async function () {
        const createWorkingDirectory = await vamtiger_create_directory_1.default(workingDirectory);
        const changeWorkingDirectory = process.chdir(workingDirectory);
        const initialization = await __1.default();
        const directoryContent = await Promise.all([
            vamtiger_get_directory_content_1.default(workingDirectory),
            vamtiger_get_directory_content_1.default(sourceDirectory)
        ]);
        const projectContent = directoryContent.reduce((allContent, directoryContent) => allContent.concat(directoryContent));
        const projectContentCreated = expectedContent.every(expected => projectContent.includes(expected));
        chai_1.expect(initialization).to.be.ok;
        chai_1.expect(projectContentCreated).to.be.ok;
        await vamtiger_bash_1.default(`rm -rfv ${workingDirectory}`);
    });
});
//# sourceMappingURL=index.spec.js.map