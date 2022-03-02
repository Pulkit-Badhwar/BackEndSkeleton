//  copy entire json response from typeform api in the typeform.json file
//  execute createFieldsArray()
//  update  "dbAttributeName" in fields.json
//  execute createMappingIdAttribute() 
//  get the final mapping from finalFieldsMapping.json

const fs = require('fs');
const jsonTypeFormData = require('./typeForm.json');
const fieldsArray = require('./fields.json');

// it will create fields array

// const createFieldsArray = () => {
//     let JsonArray = [];

//     jsonTypeFormData.fields.forEach((data) => {
//         JsonArray = [...JsonArray, ...data.properties.fields]
//     })
//     const finalArray = JsonArray.map(data => {
//         return {
//             ...data,
//             dbAttributeName: null
//         }

//     })  
//     fs.writeFileSync(__dirname + "/fields.json", JSON.stringify(finalArray));
//     console.log("Totals Fields", finalArray.length, __dirname);
// }
// createFieldsArray()

// it will create mapping with id and attribute name
const createMappingIdAttrinute = () => {
    let finalObject = {};
    fieldsArray.forEach(data => {
        finalObject[data.id] = data.dbAttributeName
    })

    fs.writeFileSync(__dirname + "/finalFieldsMapping.json", JSON.stringify(finalObject));
}
  createMappingIdAttrinute()

