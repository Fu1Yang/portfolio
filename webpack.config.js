const Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  .setOutputPath('public/build/')
  .setPublicPath('/build')
  .addEntry('app', './assets/app.js')
  .enableReactPreset()
  .enableSassLoader() // Pour SCSS, si nécessaire
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .autoProvidejQuery()
  .enableSingleRuntimeChunk();

// Ajouter les loaders d'images
Encore.addLoader({
  test: /\.(png|jpe?g|gif|svg)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[hash].[ext]',
        outputPath: 'images',
        publicPath: '/build/images',
      },
    },
  ],
});

module.exports = Encore.getWebpackConfig();
