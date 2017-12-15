#!/usr/bin/env node

import getDirectoryContent from 'vamtiger-get-directory-content';
import createProject from '..';

const workingDirectory = process.cwd();

main().catch(handleError);

async function main() {
    const directoryContent = await getDirectoryContent(workingDirectory);
    const ignore = directoryContent.includes('package.json');

    if (ignore) {
        throw new Error(ErrorMessage.alreadyCreated);
    }
    
    await createProject();
}

function handleError(error: Error) {
    console.error(error);
    
    process.exit();
}

const enum ErrorMessage {
    alreadyCreated = 'This project has already been created'
};