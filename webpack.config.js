const Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
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
  .enableSingleRuntimeChunk()
  .enableBuildNotifications(); // Notification de construction

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

// Configuration du Dev Server
Encore.configureDevServerOptions(options => {
    options.historyApiFallback = true; // Permet de gérer l'historique de l'API HTML5
    options.port = 8000; // Choisissez le port que vous souhaitez utiliser
    options.hot = true; // Activation du rechargement à chaud
    options.static = {
        directory: `${__dirname}/public/build`, // Répertoire des fichiers statiques
    };
});

module.exports = Encore.getWebpackConfig();
