const RULES = {
  OFF: 'off',
  ERROR: 'error',
  WARN: 'warn',
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': RULES.ERROR,
    'arrow-body-style': RULES.OFF,
    'react/prop-types': RULES.OFF,
    'no-unused-vars': RULES.WARN,
    'no-console': [RULES.ERROR, { allow: ['warn', 'error'] }],
  },
};
