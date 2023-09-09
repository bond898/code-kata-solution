const express = require('express');
const path = require('path');
const app = express();
const data =  require('./accountingsoftware');
const bodyParser = require("body-parser");



app.use(express.json());

// app.use(express.urlencoded());

app.set('view engine', 'ejs');


// var arrayData = data.loadFile();
// var temparr = data.loadFile(); 
// arrayData.array.forEach(element => {
//     console.log("element.year " + element.year)
// });
// temparr.map((item) => {
//     console.log( "array data  " + item);
// });
const [x,y] = data.loadFile();

console.log(...x.entries());
console.log(...y.entries());
console.table(x);


let text = "";
var obj = Object.fromEntries(x);
var jsonString1 = JSON.stringify(obj);

var obj2 = Object.fromEntries(y);
var jsonString2 = JSON.stringify(obj2);

    x.forEach (function(value, key) {

    text += "Year : " + key + " profitOrLoss : " + value + "  " ; 
    })

    let assettext = "";
    y.forEach ( function(value,key) {
      assettext += "Year : " + key + " assetValue : " + value + "  ";
    })

const user = {
    profitOrLoss: text,
    assetValue: assettext
}
    

// console.log("Array Data is here " + temp);
// const getAccountingSheet1 = data.getAccountingSheet();
// const convertExcelFileToJsonUsingXlsx1 = data.convertExcelFileToJsonUsingXlsx();
// console.log(convertExcelFileToJsonUsingXlsx1)
// console.log('before log');

// console.log(getAccountingSheet1);
// var i = 0;
// getAccountingSheet1.forEach((res) => {
//     console.log('Data for index ' + i );     
//     console.log(res);
//     i++;
// });




 const publicpath = path.resolve(__dirname,'views');
 app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, 'views')));
app.set('views', path.join(__dirname, 'views')); 
app.engine('html', require('ejs').renderFile); 
app.set('view engine', 'html'); 
port = 3000;


app.get('/',function(req,res) {
    res.sendFile(`${publicpath}/first.html`);
});

app.get('/second',function(req,res) {
    res.sendFile(`${publicpath}/second.html`);
});

app.get('/third',function(req,res) {
    // res.sendFile(`${publicpath}/third.html`);
    res.render('third',{
        user:user
    });
    
    // res.x.entries();
});

// app.post('/third',function(req,res) {
//     res.send("profit loss entries is posted");

// })







app.listen(port, () => {
    console.log("server is running");
});

