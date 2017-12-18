import { resolve as resolvePath, basename } from 'path';
import createDirectory from 'vamtiger-create-directory';
import createFile from 'vamtiger-create-file';
import copyFile from 'vamtiger-copy-file';
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
    const tsconfigSource = resolvePath(
        __dirname,
        '..',
        'tsconfig.json'
    );
    const tsconfigDestination = resolvePath(
        workingDirectory,
        basename(tsconfigSource)
    );
    const tsconfig = {
        source: tsconfigSource,
        destination: tsconfigDestination
    };

    await createDirectory(sourceFolder);

    await initializePackage();

    await updatePackage({ projectPackage });
    
    await Promise.all([
        initializeRepository({ workingDirectory }),
        createDirectory(testFolder),
        createFile(main, ''),
        installDependecies({ workingDirectory }),
        copyFile(tsconfig)
    ]);

    return true;
}