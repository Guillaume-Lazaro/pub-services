var pubs = require('../mocks/pubs.json')

/*function allPubs() {
    var allPubs = new Array();

    pubs.forEach(function(pub) {
        allPubs += pub;
    });
    return allPubs;
}*/

function listAllPubs() {
    pubs.forEach(function(pub) {
        console.log(pub.name)
    });
}

function listDisponiblePubs() {

}

module.exports = {
    listAllPubs : listAllPubs,
    allPubs : allPubs
};