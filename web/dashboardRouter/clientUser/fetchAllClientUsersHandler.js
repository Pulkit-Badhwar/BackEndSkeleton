/* eslint-disable no-useless-catch */
const { fetchAllClientUsers } = rootRequire('service/clientUserService');

async function handler(req) {
  try {
    const pageNumber = req.query.pageNumber || 0;
    const clientData = await fetchAllClientUsers(pageNumber);
    for(var index in clientData){
      if(clientData[index].password){ 
        delete clientData[index].password; 
      } 
    }
    return clientData;
  } catch (err) {
    throw err;
  }
}

function fetchAllClientHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data,
    });
  }).catch((err) => next(err));
}

module.exports = fetchAllClientHandler;