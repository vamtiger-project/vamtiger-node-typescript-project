"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `import { ObservedAttributes } from './types'

export const shadowRoot = {
    mode: 'open'
} as ShadowRootInit;

export const observedAttributes = Object.keys(ObservedAttributes) as (keyof typeof ObservedAttributes)[];`;
//# sourceMappingURL=webcomponent-config.js.map