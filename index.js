var express = require('express');
var app = express();

var models = require('./models');
app.get('/sync', (req, res) =>{
    models.sequelize.sync().then(() =>{
        res.send('Database sync completed!');
    });
});

//CREATE
//insert into Products value(...)
app.get('/create', (req, res) =>{
    models.Products
        .create({
            name: 'Product 1',
            description: 'Lorem ol el....',
            price: Math.random()*100
        })
        .then(function(product){
            res.json(product);
        })
        .catch(function(error){
            res.json(error);
        })
});

//insert mang doi tuong vao CSDL
app.get('/createMany', (req, res) => {
    models.Products
        .bulkCreate([{
        name: 'Product 3',
            description: 'Lorem ol el....',
            price: Math.random()*100
        },{
            name: 'Product 4',
            description: 'Lorem ol el....',
            price: Math.random()*100
        }])
        .then((products) => {
            res.json(products);
        })
        .catch((error) =>{
            res.json(error);
        })
});

//select * from Produts
//where name like '%product%
const Sequelize = require('sequelize');
const Op = Sequelize.Op
app.get('/readAll', (req, res) => {
    models.Products
        .findAll({
            where: {
                $or: [
                    {name : { [Op.like]: 'Product%'}},
                    {description: {[Op.ilike]: '%lorem%'}}
                ],
                price: {[Op.between]: [20,50]}              
            }
        })
        .then((products) => {
            res.json(products);
        })
        .catch((error) =>{
            res.json(error);
        })
});

//URL: /readLimit?page=1
app.get('/readLimit', (req, res) =>{
    var page = req.query.page || 1;
    models.Products
        .findAll({
            limit: 5,
            offset: (page - 1)*5
        })
        .then((products) => {
            res.json(products);
        })
        .catch((error) =>{
            res.json(error);
        })
});

app.set('port', process.env.PORT | 5000);
app.listen(app.get('port'), () =>{
    console.log('Server is listening on port ' + app.get('port'));
});
