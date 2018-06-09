module.exports = {
    verbose: true,
    globals: {
        "ts-jest": {
            tsConfigFile: "tsconfig.jest.json",
        },
    },
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts$",
    moduleFileExtensions: [
        "ts", "js", "json", "node"
    ]
};
