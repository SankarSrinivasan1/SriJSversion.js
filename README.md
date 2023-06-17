

# SriJSVersion.js

SriJSVersion.js is an automation library that simplifies the versioning and release management process for JavaScript projects. It provides features such as automatic version number generation, changelog updates, and release tagging, allowing developers to focus on development rather than manual version management tasks.

## Features

- Automatic generation of version numbers
- Updating of changelogs
- Handling of release tagging
- Basic and advanced version management functionality

## Installation

You can install SriJSVersion.js using npm:

```bash
npm install srijsversion
```

## Usage

To use SriJSVersion.js in your JavaScript project, follow these steps:

1. Import the SriJSVersion module:

```javascript
const SriJSVersion = require('srijsversion');
```

2. Create an instance of the SriJSVersion class:

```javascript
const sriJSVersion = new SriJSVersion();
```

3. Use the provided methods to perform versioning and release management tasks:

```javascript
const currentVersion = sriJSVersion.getCurrentVersion();
console.log('Current version:', currentVersion);

const newVersion = '1.0.0';
sriJSVersion.updateVersion(newVersion);

const changes = 'Add new feature\nFix critical bug';
sriJSVersion.updateChangelog(newVersion, changes);
sriJSVersion.updatePackageVersion(newVersion);
sriJSVersion.commitChanges();
sriJSVersion.createReleaseTag(newVersion);

sriJSVersion.release('1.1.0', 'Add another feature');
```

Make sure to adjust the file paths and version control operations according to your project setup and requirements.

## Documentation

### SriJSVersion

#### `getCurrentVersion()`

Retrieves the current version from the version file.

#### `updateVersion(newVersion)`

Updates the version to the specified `newVersion` and saves it to the version file.

#### `updateChangelog(version, changes)`

Updates the changelog with the provided `version` and `changes`.

#### `updatePackageVersion(newVersion)`

Updates the version in the package.json file to the specified `newVersion`.

#### `commitChanges()`

Commits the changes to the version control system.

#### `createReleaseTag(version)`

Creates a release tag in the version control system with the specified `version`.

#### `release(newVersion, changes)`

Performs a release by updating the version, changelog, package.json, committing changes, and creating a release tag.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

SriJSVersion.js was inspired by the need for simplified versioning and release management in JavaScript projects.
