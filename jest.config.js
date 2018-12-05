module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '^actions/(.*)': '<rootDir>/src/actions/$1',
    '^components/(.*)': '<rootDir>/src/components/$1',
    '^configs/(.*)': '<rootDir>/src/configs/$1',
    '^cycles/(.*)': '<rootDir>/src/cycles/$1',
    '^reducers/(.*)': '<rootDir>/src/reducers/$1',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
