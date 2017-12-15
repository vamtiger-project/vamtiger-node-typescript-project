import bash from 'vamtiger-bash';

export default async (params: Params) => {
    const workingDirectory = params.workingDirectory;
    const bashOptions = {
        cwd: workingDirectory
    };
    const initializeRepository = await bash(
        'git init', 
        bashOptions
    );

    return initializeRepository;
}

export interface Params {
    workingDirectory: string;
}