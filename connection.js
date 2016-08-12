// WARNING: Never put a publicly available connection string in this file. Always use environment variables
module.exports = ( function () {
  'use strict';
  return process.env.DATABASE_URL || 'postgres://localhost:5432/nerd_alert';
})();
