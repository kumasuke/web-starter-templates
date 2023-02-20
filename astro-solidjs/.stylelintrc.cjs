module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-hudochenkov/order"
  ],
  ignoreFiles: ['node_modules/*'],

  "plugins": [
  ],

  "rules": {
    "indentation": 2, // deprecated version >= v15
  },

  "overrides": [
    {
      "files": ["*.astro", "**/*.astro"],
      "customSyntax": "postcss-html",
    }
  ]
}
