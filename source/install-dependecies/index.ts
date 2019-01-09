import bash from 'vamtiger-bash';
import Args from 'vamtiger-argv/build/main';

const args = new Args();
const devDependencies = [
    '@types/node',
    'mocha',
    '@types/mocha',
    'chai',
    '@types/chai',
    'typescript',
    'vamtiger-node-typescript-commit'
];
const bundleDevDependencies = [
    'vamtiger-bundle-typescript',
    'vamtiger-remove'
];

export default async (params: Params) => {
    const { workingDirectory } = params;
    const bashOptions = {
        cwd: workingDirectory
    };
    const dependencies = (args.has('bundle') && devDependencies.concat(bundleDevDependencies) || devDependencies).join(' ');
    const installDependencies = `npm install --save-dev ${dependencies}`;
    
    return bash(installDependencies, bashOptions)
        .then(console.log)
        .catch(error => console.warn(error));
}

export interface Params {
    workingDirectory: string;
}