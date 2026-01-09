const express = require('express');

const app = express();

app.get('/', (_req, res) => {
    res.send("Hello from elastic beanstalk!");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});