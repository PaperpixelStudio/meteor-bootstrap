Package.describe({
  name: "drskullster:bootstrap",
  summary: "Highly configurable bootstrap integration.",
  version: "3.3.1_1",
  git: "https://github.com/PaperpixelStudio/meteor-bootstrap"
});


Package._transitional_registerBuildPlugin({
  name: 'bootstrap-configurator',
  use: [
    'underscore@1.0.2',
    'nemo64:bootstrap-data@3.3.1_1'
  ],
  sources: [
    'module-definitions.js',
    'distributed-configuration.js',
    'bootstrap-configurator.js'
  ],
  npmDependencies: {}
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.2.2");
  api.use([
    'jquery',
    'nemo64:bootstrap-data@3.3.1_1'
  ], 'client');
});
