let newJSON = require('../internalUse/fields.json')
const oldJSON = {
  ZJqRU9iMbjCS: 'firstName',
  iXgFSDuGLPKw: 'lastName',
  l9r5gWCtQ7PJ: 'CompanyID',
  ToFID8nh0zF7: 'email',
  heU6bCEc0UxV: 'ProvideMobileNo',
  ml1rJ3dBeoPU: 'MobileNo',
  MPkvI7Kh8nwd: 'RoleInCompany',
  XklrVOfYxTnt: 'PersonalLinkdin',
  d5Lw5ZScwT9K: 'PersonalLinkdinURl',
  LvUvuAbypvO2: 'PersonalCity',
  Jbe6FGvmjHUx: 'PersonalCountry',
  '1QCvzy4uRtqp': 'Company_Name',
  DCqRxTbrmcvS: 'Year_Founded',
  gmPzuDe78lU3: 'Website',
  '9W8kkevC5JaZ': 'WebsiteURL',
  Z0uSIOHOrsaz: 'Linkedin',
  wuRQddGFKNf7: 'LinkedinURL',
  ViO6AT0iyKwh: 'Description',
  e8RX8rkdDUEo: 'PrimarySector',
  '0vHjPmf9KiAj': 'SecondarySectorBool',
  nXzNemBgY1xq: 'SecondarySector',
  RpMOSeppt9Z7: 'SecondarySectorBool2',
  EW08fsYozTFC: 'SecondarySector2',
  '8kRSWNaC3jpf': 'Country',
  EvXKKGOSwux1: 'Registration_no',
  '3FBNKMXHEpDq': 'RegisteredOtherCountryBool',
  jNzNVq196KDY: 'RegisteredOtherCountry2',
  qfOtVuSFKrVg: 'Registration_no2',
  HENygDSjVEPp: 'RegisteredOtherCountryBool2',
  Db78p4ZpK1Sf: 'RegisteredOtherCountry3',
  QutYi4Jv19Rz: 'Legal_Entity',
  vkbfXfUf4ixL: 'ParentOrSubsidaryCompany',
  WLJRTYGLJ9fO: 'Continent_ops',
  az1jmtv5a6I6: 'OperationalInOtherCountriesBool',
  smJEnmrNS13a: 'OperationalInOtherCountries',
  oDNeKGBlmlTy: 'OperationalInOtherCountriesBool2',
  '35CNHnG8dy2k': 'OperationalInOtherCountries2',
  aYBLZQ9VyrYt: 'Expansion12Months',
  jMJiSii44w5F: 'Expansion12MonthsCountry',
  DRocC2OtZgBI: 'ExpansionOtherCountryBool',
  STvw1SpNlgS4: 'ExpansionOtherCountry',
  CSJSaXf9PImO: 'ExpansionOtherCountryBool2',
  '3g97sqreK1DP': 'ExpansionOtherCountry2',
  PngOtVUlWZPK: 'Other'
}

console.log(newJSON)


const tempArr = newJSON.map( data => {
  if(!data.dbAttributeName){
    console.log(data.id)
    data.dbAttributeName = oldJSON[data.id]
  }
  return data;
})

console.log('111111111111', JSON.stringify(tempArr))



// const obj= {};
// const oldJSON1 = JSON.parse(JSON.stringify(oldJSON))
// for( let key of Object.keys(oldJSON1)){
//   console.log(oldJSON1.key)
//   obj[oldJSON1[key]] = key;
// }

// console.log(obj)
