"use strict";

const fp = require("fastify-plugin");

/**
 * Adds basic CORS support with default options.
 */
module.exports = fp(async (fastify, opts) => {
  fastify.register(require("@fastify/cors"), {
    // Default options allow requests from any origin
    origin: "*",
  });
});
