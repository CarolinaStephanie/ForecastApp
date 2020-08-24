module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-syntax-optional-chaining',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          config: './src/config',
          screens: './src/screens',
          store: './src/store',
          components: './src/components',
        },
      },
    ],
  ],
};
