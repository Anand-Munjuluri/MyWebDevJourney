//hello word with express
const express = require('express');
const app = express();
const port = process.env.PORT||3000;
const bodyParser = require('body-parser');
           
app.use(bodyParser.json());
app.post('/', function(req, res){
    console.log(req.query.message);
    res.send('<h1>Hello World!</h1>');
}
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);
