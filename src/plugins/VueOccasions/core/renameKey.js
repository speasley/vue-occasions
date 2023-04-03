const renameKey = (hash, oldKey, newKey) => {

  if (oldKey !== newKey) {
    hash = {
      ...hash,
      [newKey]: Object.getOwnPropertyDescriptor(hash, oldKey).value,
    };
    delete hash[oldKey];
  }

  return hash;

}

export { renameKey }
