var GAME = {
    id: 'default',
    name: 'Rabia & Taimur\'s Game',
    rounds: [{
        name: 'Round 1 - Guy Stuff',
        questions: [{
            text: 'How to drive Taimur’s stick shift Audi?',
            steps: [
                'Make sure car is in Neutral',
                'Step on clutch',
                'Start Car',
                'Shift into gear 1',
                'Step on accelerator'
            ]
        }]
    }, {
        name: 'Round 2 - Girl Stuff',
        questions: [{
            text: 'How to wash hair during a shower?',
            steps: [
                'Apply Shampoo',
                'Massage your scalp',
                'Rinse Hair',
                'Apply Conditioner',
                'Rinse Hair'
            ]
        }]
    }]
}

module.exports = {
    get_game: function(id) {
        if (id == 'default') {
            return GAME;
        } else {
            return null;
        }
    }
}