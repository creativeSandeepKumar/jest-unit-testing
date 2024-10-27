module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',  // Handles JS/TSX with Babel
    },
    moduleNameMapper: {
      '^.+\\.(css|less|scss)$': 'identity-obj-proxy', // Mock CSS imports
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // Jest setup
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  };
  