module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-empty': 0,
    'comma-dangle': 0,
    'vue/require-v-for-key': 0,
    'vue/return-in-computed-property': 0,
    'vue/valid-template-root': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/no-parsing-error': 0,
    'vue/valid-v-for': 0,
    'no-case-declarations': 0,
    'vue/require-valid-default-prop': 0,
    'vue/no-side-effects-in-computed-properties': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
