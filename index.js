var hbs = require('hbs');
var moment = require('moment');

hbs.moment = moment;

hbs.registerHelper('moment', function(context, block) {

});

module.exports = hbs;
