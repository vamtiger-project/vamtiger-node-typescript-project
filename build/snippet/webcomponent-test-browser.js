"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `import { setup, run } from 'mocha';
import loadScript from './load-script';

setup('bdd');

loadScript();

run();`;
//# sourceMappingURL=webcomponent-test-browser.js.map