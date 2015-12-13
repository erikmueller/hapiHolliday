'use strict';

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

const list = () => SHOPS;
const findOne = (shopname) => {
    let result = [];

    SHOPS.forEach((shop) => {
        if (shop.name === shopname) {
            result.push(shop);
        }
    });

    return result[0];
};

module.exports = {
    list,
    findOne
};
