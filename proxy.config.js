const proxy = [
    {
      context: '/api',
      target: 'http://localhost:8085'
    }
  ];
  module.exports = proxy;