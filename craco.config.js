const CracoLessPlugin = require("craco-less");
const path = require("path");

module.exports = {
  plugins: [{ plugin: CracoLessPlugin }],
  webpack: {
    alias: {
      "@src": path.join(__dirname, "./src"),
    },
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://10.249.172.203:9080",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
};
