'use strict';

module.exports = (override, fallback, config) =>
  override
    ? require(override)(config)
    : fallback
      ? require(fallback) 
      : config;