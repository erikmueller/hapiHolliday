'use strict';

const path = require('path');
const fs = require('fs');

fs.readdirSync(__dirname).forEach(function (file) {
    if (file === 'index.js') return;

    let controllers = {};

    controllers[path.basename(file, '.js')] = require(path.join(__dirname, file));

    Object.assign(module.exports, controllers);
});
