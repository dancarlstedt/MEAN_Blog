var moment = require('moment');

exports.render = function (req, res) {

    res.render('index', {
        now: moment().format('MMM DD YY, hh:mm:ss a')
    });
};