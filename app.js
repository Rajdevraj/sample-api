const fetch = require('node-fetch');

function checkResponseStatus(res) {
    if(res.ok){
        return res
    } else {
        throw new Error(`The HTTP status of the reponse: ${res.status} (${res.statusText})`);
    }
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(checkResponseStatus)
    .then(res => res.json())
    .then(json =>{
          console.log(json[0]);
          console.log(json[0].name)
    })
    .catch(err => console.log(err))