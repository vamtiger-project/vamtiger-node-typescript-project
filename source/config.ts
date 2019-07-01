import {
    BrowserTarget
} from './types';

export const compilerOptionsForBrowser = {
    target: BrowserTarget.es2015,
    lib: [
        BrowserTarget.es2015,
        'dom'
    ]
}