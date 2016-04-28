// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by npm-packages.js.
import { name as packageName } from "meteor/npm-packages";

// Write your tests here!
// Here is an example.
Tinytest.add('npm-packages - example', function (test) {
  test.equal(packageName, "npm-packages");
});
