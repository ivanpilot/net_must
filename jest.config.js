module.exports = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ['./tests/config/setup.ts'],
};
