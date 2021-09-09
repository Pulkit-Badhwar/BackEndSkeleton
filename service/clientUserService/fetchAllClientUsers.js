/* eslint-disable no-useless-catch */
const { find } = rootRequire('repo/mysql/clientUserRepo');

async function fetchAllClientUsers(pageNumber) {
  try {
    const pageSize = 10;
    const offset = pageNumber * pageSize;
    const data = await find(offset, pageSize);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchAllClientUsers;