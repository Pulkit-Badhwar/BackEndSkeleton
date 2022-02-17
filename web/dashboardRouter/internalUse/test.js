let newJSON = require('../internalUse/fields.json')
// const oldJSON = {
//   ZJqRU9iMbjCS: 'firstName' ' ,
//   iXgFSDuGLPKw: 'lastName' ' ,
//   l9r5gWCtQ7PJ: 'CompanyID' ' ,
//   ToFID8nh0zF7: 'email' ' ,
//   heU6bCEc0UxV: 'ProvideMobileNo' ' ,
//   ml1rJ3dBeoPU: 'MobileNo' ' ,
//   MPkvI7Kh8nwd: 'RoleInCompany' ' ,
//   XklrVOfYxTnt: 'PersonalLinkdin' ' ,
//   d5Lw5ZScwT9K: 'PersonalLinkdinURl' ' ,
//   LvUvuAbypvO2: 'PersonalCity' ' ,
//   Jbe6FGvmjHUx: 'PersonalCountry' ' ,
//   '1QCvzy4uRtqp': 'Company_Name' ' ,
//   DCqRxTbrmcvS: 'Year_Founded' ' ,
//   gmPzuDe78lU3: 'Website' ' ,
//   '9W8kkevC5JaZ': 'WebsiteURL' ' ,
//   Z0uSIOHOrsaz: 'Linkedin' ' ,
//   wuRQddGFKNf7: 'LinkedinURL' ' ,
//   ViO6AT0iyKwh: 'Description' ' ,
//   e8RX8rkdDUEo: 'PrimarySector' ' ,
//   '0vHjPmf9KiAj': 'SecondarySectorBool' ' ,
//   nXzNemBgY1xq: 'SecondarySector' ' ,
//   RpMOSeppt9Z7: 'SecondarySectorBool2' ' ,
//   EW08fsYozTFC: 'SecondarySector2' ' ,
//   '8kRSWNaC3jpf': 'Country' ' ,
//   EvXKKGOSwux1: 'Registration_no' ' ,
//   '3FBNKMXHEpDq': 'RegisteredOtherCountryBool' ' ,
//   jNzNVq196KDY: 'RegisteredOtherCountry2' ' ,
//   qfOtVuSFKrVg: 'Registration_no2' ' ,
//   HENygDSjVEPp: 'RegisteredOtherCountryBool2' ' ,
//   Db78p4ZpK1Sf: 'RegisteredOtherCountry3' ' ,
//   QutYi4Jv19Rz: 'Legal_Entity' ' ,
//   vkbfXfUf4ixL: 'ParentOrSubsidaryCompany' ' ,
//   WLJRTYGLJ9fO: 'Continent_ops' ' ,
//   az1jmtv5a6I6: 'OperationalInOtherCountriesBool' ' ,
//   smJEnmrNS13a: 'OperationalInOtherCountries' ' ,
//   oDNeKGBlmlTy: 'OperationalInOtherCountriesBool2' ' ,
//   '35CNHnG8dy2k': 'OperationalInOtherCountries2' ' ,
//   aYBLZQ9VyrYt: 'Expansion12Months' ' ,
//   jMJiSii44w5F: 'Expansion12MonthsCountry' ' ,
//   DRocC2OtZgBI: 'ExpansionOtherCountryBool' ' ,
//   STvw1SpNlgS4: 'ExpansionOtherCountry' ' ,
//   CSJSaXf9PImO: 'ExpansionOtherCountryBool2' ' ,
//   '3g97sqreK1DP': 'ExpansionOtherCountry2' ' ,
//   PngOtVUlWZPK: 'Other'
// }


