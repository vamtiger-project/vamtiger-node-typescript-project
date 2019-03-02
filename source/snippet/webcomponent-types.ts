export default `export enum StringConstant {
    nothing = ''
}

export enum Selector {
    style = 'style'
}

export enum ObservedAttributes {

}

export interface IGetTemplate {
    selector: Selector;
    attributes?: IAttributes;
    properties?: IProperties;
}

export interface IAttributes {
    id?: string;
    for?: string;
}

export interface IProperties {
    innerHTML?: string;
}

export type AttributesKey = keyof IAttributes;

export type ObservedAttribute = keyof typeof ObservedAttributes;

export type GetTemplate<P extends IGetTemplate> =
    P['selector'] extends Selector.style ? HTMLStyleElement :
    null;`