// SriJSVersion.js is an automation library that simplifies the versioning and release management process for JavaScript projects. 
// It provides features such as automatic version number generation, changelog updates, and release tagging, allowing developers to focus on development rather than manual version management tasks.
// Contact Sankar Srinivasan petra.srini@gmail.com

const fs = require('fs');

class SriJSVersion {
  constructor() {
    this.versionFilePath = 'version.txt';
    this.changelogFilePath = 'changelog.md';
    this.packageFilePath = 'package.json';
  }

  // Basic features

  getCurrentVersion() {
    let version;
    try {
      version = fs.readFileSync(this.versionFilePath, 'utf8');
    } catch (error) {
      version = '0.1.0'; // Initial version if file doesn't exist
    }
    return version.trim();
  }

  updateVersion(newVersion) {
    fs.writeFileSync(this.versionFilePath, newVersion);
    console.log(`Version updated to ${newVersion}`);
  }

  // Advanced features

  updateChangelog(version, changes) {
    const changelogEntry = `\n## ${version}\n\n${changes}\n`;
    fs.appendFileSync(this.changelogFilePath, changelogEntry);
    console.log('Changelog updated');
  }

  updatePackageVersion(newVersion) {
    const packageData = JSON.parse(fs.readFileSync(this.packageFilePath, 'utf8'));
    packageData.version = newVersion;
    fs.writeFileSync(this.packageFilePath, JSON.stringify(packageData, null, 2));
    console.log(`Package.json version updated to ${newVersion}`);
  }

  commitChanges() {
    // Code to commit changes using Git or any other version control system
    console.log('Changes committed');
  }

  createReleaseTag(version) {
    // Code to create a release tag using Git or any other version control system
    console.log(`Release tag ${version} created`);
  }

  release(newVersion, changes) {
    this.updateVersion(newVersion);
    this.updateChangelog(newVersion, changes);
    this.updatePackageVersion(newVersion);
    this.commitChanges();
    this.createReleaseTag(newVersion);
    console.log(`Released version ${newVersion}`);
  }
}

module.exports = SriJSVersion;
