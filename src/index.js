const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();
const mongoose=require('mongoose')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

mongoose.connect("mongodb+srv://yesone2:yestol78@yes23.c8ohgml.mongodb.net/test", {useNewUrlParser:true})
.then(()=> console.log('Mongoose data is good'))
.catch(err=> console.log(err))

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
