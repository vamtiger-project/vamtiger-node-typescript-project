import { startCase, kebabCase } from 'lodash';

export interface IParams {
    name: string;
}

export default ({name}: IParams) => `
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

export const name = '${kebabCase(name)}';

css && loadScript({ name, css })
    .catch(console.error);

export default class ${startCase(name).replace(/\s+/g, '')} extends HTMLElement {
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