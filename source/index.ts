import { resolve as resolvePath, basename } from 'path';
import createDirectory from 'vamtiger-create-directory';
import createFile from 'vamtiger-create-file';
import copyFile from 'vamtiger-copy-file';
import Args from 'vamtiger-argv/build/main';
import {
    CommandlineArgument,
    ShortCommandlineArgument
} from './types';
import initializeRepository from './initialize-repository';
import initializePackage from './initialize-package';
import updatePackage from './update-package';
import installDependecies from './install-dependecies';
import createWebcomponentTestHtml from './create-web-component-test-html';
import createWebComponentHtml from './create-web-component-html';
import createWebComponentCss from './create-web-component-css';
import createWebComponentElement from './create-web-component-element';
import createWebComponentRoot from './create-web-component-root';
import gitIgnoreSnippet from './snippet/gitignore';

const args = new Args();
const webComponent = args.has(CommandlineArgument.webComponent)
    || args.has(ShortCommandlineArgument.webComponent);

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
    const gitIgnore = resolvePath(
        workingDirectory,
        '.gitignore'
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
        () => !webComponent && createFile(main, ''),
        installDependecies({ workingDirectory }),
        copyFile(tsconfig),
        createFile(gitIgnore, gitIgnoreSnippet)
    ]);

    if (webComponent) {
        await Promise.all([
            createWebcomponentTestHtml({ packagePath: projectPackage }),
            createWebComponentHtml(),
            createWebComponentCss(),
            createWebComponentElement({ packagePath: projectPackage }),
            createWebComponentRoot({ packagePath: projectPackage })
        ]);
    }

    return true;
}