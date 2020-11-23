// https://jestjs.io/docs/en/configuration.html

module.exports = {
  projects: [
    {
      displayName: 'browser',
      moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          '<rootDir>/tests/__mocks__/fileMock.js',
      },
      testMatch: ['<rootDir>/browser/**/*.spec.js'],
      setupFilesAfterEnv: ['@testing-library/jest-dom'],
    },
    {
      displayName: 'graphql-api',
      testMatch: ['<rootDir>/graphql-api/**/*.spec.js'],
    },
  ],
  roots: ['<rootDir>', '<rootDir>/tests'],
}
