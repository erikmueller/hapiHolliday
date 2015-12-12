const SHOPS = [
    {
        name: 'a',
        content: 'pony'
    },
    {
        name: 'b',
        content: 'unicat'
    },
    {
        name: 'c',
        content: 'owlicorn'
    }
];

const list = (req, reply) => reply(SHOPS);

module.exports = {
    list
};
