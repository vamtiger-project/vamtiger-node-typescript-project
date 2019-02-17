export declare enum CommandlineArgument {
    webComponent = "webComponent"
}
export declare enum ShortCommandlineArgument {
    webComponent = "w"
}
export declare enum CommandlineArgumentDescription {
    webComponent = "Create Web Component Project"
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
export declare const commandlineArgumentDescription: {
    webComponent: CommandlineArgumentDescription;
    w: CommandlineArgumentDescription;
};