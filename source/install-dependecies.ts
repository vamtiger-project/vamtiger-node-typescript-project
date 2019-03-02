import bash from 'vamtiger-bash';
import Args from 'vamtiger-argv/build/main';
import { CommandlineArgument, ShortCommandlineArgument } from './types';

const args = new Args();
const webComponent = args.has(CommandlineArgument.webComponent)
    || args.has(ShortCommandlineArgument.webComponent);
const bundle = args.has(CommandlineArgument.bundle)
    || args.has(ShortCommandlineArgument.bundle);
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
    'vamtiger-bundle-css-next',
    'vamtiger-bundle-html',
    'vamtiger-remove',
    'vamtiger-get-directory-content',
    'vamtiger-bash'
];
const webComponentsDevDependecies = [
    'vamtiger-browser-method@source',
    'vamtiger-copy-file',
    'vamtiger-get-directory-content',
    'vamtiger-watch'
]

export default async (params: Params) => {
    const { workingDirectory } = params;
    const bashOptions = {
        cwd: workingDirectory
    };
    const dependencies = devDependencies;

    let installDependencies: string;

    if (bundle || webComponent) {
        dependencies.push(...bundleDevDependencies);
    }

    if (webComponent) {
        dependencies.push(...webComponentsDevDependecies);
    }

    installDependencies = `npm install --save-dev ${dependencies.join(' ')}`;

    console.log(installDependencies);

    return bash(installDependencies, bashOptions)
        .then(console.log)
        .catch(error => console.warn(error));
}

export interface Params {
    workingDirectory: string;
}