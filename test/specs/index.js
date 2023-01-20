const fs = require('fs');

const newObject = {
    "name": "Mega corp", 
    "address": " 52 reesher road, fr4 89e",
    "time": "9am"
}
//const jsonString = JSON.stringify(newObject);

fs.writeFile('./test/data/companies.json', JSON.stringify(newObject), err => {
    if (err) {
        console.log(err);
        } else {
            console.log('File successfully written!');
        }
});


//const company = require('companies.json')

