Package.describe({
  name: 'constellation:subscriptions',
  version: '0.4.11',
  summary: 'Subscriptions plugin for Constellation',
  git: 'https://github.com/JackAdams/constellation-subscriptions.git',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function (api) {
  api.versionsFrom(['1.8.2', '2.3']);

  api.use(['templating@1.3.2', 'blaze@2.3.4', 'session', 'reactive-dict'], 'client');
  api.use('constellation:console@1.4.11', 'client');

  api.addFiles('subscriptions.css', 'client');
  api.addFiles('subscriptions.html', 'client');
  api.addFiles('subscriptions.js', 'client');
  
  api.imply('constellation:console');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('constellation:subscriptions');
  api.addFiles('subscriptions-tests.js');
});
