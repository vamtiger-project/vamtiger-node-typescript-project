import { spawn } from 'child_process'

export default () => new Promise((resolve, reject) => {
    const prompt = spawn('npm', ['init']);

    prompt.stdout.pipe(process.stdout);
    prompt.stdin.pipe(process.stdin);
    prompt.stderr.pipe(process.stderr);

    process.stdin.on('data', data => {
        prompt.stdin.write(data);
        process.stdin.resume();
    });

    prompt.on('close', resolve);
});