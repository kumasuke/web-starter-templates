module.exports = {
  root: true,
  extends: [
    'plugin:astro/recommended',
    '@antfu/eslint-config-ts',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],

  env: {
    node: true,
    es2020: true,
  },

  // ...
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // override/add rules settings here, such as:
        // 'astro/no-set-html-directive': 'error',
        'astro/no-unused-css-selector': 'error',
      },
    },
  ],

  // ...

  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        'groups': [
          'type',
          'builtin',
          'external',
          'internal',
          [
            'parent',
            'index',
            'sibling',
          ],
          'object',
        ],
        'alphabetize': {
          order: 'asc',
          caseInsensitive: false,
        },
        'pathGroups': [
          {
            pattern: 'astro/**',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@astrojs/**',
            group: 'builtin',
            position: 'after',
          },
          {
            pattern: '@layouts/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@components/**',
            group: 'internal',
            position: 'after',
          },
        ],
        // see: https://zenn.dev/riemonyamada/articles/02e8c172e1eeb1#pathgroupsexcludedimporttypes
        'pathGroupsExcludedImportTypes': ['builtin', 'object'],
      },
    ],
  },
}
