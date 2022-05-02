module.exports ={
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/react',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended'
  ],
  rules: {
    "@typescript-eslint/no-non-null-assertion": 'off',
    "react/react-in-jsx-scope": 'off',
    "unicorn/filename-case": 'off',
    "unicorn/prevent-abbreviations": 'off'
  }
}