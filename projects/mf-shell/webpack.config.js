const { shareAll, withModuleFederationPlugin, SharedMappings } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  // Aqui se ponen los microfront que se van a integrar
  remotes: {
    "mfShopping": "http://localhost:4201/remoteEntry.js",
    "mfPayment": "http://localhost:4202/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  sharedMappings: ["@commons-lib"]
});
