const express = require('express');
const app = express();
const uuidv4 = require('uuid/v4');
const bodyParser = require("body-parser");

var models = require("./models")
app.use(bodyParser.json({limit: '25mb'}));

app.listen(8005, '0.0.0.0', () => {
    console.log('Server started!');
});

app.use(express.static('images'));

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
        attributes: ['text'],
        include: [ { model: models.answer} ],
        order: models.Sequelize.literal('RAND()'),
        limit: 5 
        }).then(function (sensors) {
        const data = sensors.map((node) => node.get({ plain: true }));
        res.send(data)
    }); 
})

app.post('/api/create_user/', bodyParser.json(), (req, res) => {
    if(!req.body) return response.sendStatus(400);
    
    var avatar = req.body.imagePath;
    var username = req.body.name;
    var guid = uuidv4();

    imgLink = ''
    if (avatar.startsWith('data:image')){
        imgLink = "images/"+guid+".jpg";
        var base64Data = avatar.replace("data:image/jpeg;base64,", "");
        require("fs").writeFile(imgLink, base64Data, 'base64', function(err) {
          console.log(err);
        });
    }   

    models.user.create({
        id: guid,
        name: username,
        img: imgLink
    }).then(function (){
        console.log("Sucessfull added: "+ guid)
        res.send({id:guid});
    })
})

app.route('/api/get_users').get((req,res) => {
    models.user.findAll({
        attributes: ['name','img','games_count','correct_answers'],
        raw:true
    }).then(function (questions) {
        console.log(questions)
        res.send(questions)
    }); 
})


