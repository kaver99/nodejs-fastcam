const models = require('../../models');

async function getProducts() {
    try {
        const product1 = await models.Products.findByPk(1);
        const product3 = await models.Products.findByPk(3);
        console.log(product1.dataValues.id);
        console.log(product3.dataValues.price);

    } catch(err) {
        console.error(err);
    }
}

getProducts();


const fs = require('fs');
const path = require('path');
const filePath = path.join('/Users/minsungkim/Documents/project/React-project/nodejs-test-fastcamp', '.env');


async function envPrint(arg1) {
    const ret = await new Promise((resolve, reject) => {
        fs.readFile(arg1, 'utf8', (err, data) => {
            if(err) reject(err);
            resolve(data);
        });
    });
    console.log(ret);
};

envPrint(filePath);