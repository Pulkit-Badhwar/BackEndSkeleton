const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '/.env') });
require('./globals');
require('./config/env').init();

const { appServer, init } = require('./web/server');

init();
require('./config/shutdown')(appServer);