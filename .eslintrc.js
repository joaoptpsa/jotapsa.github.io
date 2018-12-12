module.exports = {
    "extends": "google",
    "parser": "babel-eslint",
    "rules": {
        "require-jsdoc": "off",
        // windows linebreaks when not in production environment
        "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"]
    }
}