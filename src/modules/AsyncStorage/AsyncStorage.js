export default AsyncStorageLibrary => {
  const storeData = async (key, value) => {
    try {
      await AsyncStorageLibrary.setItem(key, value);
    } catch (e) {
      console.error(e);
    }
  };

  const readData = async key => {
    try {
      const value = await AsyncStorageLibrary.getItem(key);
      return value;
    } catch (e) {
      console.error(e);
    }
  };

  const cleanKeyData = async key => {
    await storeData(key, '');
  };

  return {storeData, readData, cleanKeyData};
};
