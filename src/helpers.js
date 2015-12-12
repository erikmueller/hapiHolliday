'use strict';

const loadModules = (dir) => {
    const path = require('path');
    const fs = require('fs');
    let modules = {};

    fs.readdirSync(dir).forEach(function (module) {
        if (module === 'index.js') return;

        modules[path.basename(module, '.js')] = require(path.join(dir, module));
    });

    return modules;
};

module.exports = {
    loadModules
};
