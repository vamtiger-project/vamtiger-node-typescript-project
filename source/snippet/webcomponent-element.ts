import { startCase, kebabCase } from 'lodash';

export interface IParams {
    name: string;
}

export default ({name}: IParams) => `import {
    Selector
} from './types';
import getTemplate from './get-template';
import {
    shadowRoot as shadowRootConfig,
    observedAttributes
} from './config';

export const name = '${kebabCase(name)}';

export default class ${startCase(name)} extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow(shadowRootConfig);
        const stylesheet = getTemplate({
            selector: Selector.stylesheet
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

    attributeChangedCallback(name, oldValue, newValue) {

    }
}`