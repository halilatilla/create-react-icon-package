# Create React Icon Package

Create your own customizable SVG-based React icon package with `create-react-icon-package`. This powerful tool simplifies the process of generating, organizing, and distributing your custom icon set for React applications.

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Quick Start](#quick-start)
4. [Customizing Your Icon Set](#customizing-your-icon-set)
5. [Automatic Versioning and Publishing](#automatic-versioning-and-publishing)
6. [Contributing](#contributing)
7. [License](#license)

## Features

- Easy setup and configuration
- SVG to React component conversion
- Automatic versioning with Semantic Release
- GitHub Actions integration for CI/CD
- npm publishing automation

## Prerequisites

- Basic understanding of React
- Familiarity with npm and SVG icons
- Node.js and npm installed on your system

## Quick Start

1. Clone the repository:

   ```
   git clone https://github.com/halilatilla/create-react-icon-package.git my-icon-package
   ```

2. Navigate to the project folder:

   ```
   cd my-icon-package
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start customizing your icon package!

## Customizing Your Icon Set

1. Place your SVG icons in the `icons` folder.
2. Run the build command to generate React components:
   ```
   npm run build
   ```
3. Find your compiled components in the `dist` directory.

## Automatic Versioning and Publishing

This package uses Semantic Release and GitHub Actions for automatic versioning and publishing to npm.

### Setting up tokens

1. Create an npm account and generate an access token with "Read and Publish" permissions.
2. In your GitHub repository, go to Settings > Secrets.
3. Add the `NPM_TOKEN` secret with your npm access token.
4. The `GITHUB_TOKEN` is automatically provided by GitHub Actions.

### Publishing workflow

- Each push to the "main" branch triggers the versioning and publishing process.
- Your package will be automatically published to npm with an appropriate version number based on your commit messages.

## Contributing

We welcome contributions! Please feel free to submit issues and pull requests on the [GitHub repository](https://github.com/halilatilla/create-react-icon-package).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
