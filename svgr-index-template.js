const path = require('path');

function template(filePaths) {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));

    return `export { default as ${'Icon' + basename} } from './${basename}'`;
  });
  return exportEntries.join('\n');
}

module.exports = template;
