module.exports = function(config) {
  'use strict';
  config.set({
    frameworks: ['jasmine'],
    reporters: ['spec'],
    files: [
      'build/release/static/scripts/core.min.js',
      'spec/**/*.js'
    ]
  });
};
