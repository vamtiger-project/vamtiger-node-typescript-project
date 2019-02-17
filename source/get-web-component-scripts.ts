import { IGetWebComponentScripts } from './types';

export default function ({ name }: IGetWebComponentScripts) {
    const scripts = {
        test: 'npm run clean && npm run build && npm run bundle-node-test && npm run bundle-browser-test && npm run mocha && npm run bundle-source',
        mocha: 'mocha build/test/node --recursive',
        build: 'tsc',
        commit: 'npm run bundle && vamtiger-node-typescript-commit --push --publish --buildScript bundle',
        clean: 'rm -rf build/*',
        'clean-install': 'rm -rf package-lock.json node_modules && npm i',
        'clean-bundle': `vamtiger-remove -d build -p \\'(${name})\\.(js(\\.map)?|d\\.ts)\\'`,
        'bundle-source': 'vamtiger-bundle-typescript --relativePath --entryFilePath source/vamtiger-oblique-banner.ts --bundleFilePath build/vamtiger-oblique-banner.js --format iife --sourcemap true --copySourceMap --minify',
        'bundle-node-test': 'vamtiger-bundle-typescript --relativePath --entryFilePath source/test/node.ts --bundleFilePath build/test/node.js --format cjs --sourcemap true --copySourceMap --minify',
        'bundle-browser-test': 'vamtiger-bundle-typescript --relativePath --entryFilePath source/test/browser.ts --bundleFilePath build/test/browser.js --format iife --sourcemap true --copySourceMap --minify',
        'bundle': 'npm test && npm run bundle-source && npm run clean-bundle',
        'bundle-html': 'vamtiger-bundle-html --relativePath --entryFilePath source/html/index.html --bundleFilePath --bundleFilePath source/html/index.ts',
        'bundle-css': 'npm run bundle-shadow-css && npm run bundle-document-css',
        'bundle-shadow-css': 'vamtiger-bundle-css-next --relativePath --entryFilePath source/css/index.css --bundleFilePath source/css/index.ts --sourcemap inline',
        'bundle-document-css': 'vamtiger-bundle-css-next --relativePath --entryFilePath source/css/document-index.css --bundleFilePath source/css/document-index.ts --sourcemap inline',
        'watch-source': 'npm run bundle-source -- --watch',
        'watch-node-test': 'npm run bundle-node-test -- --watch',
        'watch-browser-test': 'npm run bundle-browser-test -- --watch',
        'watch-html': 'npm run bundle-html -- --watch',
        'watch-css': 'npm run bundle-css -- --watch',
        'watch': 'vamtiger-watch --folder source --extension ts --script test --extension html --script bundle-html --extension css --script bundle-css',
        'serve': 'npm run test && cd build && python -m SimpleHTTPServer'
    };

    return scripts;
}