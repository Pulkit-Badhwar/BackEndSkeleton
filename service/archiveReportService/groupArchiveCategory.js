const { find } = rootRequire('repo/mysql/archiveReportRepo');

async function groupCategory(data) {
  try {
    let category = [];
    // const offset = 0;
    // const pageSize = 10;
    // const data = await find(offset, pageSize);
    for(let i = 0; i < data.length; i++) {
      if(data[i].category == 'wheat'){
        category.push('wheat');
      }
      else if(data[i].category == 'maize'){
        category.push('maize');
      }
      else if(data[i].category == 'pulses'){
        category.push('pulses');
      }     
    }
    return category;
  } catch (err) {
    throw err;
  }
}

module.exports = groupCategory;