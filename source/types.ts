export enum CommandlineArgument {
    bundle = 'bundle',
    webComponent = 'webComponent'
}

export enum ShortCommandlineArgument {
    bundle = 'b',
    webComponent = 'w'
};

export enum CommandlineArgumentDescription {
    webComponent = 'Create Web Component Project'
}

export enum DataAttribute {

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

export const commandlineArgumentDescription = {
    webComponent: CommandlineArgumentDescription.webComponent,
    w: CommandlineArgumentDescription.webComponent
};