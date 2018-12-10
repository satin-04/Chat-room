const request = require("request");

var reverse = (latitude, longitude, callback) => {
    request ({
        url : 'https://us1.locationiq.com/v1/reverse.php?key=9c242c441b518c&lat='+latitude+'&lon='+longitude+'&format=json&zoom=18',
        json : true
    }, (error, response, body) => {
        if(error){
            callback('Unable to connect to server try again later !');
        }
        else{
            callback(undefined, {
                address : body.display_name
            });
        }
    });
};

module.exports.reverse = reverse;
