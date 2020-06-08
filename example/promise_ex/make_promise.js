const aa = new Promise((resolve, reject) => {
    resolve( console.log(`Promise Start!`) );
});


aa.then(() => {
    console.log(`Promise End!`);
});