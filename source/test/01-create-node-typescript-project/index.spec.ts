import { resolve as resolvePath } from 'path';
import { expect } from 'chai';
import createDirectory from 'vamtiger-create-directory';
import bash from 'vamtiger-bash';
import getDirectoryContent from 'vamtiger-get-directory-content';
import initializeProject from '../..';

const workingDirectory = resolvePath(
    __dirname,
    'node-typescript-project'
);
const sourceDirectory = resolvePath(
    workingDirectory,
    'source'
);
const expectedContent = [
    'source',
    'test',
    'index.ts'
];


describe('vamtiger-node-typescript-project should', function () {
    it('initialize a node-typescript project', async function () {
        const createWorkingDirectory = await createDirectory(workingDirectory);
        const changeWorkingDirectory = process.chdir(workingDirectory);
        const initialization = await initializeProject();
        const directoryContent = await Promise.all([
            getDirectoryContent(workingDirectory),
            getDirectoryContent(sourceDirectory)
        ]);
        const projectContent = directoryContent.reduce((allContent, directoryContent) => allContent.concat(directoryContent));
        const projectContentCreated = expectedContent.every(expected => projectContent.includes(expected));

        expect(initialization).to.be.ok;
        expect(projectContentCreated).to.be.ok;

        await bash(`rm -rfv ${workingDirectory}`);
    })
})