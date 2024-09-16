export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['chore', 'design', 'docs', 'feat', 'fix', 'refactor', 'style'],
    ],
  },
}
