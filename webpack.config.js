export default {
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        use: "babel-loader",
      },
      {
        test: /\.(scss|css)/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png|mp4)/,
        type: "asset/resource",
      },
    ],
  },
  watch: true,
  watchOptions: { aggregateTimeout: 500 },
  mode: "development",
  devtool: "source-map",
};
