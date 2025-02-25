'use strict';

/**
 * health-plan controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::health-plan.health-plan');
