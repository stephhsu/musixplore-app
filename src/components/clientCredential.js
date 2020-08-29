// musixplore requesting authorization via client credential flow
// more info here: https://developer.spotify.com/documentation/general/guides/authorization-guide/

function client_credential_flow(target_url, callback) {
    var request = require('request');

    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    var CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + (new Buffer(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'))
        },
        form: {
            grant_type: 'client_credentials'
        },
        json: true
    };

    request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            var token = body.access_token;
            var options = {
                url: target_url,
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                json: true
            };
            
            // understanding callbacks: https://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call?page=1&tab=votes#tab-top
            // solved using with the help of: https://stackoverflow.com/questions/20081157/return-results-from-request-js-request-method
            request.get(options, function(error, response, body) {
                callback(null, body);
            });
        }
    });
}

export default client_credential_flow