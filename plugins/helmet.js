"use strict";

const fp = require("fastify-plugin");

/**
 * Adds basic Helmet support for securing HTTP headers with default configurations.
 */
module.exports = fp(async (fastify, opts) => {
  fastify.register(require("@fastify/helmet"));
  // No options passed means defaults are used. Helmet can accept options to customize its behavior.
});
