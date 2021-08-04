// import {authenticate} from '@xboxreplay/xboxlive-auth'
const {authenticate} = require('@xboxreplay/xboxlive-auth');
const XboxLiveAPI = require('@xboxreplay/xboxlive-api');

function sendResponse(res, data, statusCode = 200) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.statusCode = statusCode;
    res.end(JSON.stringify(data));
}

const actions = {
    'GET': (req, res) => {
        auth().then(data => {
            sendResponse(res, data, 200);
        })
    }
}


function auth() {
    return new Promise((resolve, rej) => {
        // resolve('success');
        authenticate('email', 'pwd')
        .then(resolve)
        // .then(
        //     XboxLiveAPI.getPlayerSettings('its miraclebob', {
        //         userHash: userHash,
        //         XSTSToken: XSTS
        //     }, ['UniqueModernGamertag', 'GameDisplayPicRaw', 'Gamerscore', 'Location'])
        //         .then(console.info)
        //         .catch(console.error)
        // )
        .catch(console.error);
    })
}

module.exports = (req, res) => {
    let action = actions[req.method];
    if (action) action(req, res);
}

    
