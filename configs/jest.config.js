module.exports = {
  rootDir: '..',
  coverageDirectory: '<rootDir>/tests/__coverage__/',
  roots: ['<rootDir>/src/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/__mocks__/fileMock.js'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/configs/jest.preprocessor.js'
  },
  transformIgnorePatterns: ['/node_modules/'],
  testRegex: '/*.test.(ts|tsx)$',
  moduleDirectories: ['node_modules'],
  globals: {
    DEVELOPMENT: false,
    FAKE_SERVER: false
  },
  setupFilesAfterEnv: [
    '@testing-library/react/cleanup-after-each',
    '@testing-library/jest-dom/extend-expect'
  ]
};
