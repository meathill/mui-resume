module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript',
  ],
  rules: {
    semi: 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/semi': ['error', 'always', { omitLastInOneLineBlock: true }],
  },
};
