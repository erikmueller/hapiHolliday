'use strict';

const shopModel = require('../models/shop');

const list = (req, reply) => reply(shopModel.list());
const findOne = (req, reply) => reply(shopModel.findOne(req.params.shopSlug));

module.exports = {
    list,
    findOne
};
