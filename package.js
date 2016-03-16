Package.describe({
  name: 'maximum:promise-subscribe',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'Promise support for subscriptions',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/maximummeteor/promise-subscribe.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-rc.2');
  api.use('ecmascript');
  api.use('modules')
  api.mainModule('promise-subscribe.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('modules')
  api.use('maximum:promise-subscribe');
  api.mainModule('promise-subscribe-tests.js');
});
