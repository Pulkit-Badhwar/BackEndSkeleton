const { updateByEmail } = rootRequire('repo/mysql/clientUserRepo');

async function updateClientUser(client, clientEmail) {
  try {
    logger.info(`Admin Update :: email : ${clientEmail} :: obj : ${JSON.stringify(client)}`);
    const updateObject = {};
    const bodyFields = Object.keys(client);
    logger.info(`BodyField : ${JSON.stringify(bodyFields)}`);
    for (let i = 0; i < bodyFields.length; i += 1) {
      if (bodyFields[i] !== 'email') {
        updateObject[bodyFields[i]] = client[bodyFields[i]];
      }
    }
    logger.info(JSON.stringify(updateObject));
    const data = await updateByEmail(updateObject, clientEmail);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = updateClientUser;