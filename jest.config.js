module.exports = {
  preset: 'react-native',
  verbose: true,
  setupFiles: [
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>/node_modules/react-native/jest/setup.js',
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  timers: 'fake',
  testEnvironment: 'jsdom',
};
