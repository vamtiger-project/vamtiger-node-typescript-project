"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `import {
    ScriptType,
    url
} from './types';
import jsonLd from './json-ld';
import json from './json';
import loadScript from './load-script';

const jsonLdParams = jsonLd.map(data => ({
    url,
    type: ScriptType.jsonLd,
    data
}));
const jsonParams = {
    url,
    type: ScriptType.json,
    data: json
};
const scriptParams = [
    ...jsonLdParams,
    jsonParams
];

scriptParams.forEach(loadScript);
`;
//# sourceMappingURL=json-ld-script.js.map