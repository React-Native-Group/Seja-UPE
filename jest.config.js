module.exports = {
  testTimeout: 20000,
  preset: "jest-expo",
  coveragePathIgnorePatterns: [
    "node_modules",
    "<rootDir>/App.tsx",
    "__mocks__",
    ".expo",
    ".expo-shared",
    ".github",
    ".tmp",
    ".vscode",
    "<rootDir>/src/core/services",
    "<rootDir>/src/core/hooks"
  ],
  moduleDirectories: [
    "node_modules"
  ],
  transform: {"\\.[jt]sx?$": "babel-jest"},
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*|@react-native|react-native|@ptomasroos/react-native-multi-slider)"
  ],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"]
}