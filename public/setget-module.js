class SetGet {
  async run(urls, data) {
    if (!data.hasOwnProperty('x') || !data.hasOwnProperty('y') || !data.hasOwnProperty('z')) {
      console.error('missing data input for x, y, and/or z');
      return -1;
    }
    await sharedStorage.set(data['x'], data['y']);
    try {
      const z = parseInt(await sharedStorage.get(data['z']));
      return z % urls.length;
    } catch (error) {
      return -1;
    }
  }
}

register('set-get', SetGet);