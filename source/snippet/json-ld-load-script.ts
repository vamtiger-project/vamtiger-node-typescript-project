export default `import {
    ILoadScript
} from './types';

const { stringify } = JSON;

export default function({ type, url: jsonLd, data: currentData }: ILoadScript) {
    const { head } = document;
    const script = document.createElement('script');
    const data = Object.keys(currentData).length && currentData;

    script.type = type;

    script.dataset.jsonLd = jsonLd;

    if (data) {
        script.innerHTML = stringify(data).trim();
    }

    script.innerHTML && head.appendChild(script);
}`