const core = require('@actions/core');
const axios = require('axios');
const github = require('@actions/github');

try {
    var status;
    axios
        .get('http://127.0.0.1:3000/test')
        .then(res => {
            console.log(`statusCode: ${res.status}`);
            console.log(res);
            core.setOutput("statusmessage", res.status);
        })
        .catch(error => {
            console.error(error);
            core.setOutput("statusmessage", 404);
        });


    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
} catch (error) {
    core.setFailed(error.message);
}