'use strict';

const path = require('path');
const fs = require('fs');
let modules = {};

fs.readdirSync(__dirname).forEach(function (module) {
    if (module === 'index.js') return;

    modules[path.basename(module, '.js')] = require(path.join(__dirname, module));
});

Object.assign(module.exports, modules);
