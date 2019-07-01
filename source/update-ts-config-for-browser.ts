import getFileText from 'vamtiger-get-file-text';
import createFile from 'vamtiger-create-file';
import {
    IUpdateTsConfigForBrowser,
    BrowserTarget
} from './types';
import {
    compilerOptionsForBrowser
} from './config'

const { parse, stringify } = JSON;

export default async function ({ path: tsConfigPath }: IUpdateTsConfigForBrowser) {
    const tsConfigText = await getFileText(tsConfigPath);
    const tsConfig = parse(tsConfigText);

    tsConfig.compilerOptions = {
        ...tsConfig.compilerOptions,
        ...compilerOptionsForBrowser
    };

    await createFile(tsConfigPath, stringify(tsConfig));
}