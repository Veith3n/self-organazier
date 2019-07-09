module.exports = {
  'parser':  '@typescript-eslint/parser',  
  'extends':  [
    'plugin:@typescript-eslint/recommended', 
    'plugin:react/recommended',  
    'plugin:jest/recommended',
  ],
  'env': {
    'browser': true,
    'es6': true
  },
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'react-hooks',
    'jest',
  ],
  'rules': {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],
  }
}
