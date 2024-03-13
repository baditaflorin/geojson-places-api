"use strict";

const fp = require("fastify-plugin");

/**
 * Adds basic rate limiting with default options.
 */
module.exports = fp(async (fastify, opts) => {
  fastify.register(require("@fastify/rate-limit"), {
    max: 3600, // Maximum number of requests from a single IP in a window.
    timeWindow: "1 minute", // Time window for the maximum number of requests.
  });
});
