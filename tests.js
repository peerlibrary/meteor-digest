Tinytest.add('digest', function (test) {
  var isDefined = false;
  try {
    Digest;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "Digest is not defined");
  test.isTrue(Package['peerlibrary:digest'].Digest, "Package.peerlibrary:digest.Digest is not defined");

  var digest = new Digest.SHA256();
  digest.update("Test.");
  test.equal(new Uint8Array(digest.finalize())[0], 49);
});
