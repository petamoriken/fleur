module.exports = {
  rootDir: '.',
  transform: {
    '^.+\\.tsx?$': 'ts-jest/preprocessor',
  },
  testRegex: 'src/.*\\.spec\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.test.json',
      typeCheck: false,
    },
  },
  testURL: 'http://localhost/',
}
