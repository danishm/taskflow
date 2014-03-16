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
        }, {
            text: 'How to fix a hole in the Drywall',
            steps: [
                'Clean hole edges',
                'Cut plasterboard patch',
                'Clean & Dry Area',
                'Apply Patch',
                'Apply Putty',
                'Apply sanding paper'
            ]
        }, {
            text: 'Put the following Star Trek TV series in correct order',
            steps: [
                'Star Trek - Original Series',
                'Star Trek - The Next Generation',
                'Star Trek - Deep Space Nine',
                'Star Trek - Voyager',
                'Star Trek - Enterprise'
            ]
        }, {
            text: 'What is the sequence of notes on a Guitar?'
            steps: [
                'E',
                'A',
                'D',
                'G',
                'B',
                'E'
            ]
        }]
    }, {
        name: 'Round 2 - Girly Stuff',
        questions: [{
            text: 'How to wash hair during a shower?',
            steps: [
                'Apply Shampoo',
                'Massage your scalp',
                'Rinse Hair',
                'Apply Conditioner',
                'Rinse Hair'
            ]
        }, {
            text: 'How to apply makeup for a wedding?'
            steps: [
                'Apply Moisturizer',
                'Apply Foundation',
                'Apply Eye Liner',
                'Apply Blushon',
                'Apply Lipstick'
            ]
        }, {
            text: 'How to wear a Sari?'
            steps: [
                'Wear Petticoat',
                'Wear Blouse',
                'Tuck Sari with 1 turn',
                'Make pleats',
                'Drape over shoulder'
            ]
        }, {
            text: 'Put these Indian movies in the right order of release date'
            steps: [
                'Kabhi Kabhi',
                'American Desi',
                'Three Idiots',
                'Slumdog Millionaire',
                'Jab Tak Hai Jaan'
            ]
        }, {
            text: 'How to make a Rus-Gullah'
            steps: [
                'Make Dough',
                'Make Syrup',
                'Make Balls',
                'Fry Balls',
                'Soak it in syrup'
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