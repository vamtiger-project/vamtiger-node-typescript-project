"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `import jsonLd from './json-ld';
const { stringify } = JSON;
const { head } = document;
const jsonLdScript = document.createElement('script');

jsonLdScript.type = 'application/ld+json';
jsonLdScript.dataset.jsonLd = 'test/json-ld.js';
jsonLdScript.innerHTML = stringify(jsonLd);

head.appendChild(jsonLdScript);
`;
//# sourceMappingURL=json-ld-script.js.map