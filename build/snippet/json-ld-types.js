"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (name) => `export enum ScriptType {
    jsonLd = 'application/ld+json',
    json = 'application/json'
}

export interface IAnyObject {
    [key: string]: any;
}

export interface ILoadScript {
    type: ScriptType;
    url: string;
    data: IAnyObject;
}

export const url = 'https://unpkg.com/${name}';`;
//# sourceMappingURL=json-ld-types.js.map