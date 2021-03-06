"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `import {
    IGetTemplate,
    GetTemplate,
    StringConstant,
    AttributesKey
} from './types';
import html from './html';
import css from './css';

const { nothing } = StringConstant;
const template = document.createElement('template');
const stylesheet = \`<style>\${css}</style>\`
const templateHtml = [
    stylesheet,
    html
].join(nothing);

template.innerHTML = templateHtml;

export default <P extends IGetTemplate>(params: P) => {
    const {
        selector,
        attributes = {},
        properties = {}
    } = params;
    const attributesKeys = Object.keys(attributes) as AttributesKey[]
    const templateElement = template.content.querySelector(selector);
    const currentTemplate = templateElement && templateElement.cloneNode(true) as GetTemplate<P>;

    if (currentTemplate) {
        Object.assign(currentTemplate, properties);

        attributesKeys.forEach(key => attributes[key] && currentTemplate.setAttribute(key, attributes[key] || ''));
    }

    return currentTemplate;
};`;
//# sourceMappingURL=webcomponent-get-template.js.map