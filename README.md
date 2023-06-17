# SriJSversion.js

To use this library, you would need to create an instance of the SriJSVersion class and call its methods according to your requirements. Here's an example usage:

const SriJSVersion = require('./SriJSVersion');

const sriJSVersion = new SriJSVersion();

// Basic features
const currentVersion = sriJSVersion.getCurrentVersion();
console.log('Current version:', currentVersion);

const newVersion = '1.0.0';
sriJSVersion.updateVersion(newVersion);

// Advanced features
const changes = 'Add new feature\nFix critical bug';
sriJSVersion.updateChangelog(newVersion, changes);
sriJSVersion.updatePackageVersion(newVersion);
sriJSVersion.commitChanges();
sriJSVersion.createReleaseTag(newVersion);

// Release version
sriJSVersion.release('1.1.0', 'Add another feature');
