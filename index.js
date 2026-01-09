const express = require('express');
const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || 'Hello, World!';

const app = express();

throw new Error('Intentional Error for Testing');

app.get('/', (_req, res) => {
    res.send(MESSAGE);
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});