const http = require("http");
const fs = require("fs");
let requests = require("requests");


let homeFile = fs.readFileSync("./index.html", "utf-8");
const replaceVal = (tempVal, orgValue)=>{
    let temperature = tempVal.replace("{%tempVal%}", orgValue.main.temp);
    temperature = temperature.replace("{%tempMin%}", orgValue.main.temp_min);
    temperature = temperature.replace("{%tempMax%}", orgValue.main.temp_max);
    temperature = temperature.replace("{%city%}", orgValue.name);
    temperature = temperature.replace("{%country%}", orgValue.sys.country);
    return temperature;

}

const server = http.createServer((req, res) => {
    if ( req.url == "/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=Faisalabad&appid=871cc41e67329ff56f239a208f35793c")
        .on("data", (chunk)=>{
            const objData = JSON.parse(chunk);
            const arrData = [objData];
            // console.log(arrData[0].main.temp);
            const realTimeData = arrData.map((val)=> replaceVal(homeFile, val)).join("");
            res.write(realTimeData);
            console.log(realTimeData);
        })
        .on("end", (err)=>{
            if (err) return console.log("connection closed due to error", err);
            res.end();
        })
    }
})


server.listen(8000 , "127.0.0.1");