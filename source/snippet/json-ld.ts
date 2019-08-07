export default `import {
    CustomEventName,
    HandleJsonLdAction
} from 'vamtiger-browser-method/build/types';
import { url as key } from './types';
import json from './json';

const eventName = 'vamtiger-browser-method-dequeue' as CustomEventName.vamtigerBrowserMethod;
const action = 'vamtiger-browser-method-dequeue' as HandleJsonLdAction.dequeue;
const params = {
    key
};

load();

export default async function load() {
    const { VamtigerBrowserMethod } = self;
    const jsonLd = {
        '@context': 'http://schema.org/',
        '@type': 'Thing',
        name: 'Another thing',
        description: 'Describing another thing'
    };
    const data = {
        jsonLd,
        json
    };
    const event = new CustomEvent(eventName, {
        detail: {
            action,
            params: {
                ...params,
                match: true,
                data
            }
        }
    });

    dispatchEvent(event);
}`