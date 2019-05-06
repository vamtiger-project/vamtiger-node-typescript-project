import { kebabCase } from 'lodash';

export interface IParams {
    name: string;
}

export default ({name}: IParams) => `import * as VBM from 'vamtiger-browser-method/build/types';
import { expect } from 'chai';

const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;

export default () => describe('${kebabCase(name)}', function () {
    before(async function () {
        await loadScript({
            src: '${kebabCase(name)}.js'
        });
    });

    it('load script', async function() {
        const script = document.head.querySelector('[src="${kebabCase(name)}.js"]');

        expect(script instanceof HTMLScriptElement).to.be.true;
    });
});`
