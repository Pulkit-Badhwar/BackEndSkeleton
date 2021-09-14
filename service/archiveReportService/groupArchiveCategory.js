const { find } = rootRequire('repo/mysql/archiveReportRepo');

async function groupCategory() {
  try {
    let wheat = [];
    let maize = [];
    let pulses = [];
    const offset = 0;
    const pageSize = 10;
    const data = await find(offset, pageSize);
    for(let i = 0; i <= data.length; i++) {
      if(data[i].category == 'wheat'){
        wheat.push(data[i]);
      }
      else if(data[i].category == 'maize'){
        maize.push(data[i]);
        console.log(maize)
      }
      else if(data[i].category == 'pulses'){
        pulses.push(data[i]);
      }     
    }


    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = groupCategory;