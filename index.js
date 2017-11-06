var pubService = require('./services/pubs.services');

pubService.listAllPubs();

//pubs = pubService.allPubs();
//console.log(pubs[0]);

module.exports = {
    services: {
        pubService : pubService
    }
};