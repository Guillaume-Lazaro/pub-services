var pubService = require('./services/pubs.services');
var moment = require('moment');

//pubService.listAllPubs();
//pubService.listDisponiblePubs();

module.exports = {
    services: {
        pubService : pubService
    }
};