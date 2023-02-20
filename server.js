const express = require('express');

const app = express();



app.get('/', (req, res) => {
   res.send('Welcomwe to home page!');
});

app.listen(3003, () => console.log('Example app is listening on port 3003.'));