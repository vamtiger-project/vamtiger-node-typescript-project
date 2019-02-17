import bash from 'vamtiger-bash';
import Args from 'vamtiger-argv/build/main';

import {
    CommandlineArgument,
    shortCommandlineArgument
} from '../types';

const args = new Args();
const webComponent = args.has(CommandlineArgument.webComponent)
    || args.has(shortCommandlineArgument.w);
const baseDependencies = [
    '@types/node',
    'mocha',
    '@types/mocha',
    'chai',
    '@types/chai',
    'typescript',
    'vamtiger-node-typescript-commit'
];
const webComponentDependencies = webComponent && [
    'vamtiger-remove',
    'vamtiger-bundle-typescript',
    'vamtiger-bundle-html',
    'vamtiger-bundle-css-next',
    'vamtiger-watch'
] || [];
const dependencyGroups = [
    baseDependencies,
    webComponentDependencies
]

export default async (params: Params) => {
    const workingDirectory = params.workingDirectory;
    const bashOptions = {
        cwd: workingDirectory
    };
    const dependencies = Array
        .from(new Set(dependencyGroups.reduce((dependencies, dependencyGroup) => dependencies.concat(dependencyGroup), [] as string[])))
        .join(' ');
    const install = await bash(`npm install --save-dev ${dependencies}`, bashOptions)
        .catch(error => console.warn(error));
}

export interface Params {
    workingDirectory: string;
}