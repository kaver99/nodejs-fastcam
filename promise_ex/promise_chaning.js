const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ p1_text: "p1의 TEXT" });
    }, 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ p2_text: "p2의 TEXT" });
    }, 3000);
});


// Promise method Chaning
// p1.then((result1) => {
//     console.log("p1 = " + result1.p1_text);
//     return p2;
// }).then((result2) => {
//     console.log("p2 = " + result2.p2_text);
// });

// Promise All
Promise.all([p1, p2]).then(() => {
    console.log("p1 = " + result[0].p1_text);
    console.log("p2 = " + result[1].p2_text);
}).catch(err => {
    console.error(err);
});