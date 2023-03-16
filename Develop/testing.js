const fs = require("fs");

fs.readFile("readme.txt", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const objects = data.split('\n');
      const userData = JSON.parse(objects);
    console.log(userData)
}});