declare const _default: "import {\n    CustomEventName,\n    HandleJsonLdAction\n} from 'vamtiger-browser-method/build/types';\nimport { url as key } from './types';\nimport json from './json';\n\nconst eventName = 'vamtiger-browser-method-dequeue' as CustomEventName.vamtigerBrowserMethod;\nconst action = 'vamtiger-browser-method-dequeue' as HandleJsonLdAction.dequeue;\nconst params = {\n    key\n};\n\nload();\n\nexport default async function load() {\n    const { VamtigerBrowserMethod } = self;\n    const jsonLd = {\n        '@context': 'http://schema.org/',\n        '@type': 'Thing',\n        name: 'Another thing',\n        description: 'Describing another thing'\n    };\n    const data = {\n        jsonLd,\n        json\n    };\n    const event = new CustomEvent(eventName, {\n        detail: {\n            action,\n            params: {\n                ...params,\n                match: true,\n                data\n            }\n        }\n    });\n\n    dispatchEvent(event);\n}";
export default _default;