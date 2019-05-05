declare const _default: "import jsonLd from './json-ld';\nconst { stringify } = JSON;\nconst { head } = document;\nconst jsonLdScript = document.createElement('script');\n\njsonLdScript.type = 'application/ld+json';\njsonLdScript.dataset.jsonLd = 'test/json-ld.js';\njsonLdScript.innerHTML = stringify(jsonLd);\n\nhead.appendChild(jsonLdScript);\n";
export default _default;
