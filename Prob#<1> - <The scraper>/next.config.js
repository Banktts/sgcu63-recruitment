module.exports = {
    exportPathMap: async function (defaultPathMap) {
      return {
        '/': { page: '/' },
        '/table': { page: '/table' }
      };
    }
  }