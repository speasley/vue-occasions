const renameKey = (hash, oldName, newName) => {
  if (oldName === newName) {
    return hash;
  }

  if (hash.hasOwnProperty(oldName)) {
    return {
      ...hash,
      [newName]: hash[oldName],
      [oldName]: undefined
    };
  }

  return hash;
};

export { renameKey }
