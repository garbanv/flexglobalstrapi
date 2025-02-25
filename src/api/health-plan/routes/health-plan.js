'use strict';

/**
 * health-plan router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::health-plan.health-plan');
