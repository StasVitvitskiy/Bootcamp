module.exports = {
    "roots": [
        "<rootDir>/src"
    ],
    "moduleNameMapper": {
      "\\.(css|sass|scss)$": "identity-obj-proxy",
        "~(.*)$": "<rootDir>/src/$1",
    }
};
