Package.describe({
  summary: "Cryptographic digest and HMAC algorithms in Javascript for modern web browsers",
  version: '0.1.3',
  name: 'peerlibrary:digest',
  git: 'https://github.com/peerlibrary/meteor-digest.git'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.export('Digest');

  api.add_files([
    'digest/digest.js'
  ], 'client', {bare: true, isAsset: true});
});

Package.on_test(function (api) {
  api.use(['peerlibrary:digest', 'tinytest', 'test-helpers'], 'client');
  api.add_files('tests.js', 'client');
});
