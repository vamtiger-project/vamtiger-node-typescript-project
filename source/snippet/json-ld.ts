export default `import {
    CustomEventName,
    HandleJsonLdAction,
    url as key
} from '../../types';
import json from './json';

const { vamtigerBrowserMethod: eventName } = CustomEventName;
const { dequeue: action } = HandleJsonLdAction;
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