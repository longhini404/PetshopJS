const app = require('./src/config/app');

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Petshop is on http://localhost:${port}`)
})

