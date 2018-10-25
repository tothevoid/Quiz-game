const express = require('express');
const app = express();

var models = require("./models")

app.listen(8000, () => {
    console.log('Server started!');
  });

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.route('/api/get_categories').get((req, res) => {
    console.log('New request: '+req.route);
    models.category.findAll({attributes: ['id','name','img'], raw:true}).then(function (categories) {
        console.log(categories)
        res.send(categories)
    });   
});

app.route('/api/get_questions').get((req,res) => {
    console.log('New request: '+req.route);
    models.question.findAll({attributes: ['text','correct_answer','incorrect1','incorrect2','incorrect3'], raw:true}).then(function (questions) {
        console.log(questions)
        res.send(questions)
    }); 
})