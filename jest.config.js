module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|tsx)$': 'babel-jest'
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
      '\\.(css|scss|sass)$': 'identity-obj-proxy'
    },
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
  }
  