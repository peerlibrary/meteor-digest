Package.describe({
  summary: "Cryptographic digest and HMAC algorithms in Javascript for modern web browsers"
});

Package.on_use(function (api) {
  api.export('Digest');

  api.add_files([
    'digest/digest.js'
  ], 'client', {bare: true});
});

Package.on_test(function (api) {
  api.use(['digest', 'tinytest', 'test-helpers'], 'client');
  api.add_files('tests.js', 'client');
});
