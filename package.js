Package.describe({
  name: 'reactrouter:react-router',
  version: '0.1.12',
  summary: 'react-router (official): A complete routing solution for React.js',
  git: 'https://github.com/thereactivestack/meteor-react-router.git',
  documentation: 'README.md'
});

Npm.depends({
  'exposify': '0.5.0',
  'react-router': '1.0.0',
  'history': '1.13.1'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2');

  api.use(['react-runtime@0.13.3_6', 'cosmos:browserify@0.8.0']);
  api.imply(['react-runtime@0.13.3_6']);

  api.add_files([
    'react-router.browserify.options.json',
    'react-router.browserify.js'
  ]);

  api.export('ReactRouter');
});
