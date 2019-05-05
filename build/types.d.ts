export declare enum CommandlineArgument {
    bundle = "bundle",
    webComponent = "webComponent",
    jsonLd = "json-ld"
}
export declare enum ShortCommandlineArgument {
    bundle = "b",
    webComponent = "w",
    jsonLd = "j"
}
export declare enum CommandlineArgumentDescription {
    bundle = "Bundle Project",
    webComponent = "Create Web Component Project",
    jsonLd = "Create Javascript Object Notation for Linked Data Project"
}
export declare enum DataAttribute {
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
export declare const commandlineArgumentDescription: {
    webComponent: CommandlineArgumentDescription;
    w: CommandlineArgumentDescription;
};
