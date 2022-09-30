const express = require('express');
const bodyParser = require('body-parser')
require('./db/mongoose')

const taskRouter = require('./routers/task')
const listRouter = require('./routers/list')
const colorRouter = require('./routers/color')

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(bodyParser.json());


// app.use(taskRouter)
app.use(listRouter)
app.use(colorRouter)

// const bodyParser = require('body-parser');


// app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => console.log(`Listening on port ${port}`));