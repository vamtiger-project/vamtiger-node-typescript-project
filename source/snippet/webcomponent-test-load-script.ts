import { kebabCase } from 'lodash';

export interface IParams {
    name: string;
}

export default ({name}: IParams) => `import loadScript from '../../node_modules/vamtiger-browser-method/source/load-script';
import { expect } from 'chai';

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