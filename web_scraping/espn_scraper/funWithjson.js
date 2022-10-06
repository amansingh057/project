const fs = require('fs');
const xlsx = require('xlsx')
// let buffer = fs.readFileSync('./example.json')

// let data = JSON.parse(buffer)

let data = require('./example.json')

// data.push(
//     {
//         "Name": "Honey",
//         "Last name": "Singh",
//         "Age": 55,
//         "isAvernger": false,
//         "Friends": ["Badshah", "gippy", "none"],
//         "Address": {
//           "City": "bharat",
//           "State": "bharat"
//         }
//       }
// )
// console.log(data)
console.log(data)
let stringData = JSON.stringify(data)
fs.writeFileSync('./example.json',stringData)
console.log(stringData)


// let newWB = xlsx.utils.book_new();
// let newWS = xlsx.utils.json_to_sheet(data);
// xlsx.utils.book_append_sheet(newWB, newWS,sheetName);
// xlsx.writeFile(newWB,fileName);

let newWB = xlsx.utils.book_new();   //Add new WorkBook
let newWS = xlsx.utils.json_to_sheet(data); //Take JSON data to convert it in excel format
xlsx.utils.book_append_sheet(newWB, newWS,'Avengers');
xlsx.writeFile(newWB,'abc.xlsx');

// let wb = xlsx.readFile(filePath);
//     let excelData = wb.Sheets[sheetName];
//     let ans = xlsx.utils.sheet_to_json(excelData);
//     console.log(ans)


let wb = xlsx.readFile('abc.xlsx'); // Whic excel file to read
    let excelData = wb.Sheets['Avengers'];
    let ans = xlsx.utils.sheet_to_json(excelData);
    console.log(ans)
