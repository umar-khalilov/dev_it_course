let curryMin = a

function a(...args){
if(a.length > 0){
    return args
}
throw new Error('invalid args')
}