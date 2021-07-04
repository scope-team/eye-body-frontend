module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended', //eslint에서 권장하는 타입체크 플러그인들
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser', //타입스트립트에서도 eslint를 사용하기 위해 설치한 파서
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }], //들여쓰기 체크
    semi: ['error', 'always'], //세미콜론 체크
    quotes: ['error', 'double', { avoidEscape: true }], //따옴표 체크
    'no-empty-function': 'off', //함수 띄어쓰기 체크인데 함수 실행()할때 에러낼 수 있으니 꺼버려
    '@typescript-eslint/no-empty-function': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
