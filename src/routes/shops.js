const ctrl = require('../controllers');

module.exports = [
    {
        method: 'GET',
        path: '/shops',
        handler: ctrl.shops.list
    },
    {
        method: 'GET',
        path: '/shops/{shopSlug}',
        handler: (req, reply) => reply(req.params.shopSlug)
    },
    {
        method: 'POST',
        path: '/shops/{shopSlug}/create',
        handler: (req, reply) => reply(`Created shop '${req.params.shopSlug}'`)
    }
];
