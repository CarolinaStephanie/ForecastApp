module.exports = {
  root: true,
  extends: '@react-native-community',
  settings: {
    'import/resolver': {
      'babel-module': {},
      node: {
        paths: ['src'],
      },
    },
  },
  env: {
    jest: true,
  },
};
