export enum CommandlineArgument {
    bundle = 'bundle',
    webComponent = 'webComponent',
    jsonLd = 'json-ld'
}

export enum ShortCommandlineArgument {
    bundle = 'b',
    webComponent = 'w',
    jsonLd = 'j'
};

export enum CommandlineArgumentDescription {
    bundle = 'Bundle Project',
    webComponent = 'Create Web Component Project',
    jsonLd = 'Create Javascript Object Notation for Linked Data Project'
}

export enum DataAttribute {

}

export enum BrowserTarget {
    'es2015'
}

export interface IGetWebComponentScripts {
    name: string;
}

export interface IGetWebComponentTestHtml {
    name: string;
}

export interface ICreateWebComponentHtml {
    packagePath: string;
}

export interface IAttributes {
    id?: string;
    for?: string;
    slot?: string;
}

export interface IProperties {
    innerHTML?: string;
    name?: string;
}

export interface IDataset extends DOMStringMap {

}

export interface IUpdateTsConfigForBrowser {
    path: string;
}

export const commandlineArgumentDescription = {
    webComponent: CommandlineArgumentDescription.webComponent,
    w: CommandlineArgumentDescription.webComponent
};