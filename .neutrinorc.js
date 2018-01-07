module.exports = {
  use: [
    '@neutrinojs/standardjs',
    [
      '@neutrinojs/web',
      {
        html: {
          title: 'snake'
        }
      }
    ],
    '@neutrinojs/jest'
  ]
};
