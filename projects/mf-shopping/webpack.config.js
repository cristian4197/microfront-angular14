const { shareAll, withModuleFederationPlugin, SharedMappings } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfShopping',

  exposes: {
    // Aqui van los modulos que se expondrán
    './ProductsModule':
      './projects/mf-shopping/src/app/products/products.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  // Aqui van los alias de las librerias que vas a utilizar en el microfront
  sharedMappings: ["@commons-lib"]

});
