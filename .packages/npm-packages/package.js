Package.describe({
  name: 'npm-packages',
  version: '0.0.1',
  summary: 'Loading NPM packages in',
});

Npm.depends({
	"eye-tribe": "1.0.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
  api.mainModule('npm-packages.js');
  api.export( 'Eye-tribe' );
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('npm-packages');
  api.mainModule('npm-packages-tests.js');
});
