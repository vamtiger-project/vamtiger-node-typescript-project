import { spawn } from 'child_process'

export default () => new Promise((resolve, reject) => {
    const prompt = spawn('npm', ['init']);

    prompt.stdout.pipe(process.stdout);
    prompt.stdin.pipe(process.stdin);

    process.stdin.on('data', data => {
        prompt.stdin.write(data);
        process.stdin.resume();
    });

    process.stdin.on('close', resolve);
});