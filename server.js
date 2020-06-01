const app = require('./app.js');
const port = 5000;


app.listen(port, () => {
    console.log(`Express Server is running http://127.0.0.1:${port}`);
});