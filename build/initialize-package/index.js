"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
exports.default = () => new Promise((resolve, reject) => {
    const prompt = child_process_1.spawn('npm', ['init']);
    prompt.stdout.pipe(process.stdout);
    prompt.stdin.pipe(process.stdin);
    prompt.stderr.pipe(process.stderr);
    process.stdin.on('data', data => {
        prompt.stdin.write(data);
        process.stdin.resume();
    });
    prompt.on('close', resolve);
});
//# sourceMappingURL=index.js.map