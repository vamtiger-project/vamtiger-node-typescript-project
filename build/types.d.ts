export declare enum CommandlineArgument {
    webComponent = "webComponent",
}
export declare enum CommandlineArgumentDescription {
    webComponent = "Create Web Component Project",
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
export declare const shortCommandlineArgument: {
    w: CommandlineArgument;
};
export declare const commandlineArgumentDescription: {
    webComponent: CommandlineArgumentDescription;
    w: CommandlineArgumentDescription;
};
