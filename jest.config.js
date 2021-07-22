module.exports = {
    clearMocks: true,
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },
    moduleDirectories: ["node_modules", "src"],
    setupFilesAfterEnv: [
        "<rootDir>/settings/JestSetup.js",
        "<rootDir>/settings/jestSetup.ts",
    ],
    moduleNameMapper: {
        "\\.(css|less)$": "<rootDir>/settings/__mocks__/styleMock.js",
        '^@/(.*)$': '<rootDir>/src/$1',
    },
};