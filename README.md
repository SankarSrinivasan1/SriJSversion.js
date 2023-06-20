# SriJSVersion.js

### SriJSVersion.js is an automation library that simplifies the versioning and release management process for JavaScript projects.
### It provides features such as automatic version number generation, changelog updates, and release tagging, allowing developers to focus on development rather than manual version management tasks.

## Features

- Automatic generation of version numbers
- Updating of changelogs
- Handling of release tagging
- Basic and advanced version management functionality

## Installation

To install the SriJSVersion.js automation library, follow the steps below:

1. Ensure that you have Node.js installed on your system. SriJSVersion.js requires Node.js to run. You can download and install Node.js from the official Node.js website: [https://nodejs.org](https://nodejs.org)

2. Open a terminal or command prompt.

3. Navigate to your project directory using the `cd` command. For example:
   ```bash
   cd path/to/your/project
   ```

4. Run the following command to install SriJSVersion.js via npm:
   ```bash
   npm install srijsversion
   ```
   This command will download the SriJSVersion.js package from the npm registry and install it locally within your project.

5. SriJSVersion.js is now installed and ready to be used in your project.

6. You can import the SriJSVersion module in your JavaScript files using the `require` statement:
   ```javascript
   const SriJSVersion = require('srijsversion');
   ```

7. Refer to the SriJSVersion.js documentation or the provided example usage in the README to learn how to use the library's features in your project.

Note: If you encounter any issues during installation or usage, ensure that you have a stable internet connection and that your Node.js environment is properly set up.

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

Contact [Sankar Srinivasan](https://withkoji.com/@sankarsrinivasan)
