module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    //...   <=== this three dots caused the problem
    plugins: ["react-native-reanimated/plugin"],
  };
};