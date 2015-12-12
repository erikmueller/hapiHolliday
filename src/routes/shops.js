module.exports = [
    {
        method: 'GET',
        path: '/shops/{shopSlug}',
        handler: (req, reply) => reply(req.params.shopSlug)
    },
    {
        method: 'POST',
        path: '/shops/{shopSlug}/create',
        handler: (req, reply) => reply(`Created ${req.params.shopSlug}`)
    }
];
