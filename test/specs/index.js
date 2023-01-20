const fs = require('fs');



// helper function (time 5.50)
function jsonReader(filePath, cb) {
    fs.readFile(filePath, 'utf-8', (err, fileData) => {
        if (err) {
            return cb && cb(err);
        } try {
            const object = JSON.parse(fileData);
            return cb & cb(null, object);
        } catch (err) {
            return cb & cb(err);
        }
    })
}


//created oject/ updatd object 
// const anotherObject = {
//     name: 'Jack Hint',
//     job_count: '3',
//     postcode: 'kr6 7ic'
// }


//const jsonString = JSON.stringify(anotherObject);
//console.log(jsonString);

// used helper function to add 1 to count, also added job_count
jsonReader('./test/data/companies.json', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        data.job_count += 1;
        data.name = "keeper",
        //data.job_count =  6,
        fs.writeFile('./test/data/companies.json', JSON.stringify(data), err => {
            if (err) {
                console.log(err);
            }
         })
     }
})


// executes jsonReader helper function
// jsonReader('./test/data/companies.json', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data.name);
//     }
// })


// async reads file method
// fs.readFile('./test/data/companies.json', 'utf-8', (err, jsonString) => {
//   if (err)
//  {
//     console.log(err);
//  } else {
//     try {
//         const data = JSON.parse(jsonString);
//         console.log(data.address);
//     } catch (err) {
//         console.log('Error parsing JSON', err)
//     }
//  }
// });



 // 7.22
// fs.writeFile('./test/data/companies.json', JSON.stringify(newObject, null, 2), err => {
//     if (err) {
//         console.log(err);
//         } else {
//             console.log('File successfully written!');
//         }
// });


//created oject/ updatd object 
// const newObject = {
//     "name": "pool", 
//     "address": " 52 reesher road, fr4 89e",
//     "number": "9"
// }