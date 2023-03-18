module.exports = {
  icon: true,
  typescript: true,
  titleProp: true,
  memo: true,
  indexTemplate: require('./svgr-index-template'),
  replaceAttrValues: {
    '#EFEFEF': 'currentColor',
  },
};
