const getPath = () => {
  const filename = 'jquery.occasions';
  const scripts = document.getElementsByTagName('script');
  let filepath = '';

  if (scripts && scripts.length > 0) {
    for (let script of scripts) {
      // uncompressed
      if (script.src && script.src.match(new RegExp(`${filename}\\.js$`))) {
        filepath = script.src.replace(new RegExp(`(.*)${filename}\\.js$`), '$1');

        if (filepath.slice(0, 4) === 'file' && filepath.slice(-21) === 'jquery.occasions/src/') {
          return './';
        } else {
          return filepath;
        }
      }

      // minified
      if (script.src && script.src.match(new RegExp(`${filename}\\.min.js$`))) {
        filepath = script.src.replace(new RegExp(`(.*)${filename}\\.min.js$`), '$1');
        return filepath;
      }
    }
  }
};

const sanitizePath = (path) => {
  if (!path.endsWith('/')) {
    path = `${path}/`;
  }
  return path;
}

export { getPath, sanitizePath }
