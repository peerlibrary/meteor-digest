Package.describe({
  summary: "Cryptographic digest and HMAC algorithms in Javascript for modern web browsers",
  version: '0.1.3',
  name: 'mrt:digest',
  git: 'https://github.com/peerlibrary/meteor-digest.git'
});

Package.on_use(function (api) {
  api.imply('peerlibrary:digest@0.1.3');
});
