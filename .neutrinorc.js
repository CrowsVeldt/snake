module.exports = {
  use: [
    '@neutrinojs/standardjs',
    [
      '@neutrinojs/web',
      {
        html: {
          title: 'snake-web'
        }
      }
    ],
    '@neutrinojs/jest'
  ]
};
