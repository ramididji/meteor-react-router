Package.describe({
  name: 'reactrouter:react-router',
  version: '0.1.3',
  summary: 'react-router (official): A complete routing solution for React.js',
  git: 'https://github.com/thereactivestack/meteor-react-router.git',
  documentation: 'README.md'
});

Npm.depends({
  'exposify': '0.4.3',
  'react-router': '1.0.0-beta3'
});

Package.onUse(function(api) {
  api.use(['react@0.1.7', 'cosmos:browserify@0.5.0']);
  api.imply(['react@0.1.7']);

  api.add_files([
    'react-router.browserify.options.json',
    'react-router.browserify.js'
  ]);

  api.export('ReactRouter');
});
