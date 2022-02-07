const fs = require('fs');
const jsonTypeFormData = require('./typeForm.json');
const fieldsArray = require('./fields.json');

// it will create fields array

const createFieldsArray = ()=>{
    let JsonArray = [];
    
    jsonTypeFormData.fields.forEach((data)=>{
        JsonArray = [...JsonArray,...data.properties.fields]
    })
    fs.writeFileSync(__dirname+"/fields.json", JSON.stringify(JsonArray));
    console.log("Totals Fields", JsonArray.length,__dirname);
}
 // createFieldsArray()

// it will create mapping with id and attribute name
const createMappingIdAttrinute = ()=>{
    let finalObject = {};
    fieldsArray.forEach(data=> {
        finalObject[data.id] = data.dbAttributeName
    })
    
    fs.writeFileSync(__dirname+ "/finalFieldsMapping.json", JSON.stringify(finalObject));
}
  // createMappingIdAttrinute()

