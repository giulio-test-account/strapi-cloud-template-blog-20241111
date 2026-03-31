module.exports = () => ({
  upload: {
    config: {
      sizeLimit: 2048 * 2 * 1024 * 1024, // 256mb in bytes
    },
  },
});