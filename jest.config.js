module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  moduleNameMapper: {
    '@root/(.*)$': '<rootDir>/$1',
    '@theme$': '<rootDir>/theme.js',
    '@themes/(.*)$': '<rootDir>/themes/$1',
    '@src/(.*)$': '<rootDir>/src/$1',
    '@test-utils$': '<rootDir>/utils/test-utils.jsx',
    '\\.(css|sass)$': '<rootDir>/lib/jest/styleMock.js',
  },
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'jsx'],
};