const oldJSON = {
  XuEuRrLKTqxa: 'CompanyID',
  h3MZWNCqPzTg: 'SDGGoals',
  L8oVgqmegDtF: 'SDG_Imp',
  xjJMXXWHr2p0: 'ImpactVision',
  '38JUvMNPozmi': 'ImpactVision_Desc',
  HVtT2vpPcl1m: 'Strategy',
  CryTWguRD9Wd: 'Help_Build_one',
  OS3ZLAIg2IGr: 'CEO_Women',
  xub3EblfV63M: 'NoOfWomen',
  U1OVpll7KvUg: 'CEO_Africa',
  '6tcdKmbSPRxX': 'NoOfAfrica',
  Fnee8RNIVDCN: 'License_Regulation',
  c9lgRcVqLPnk: 'License_Desc',
  u2EdGnDU5xT9: 'Country',
  o9hwc9W7CqAm: 'SecondLicense',
  s5IG6Lt8yOBb: 'SecondLicense_Desc',
  eTUdLtNZxRwE: 'SecondLicense_Country',
  '4xRkrwtR7jEc   ': 'Anyother_license',
  grTYdgveX1mt: 'ThirdLicense_Desc',
  o25EP2oxzA6X: 'ThirdLicense_Country',
  eAwm17gMCSRr: 'Desc_regulation',
  nencx5FcVpXG: 'FromWhichGovtDepoartment_regulation',
  ehku9gvd0Wl8: 'Second_regulation',
  'BlJblmeIO4ZF   ': 'Second_regul_desc',
  zNBHsxIm75dJ: 'FromWhichGovtDepoartment_Secondregulation',
  wiDr7y1d5JiA: 'Third_regulation',
  '0f0uFTpkXsJj   ': 'Third_regul_desc',
  TGddw5wA2fZn: 'FromWhichGovtDepoartment_Thirdregulation',
  JMbQrtrNsL1W: 'Buisness_model',
  Isu33wtt624c: 'OtherBuisnessModel',
  pvR3o3Sn2LHb: 'Revenue_model',
  '9F8LsZQPCFpG   ': 'Buisness_vision',
  '7Vowz0tvW2SX   ': 'Buisness_milestones',
  LiHXfYCTd9oC: 'Strength_Type',
  XGr0aNk2y0Xc: 'Weakness_Type',
  MUNkWUslZLvJ: 'ShareHolderAgreement',
  GTe4DbIb0JtR: 'ShareHolderName',
  xEjBfQzx3ZXt: 'ShareHolderPercentage',
  g1fwWVsU3vw5: 'SecondShareHolder',
  lUbZz7QHwcCF: 'SecondShareHolderName',
  pLYDxG6mcVCz: 'SecondShareHolderPercentage',
  QG5rdP7XcliB: 'ThirdShareHolder',
  LvkeM5snydcO: 'ThirdShareHolderName',
  pwiSKph6IvsS: 'ThirdShareHolderPercentage',
  Ro77LjGyRu7p: 'FourthdShareHolder',
  Ltc8tLwtirKq: 'FourthShareHolderName',
  '8lh4xWC4sqf7   ': 'FourthShareHolderPercentage',
  fSc2MM6RiXrz: 'FifthdShareHolder',
  '13YR964A6Zv6   ': 'FifthShareHolderName',
  lCMko5mW3x9m: 'FifthShareHolderPercentage',
  pOD6yYqe5QNP: 'SixthdShareHolder',
  g5sj4qamoacd: 'SixthShareHolderName',
  '8O9GkXx1uQo0   ': 'SixthShareHolderPercentage',
  hx4KZcYqeHhq: 'FirstExEmployeeSharesBool',
  yhKVTwzbIB9g: 'FirstExployeeName',
  jjDlz2CorCvR: 'FirstExEmployeePosition',
  aLV0JGCUvwJ2: 'FirstExEmployeeShares',
  qjQw3xqjMqrR: 'ElaborateVestedShares',
  FsSXUUDsohoH: 'SecondExEmployeeSharesBool',
  '8Fgm9y2z8ROv   ': 'SecondExEMployeeName',
  rObP8blTc0x0: 'SecondExEmployeePosition',
  '85BAc0WTX483   ': 'SecondExEmployeeShares',
  fZ9nKtFfveJf: 'ElaborateVestedShares2',
  '346CbrY5mybG   ': 'ThirddExEmployeeSharesBool',
  'Ornh9XcR6MR9   ': 'ThirdExEmployeeName',
  wzHMOBi75Ry7: 'ThirdExEmployeePosition',
  z37PuIfgivaN: 'ThirdExEmployeeShares',
  e4IBwMQCVLzr: 'ElaborateVestedShares3'
}
// console.log(newJSON)


const tempArr = newJSON.map(data => {
  if (!data.dbAttributeName) {
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

// console.log('obj',obj)
