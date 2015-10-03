/**
 * srvoa - soa infrastructure for node js
 *
 * @copyright   Copyright (c) 2015, Alrik Zachert
 * @license     https://gitlab.com/a-z/node-srvoa/blob/master/LICENSE BSD-2-Clause
 */

"use strict";

module.export = {
    Application: require('./build/Application'),
    ConfigService: require('./build/ConfigService'),
    Service: require('./build/Service'),
    ServiceManager: require('./build/ServiceManager')
};