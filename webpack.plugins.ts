import type IForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

export const plugins = [
  new ForkTsCheckerWebpackPlugin({
    logger: "webpack-infrastructure",
  }),

  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(
          __dirname,
          "node_modules/node-sqlite3-wasm/dist/node-sqlite3-wasm.wasm"
        ),
        to: path.resolve(__dirname, ".webpack/main"),
      },
    ],
  }),
];
