"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
exports.default = ({ name }) => `
import loadScript from '../node_modules/vamtiger-browser-method/source/load-script';

import {
    Selector,
    ObservedAttribute
} from './types';
import css from './css/document-index';
import getTemplate from './get-template';
import {
    shadowRoot as shadowRootConfig,
    observedAttributes
} from './config';

export const name = '${lodash_1.kebabCase(name)}';

css && loadScript({ name, css })
    .catch(console.error);

export default class ${lodash_1.startCase(name).replace(/\s+/g, '')} extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow(shadowRootConfig);
        const stylesheet = getTemplate({
            selector: Selector.style
        });
        const elements = [
            stylesheet
        ];

        elements.forEach(element => element && shadowRoot.appendChild(element));
    }

    static get observedAttributes() {
        return observedAttributes;
    }

    async connectedCallback() {

    }

    attributeChangedCallback(name: ObservedAttribute, oldValue: string, newValue: string) {

    }
}`.trim();
//# sourceMappingURL=webcomponent-element.js.map