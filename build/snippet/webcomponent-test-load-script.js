"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
exports.default = ({ name }) => `import * as VBM from 'vamtiger-browser-method/build/types';
import { expect } from 'chai';

const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;

export default () => describe('${lodash_1.kebabCase(name)}', function () {
    before(async function () {
        await loadScript({
            src: '${lodash_1.kebabCase(name)}.js'
        });
    });

    it('load script', async function() {
        const script = document.head.querySelector('[src="${lodash_1.kebabCase(name)}.js"]');

        expect(script instanceof HTMLScriptElement).to.be.true;
    });
});`;
//# sourceMappingURL=webcomponent-test-load-script.js.map