var express = require('express')
var store = require('./store')

// Setting up the app
var app = express()
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.send(store.get_game('default'));
})

app.get('/:id', function(req, res) {
    var game = store.get_game(req.param('id'));
    if (game != null) {
        res.render('game', {
            game: game
        });
    } else {
        res.send('couldn\'t find ' + req.param('id'));
    }
})

app.get('/:id/round/:round', function(req, res) {
    var game = store.get_game(req.param('id'));
    var round = game.rounds[req.param('round') - 1]
    res.send(round.name);
})

app.get('/:id/round/:round/question/:question', function(req, res) {
    var game = store.get_game(req.param('id'));
    var round = game.rounds[req.param('round') - 1]
    var question = round.questions[req.param('question') - 1]
    res.render('question', {
        question: question
    })
})

app.listen(3000)