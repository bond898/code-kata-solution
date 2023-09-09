// const reader = require('xlsx');
// const file = reader.readFile('./text.xlsx');
// const data = [];
// const xlsx = require("xlsx");
// const fs = require("fs-extra");
// const multer = require("multer");
// const excelToJson = require("convert-excel-to-json");

// var fs = require('fs');

// function loadFile(){
//     var data;

//     try {
//         data = JSON.parse(fs.readFileSync('./text.json', 'utf8'));
//         console.log('inside loadFile ' +data);
//     } catch ( err ) {
//         // handle your file not found (or other error) here
//         console.log(err);
//     }
//     return data;
// }
// var jsonData = '{ "active": true, "id": 1, "name": "john" }';
// console.log(prettier.format(JSON.stringify(jsonData), { semi: false, parser: "json" }));

const { text } = require('express');
const fs = require('fs');

const jsonArrayNew = [];
const profitloss = [];
const assetValue = [];
const  newmap = new Map();
const assetMap = new Map();




module.exports = { 
  loadFile :function() {
    fs.readFileSync('text.json'); 
        let tempVar = JSON.parse(fs.readFileSync('text.json', 'utf8'));
        tempVar.data.forEach(element => {
          // console.log('Each element ' + element.year);
          
          jsonArrayNew.push(element.year);
          profitloss.push(element.profitOrLoss);
          assetValue.push(element.assetsValue);
          // console.log('asset value is ' + element.assetsValue);
          if( newmap.get(element.year) === undefined)
          {
            // console.log('inside if putting first time ' + element.year + ' value ' + element.profitOrLoss);
            newmap.set(element.year, element.profitOrLoss);
            assetMap.set(element.year, element.assetsValue);
            // console.log('asset map set' + assetMap.get(element.year));
            // console.log('map after set ' + newmap.get(element.year));
          } else {
            
            // console.log('inside else ' + newmap.values() + ' element year ' + element.year);
              let temp = newmap.get(element.year);
              let newValue = temp + element.profitOrLoss;
              let newtemp = assetMap.get(element.year);
              let tempValue = newtemp + element.assetsValue;
              newmap.set(element.year, newValue);
              assetMap.set(element.year, tempValue);
              // console.log('map after set ' + newmap.get(element.year));
              // console.log('asset map after set in else block ' + assetMap.get(element.year));
          } 

         
          // console.log(newmap.get(2020));
         let text = "";
         newmap.forEach (function(value, key) {
         text += key + ' = ' + value; 
         })         
         console.log( "profit loss result " +text);


         let assettext = "";
        assetMap.forEach ( function(value,key) {
          assettext += key + ' = ' + value;
        })
        console.log("asset map " + assettext);
        });

        
        
        return [newmap,assetMap];
        
  }

  // asset : function() {
  //   fs.readFileSync('text.json');
  //   let newvar = JSON.parse(fs.readFileSync('text.json', 'utf-8'));
  //   newvar.data.forEach(element => {
  //     console.log('each element in asset' + element.year );
      
  //   })
  // }
};

// function loadFile() {

//     fs.readFile('text.json', 'utf8', function (err, data) {
//         if (err) {
//           console.log(err);
//         } else {
//           //console.log(JSON.parse(data));
//           let tempVar = JSON.parse(data);
//           tempVar.data.forEach(element => {
//             console.log('Each element ' + element.year);
//             jsonArrayNew.push(element.year);
//             console.log('array after push ' + jsonArrayNew);
            
//           });
//           console.log('array after push after loop' + jsonArrayNew);
//         }
//         console.log('array after push after return in method' + jsonArrayNew);
//         return jsonArrayNew;
//       });
//       console.log('return Array before return '+ jsonArrayNew);
//       return jsonArrayNew;
// }

// module.exports = {loadFile};


// var i = 0;

// const workbook = xlsx.readFile("./text.xlsx");
// const sheetnames = workbook.SheetNames[i];
// // const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetnames]);

// const data = [];
// for(let i = 0; i < sheetnames.length; i++)
//     {
        
//         const data = xlsx.utils.sheet_to_json(
//             workbook.Sheets[sheetnames[i]])
//             workbook.forEach(res => {
//                 return data.push(res)
//             });
//     };

    


// function getAccountingSheet() {
//     const sheets = file.SheetNames;
//     for(let i = 0; i < sheets.length; i++)
//     {
//        const temp = reader.utils.sheet_to_json(
//             file.Sheets[file.SheetNames[i]])
//             console.log('Temp is ' + temp);
//        temp.forEach((res) => {
         
//          data.push(res)
//        });
//        //console.log('Before returning data ' + data);
//        return data;
//     }
    
// } 

// function getAccountingSheet() {
//     const sheets = file.SheetNames;
//     for(let i = 0; i < sheets.length; i++)
//     {
//        const temp = reader.utils.sheet_to_json(
//             file.Sheets[file.SheetNames[i]])
//             console.log('Temp is ' + temp);
//        temp.forEach((res) => {
         
//          data.push(res)
//        });
//        //console.log('Before returning data ' + data);
//        return data;
//     }
    
// } 



