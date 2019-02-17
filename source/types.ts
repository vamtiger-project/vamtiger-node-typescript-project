export enum CommandlineArgument {
    webComponent = 'webComponent'
}

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

export const shortCommandlineArgument = {
    w: CommandlineArgument.webComponent
};

export const commandlineArgumentDescription = {
    webComponent: CommandlineArgumentDescription.webComponent,
    w: CommandlineArgumentDescription.webComponent
};