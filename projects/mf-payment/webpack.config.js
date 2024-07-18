const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
// Nombre para identificarlo en la shell
  name: 'mfPayment',

  exposes: {
    // Esto expondremos en la shell u otro microfront
    './PaymentComponent':
      './projects/mf-payment/src/app/payment/payment.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  sharedMappings: ["@commons-lib"]
});
