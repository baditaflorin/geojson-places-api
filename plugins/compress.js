"use strict";

const fp = require("fastify-plugin");

/**
 * Adds compression with default configurations.
 */
module.exports = fp(async (fastify, opts) => {
  fastify.register(require("@fastify/compress"), {
    // Default threshold for compression is 1024 bytes (1kB)
    threshold: 1024,
  });
});
