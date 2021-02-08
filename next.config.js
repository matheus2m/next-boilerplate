/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');
const isDev = process.env.NODE_ENV === 'development';

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: isDev
  }
});
