import bash from 'vamtiger-bash';

export default (params: Params) => {
    const workingDirectory = params.workingDirectory;
    const bashOptions = {
        cwd: workingDirectory
    };
    const initializeRepository = 'git init';
    
    console.log(initializeRepository);
    
    return bash(
        'git init', 
        bashOptions
    );
}

export interface Params {
    workingDirectory: string;
}