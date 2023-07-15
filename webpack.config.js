const path = require("path");
const fs = require("fs");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map((item) => {
    const parts = item.split(".");
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
    });
  });
}

const htmlPlugins = generateHtmlPlugins("./src/html/views");

module.exports = (env, argv) => {
  const mode = argv.mode || "development";
  const isDev = mode === "development";

  return {
    entry: path.resolve(__dirname, "src", "js", "index.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      clean: true,
    },
    devServer: {
      watchFiles: ["./src/**/*.html", "./src/**/*.js"],
      static: "./dist",
      hot: true,
    },

    devtool: "source-map",
    mode,
    module: {
      rules: [
        {
          test: /\.html$/,
          include: path.resolve(__dirname, "src/html/includes"),
          use: ["raw-loader"],
        },
        {
          test: /\.css$/i,
          include: path.resolve(__dirname, "src"),
          exclude: /node_modules/,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,

            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
              },
            },
            "postcss-loader",
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: "./src/fonts",
            to: "./fonts",
          },
          {
            from: "./src/img",
            to: "./img",
          },
          {
            from: "./src/uploads",
            to: "./uploads",
          },
        ],
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      }),
      new webpack.HotModuleReplacementPlugin(),
    ].concat(htmlPlugins),
  };
};
