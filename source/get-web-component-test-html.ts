import { IGetWebComponentTestHtml } from './types';

export default ({ name }: IGetWebComponentTestHtml) => `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <title>${name}</title>

        <link rel="stylesheet" href="https://unpkg.com/mocha/mocha.css">
        <link rel="stylesheet" href="test.css">

        <script src="https://unpkg.com/mocha/mocha.js"></script>
        <script src="https://unpkg.com/chai/chai.js"></script>
        <script
            src="https://unpkg.com/vamtiger-browser-support@latest/build/vamtiger-browser-support.js"
            src-local="http://127.0.0.1:9999/build/vamtiger-browser-support.js"
            data-es2015-support-primary
            data-element-query-support
            data-web-component-support
            data-fetch-support
            data-load="test/browser.js"
        ></script>
    </head>

    <body>
        <section id="mocha">
            <header>
                <h1>
                    ${name}
                </h1>
            </header>
        </section>

        <${name}
            data-jsonld="image.json"
        ></${name}>
    </body>
</html>`;