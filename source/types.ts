export enum CommandlineArgument {
    webComponent = 'webComponent'
}

export enum ShortCommandlineArgument {
    webComponent = 'w'
};

export enum CommandlineArgumentDescription {
    webComponent = 'Create Web Component Project'
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

export const commandlineArgumentDescription = {
    webComponent: CommandlineArgumentDescription.webComponent,
    w: CommandlineArgumentDescription.webComponent
};