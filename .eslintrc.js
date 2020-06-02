module.exports = {
  parser: "babel-eslint",
  "ignorePatterns": ["node_modules/", 'build/', '_*.js'],
  extends: [
    'standard',
    'prettier',
    'prettier/standard',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style'
  ],
  plugins: ['prettier', 'standard', 'react', 'react-hooks', 'import', 'promise', 'jest'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es2020: true,
    browser: true,
    webextensions: true,
    "jest/globals": true
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, semi: true }],
    'no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
