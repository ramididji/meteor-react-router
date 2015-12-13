Package.describe({
  name: 'reactrouter:react-router',
  version: '1.0.2',
  summary: 'react-router (official): A complete routing solution for React.js',
  git: 'https://github.com/thereactivestack/meteor-react-router.git',
  documentation: 'README.md'
});

Npm.depends({
  'exposify': '0.5.0',
  'react-router': '1.0.2',
  'history': '1.13.1'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2');

  api.use(['react-runtime@0.14.0', 'cosmos:browserify@0.8.0']);
  api.imply(['react-runtime@0.14.0']);

  api.add_files([
    'react-router.browserify.options.json',
    'react-router.browserify.js'
  ]);

  api.export('ReactRouter');
});
