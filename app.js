const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.listen(port, () => console.log(`Servidor funcionando ${port}!`));

app.use(express.static('public'));


app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/src/views/index.html')
});
  
