const fs = require("fs");

//created object/ updated
const newObject = {
  name: "big pool",
  address: " 52 reesher road, fr4 89e",
  number: "9",
};

fs.writeFileSync(
  "./test/data/donkey.json",
  JSON.stringify(newObject, null, 2),
  { flag: "a+" },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File successfully written!");
    }
  }
);
