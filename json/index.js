const fs = require("fs");
const obj = {
    name : "hasnain",
    age : 21,
    own : "5000 crores",
}
// converting object to jsonData
const jsonData = JSON.stringify(obj);
// console.log(jsonData);

// converting json data to object

// const objData = JSON.parse(jsonData);
// console.log(objData);
fs.writeFile("new.json", jsonData,(err)=>{
    // console.log("Done");
})

fs.readFile("new.json", "utf-8",(err, data)=>{
    // console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
})

