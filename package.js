Package.describe({
  name: 'reactrouter:react-router',
  version: '2.0.0',
  summary: 'react-router (official): A complete routing library for React.js',
  git: 'https://github.com/thereactivestack/meteor-react-router.git',
  documentation: 'README.md'
});

Npm.depends({
  'exposify': '0.5.0',
  'react-router': '2.0.0'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2');

  api.use(['react-runtime@0.14.3', 'cosmos:browserify@0.9.3']);
  api.imply(['react-runtime@0.14.3']);

  api.add_files([
    'react-router.browserify.options.json',
    'react-router.browserify.js'
  ]);

  api.export('ReactRouter');
});
