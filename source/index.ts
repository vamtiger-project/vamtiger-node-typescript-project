import { resolve as resolvePath } from 'path';
import createDirectory from 'vamtiger-create-directory';
import createFile from 'vamtiger-create-file';
import initializeRepository from './initialize-repository';
import initializePackage from './initialize-package';
import updatePackage from './update-package';
import installDependecies from './install-dependecies';

export default async () => {
    const workingDirectory = process.cwd();
    const sourceBranch = 'source';
    const sourceFolder = resolvePath(
        workingDirectory,
        sourceBranch
    );
    const testFolder = resolvePath(
        sourceFolder,
        'test'
    );
    const main = resolvePath(
        sourceFolder,
        'index.ts'
    );
    const projectPackage = resolvePath(
        workingDirectory,
        'package.json'
    );

    await createDirectory(sourceFolder);

    await initializePackage();

    await updatePackage({ projectPackage });
    
    await Promise.all([
        initializeRepository({ workingDirectory }),
        createDirectory(testFolder),
        createFile(main, ''),
        installDependecies({ workingDirectory })
    ]);

    return true;
}