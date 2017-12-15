import bash from 'vamtiger-bash';

export default async (params: Params) => {
    const workingDirectory = params.workingDirectory;
    const bashOptions = {
        cwd: workingDirectory
    };
    const dependencies = [
        '@types/node',
        'mocha',
        '@types/mocha',
        'typescript',
        'vamtiger-node-typescript-commit'
    ].join(' ');
    const install = await bash(`npm install --save-dev ${dependencies}`, bashOptions)
        .catch(error => console.warn(error));
}

export interface Params {
    workingDirectory: string;
}