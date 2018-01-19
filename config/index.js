const path = require('path');

const configPath = () => path.resolve(__dirname, '.');
const rootPath = () => path.resolve(__dirname, '..');
const srcPath = () => path.resolve(rootPath(), 'src');
const distPath = () => path.resolve(rootPath(), 'dist');

module.exports = {
  rootPath,
  srcPath,
  distPath,
  configPath,
};