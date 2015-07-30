Package.describe({
  name: 'reactrouter:react-router',
  version: '1.0.0-beta3',
  summary: 'react-router (official): A complete routing solution for React.js',
  git: 'https://github.com/octopusjs/meteor-react-router.git',
  documentation: 'README.md'
});

Npm.depends({
  'externalify': '0.1.0',
  'react': '0.13.3',
  'react-router': '1.0.0-beta3'
});

Package.onUse(function(api) {
  api.use([
    'react',
    'cosmos:browserify'
  ]);

  api.add_files([
    'server.js'
  ], 'server');

  api.add_files([
    'client.browserify.options.json',
    'client.browserify.js'
  ], 'client');

  api.export('ReactRouter');
});
