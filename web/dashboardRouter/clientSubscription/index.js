const fetchClientSubscriptionHandler = require('./fetchClientSubscriptionHandler');

module.exports = (router) =>{
    router.get('/clientSubs/fetch', fetchClientSubscriptionHandler);
}