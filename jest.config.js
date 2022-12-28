module.exports = {
    testPathIgnorePatterns: ["/node_modules", "/.next/"],
    setupFilesAfterEnv: [
        "<rootDir>/src/tests/setupTests.ts"
    ],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|scss|sass)$': 'identity-obj-proxy'
    }
    // moduleNameMapper: {
    //     '@next/font/(.*)': require.resolve('next/dist/build/jest/__mocks__/nextFontMock.js'),
    // },
}