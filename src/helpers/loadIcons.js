const iconsContext = require.context('../../node_modules/sugui/src/icons/', true, /jsx$/);

const Icons = iconsContext.keys().reduce((icons, file) => {
  const Icon = iconsContext(file).default;
  const label = file.slice(2, -4); // strip './' and '.js'
  icons[label] = Icon;
  return icons;
}, {});

export default Icons;
