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
    'vamtiger-browser-method@source'
]

export default async (params: Params) => {
    const { workingDirectory } = params;
    const bashOptions = {
        cwd: workingDirectory
    };
    const dependencies = devDependencies;
    const installDependencies = `npm install --save-dev ${dependencies}`;

    if (bundle || webComponent) {
        dependencies.push(...bundleDevDependencies);
    }

    if (webComponent) {
        dependencies.push(...webComponentsDevDependecies);
    }

    return bash(installDependencies, bashOptions)
        .then(console.log)
        .catch(error => console.warn(error));
}

export interface Params {
    workingDirectory: string;
}