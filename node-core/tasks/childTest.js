function expireMessageFromChild() {
    process.on('message', data => {
        console.log(`Child got message: ${data}`);
        process.send(data.match(/\W/g).join(', '));
    })
}

expireMessageFromChild();


