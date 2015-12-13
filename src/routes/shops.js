const shopController = require('../controllers/shops');

module.exports = [
    {
        method: 'GET',
        path: '/shops',
        handler: shopController.list
    },
    {
        method: 'GET',
        path: '/shops/{shopSlug}',
        handler: shopController.findOne
    }
];
