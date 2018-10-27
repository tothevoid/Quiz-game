const express = require('express');
const app = express();

var models = require("./models")

app.listen(8000, '0.0.0.0', () => {
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

app.route('/api/get_questions/:category').get((req,res) => {
    var category = req.params.category;
    console.log('New request: '+req.route);
    models.question.findAll({
        where:{
            category: category
        },
        attributes: ['text','correct_answer','incorrect1','incorrect2','incorrect3'],
        raw:true,
        order: models.Sequelize.literal('RAND()'),
        limit: 5 
    }).then(function (questions) {
        console.log(questions)
        res.send(questions)
    }); 
})