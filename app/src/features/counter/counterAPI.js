const fetch = require('node-fetch');

// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export function callXbox() {
    const url = 'http://localhost:3001/test';
    return new Promise((resolve, rej) => {
        fetch(url)
        .then(result => {
            return result.json()
        })
        .then(json => {
            console.log(json)
            resolve(json)
        })
        .catch(err => {
            console.log(err);
            rej(err)
        });
    })
}
