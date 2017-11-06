var pubs = require('../mocks/pubs.json');
var moment = require('moment');

function allPubs() {
    return pubs;
}

function listAllPubs() {
    pubs.forEach(function(pub) {
        console.log(pub.name)
    });
}

function listDisponiblePubs() {
    console.log('Pubs disponible : ');

    var today = moment().format('dddd');
    pubs.forEach(function(pub) {
        if(pub.openDays.includes(today)) {
            console.log(pub.name);
        }
    });
}

module.exports = {
    listAllPubs : listAllPubs,
    listDisponiblePubs : listDisponiblePubs,
    allPubs : allPubs
};