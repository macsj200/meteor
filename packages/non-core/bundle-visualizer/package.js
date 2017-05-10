Package.describe({
  version: '1.0.0',
  summary: 'Meteor bundle analysis and visualization.',
  documentation: 'README.md',
});

Npm.depends({
  "d3-selection": "1.0.5",
  "d3-shape": "1.0.6",
  "d3-hierarchy": "1.1.4",
  "d3-transition": "1.0.4",
  "pretty-bytes": "4.0.2",
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.4.1');
  api.use([
    'ecmascript',
    'dynamic-import',
  ]);
  api.mainModule('server.js', 'server');
  api.mainModule('client.js', 'client');
});
