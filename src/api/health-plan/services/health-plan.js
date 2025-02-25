'use strict';

/**
 * health-plan service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::health-plan.health-plan');
