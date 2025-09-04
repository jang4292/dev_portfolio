// eslint.config.mjs (ESLint v9 Flat Config)
// 모노레포(services/*) 전체에 적용. TS + import/order + Prettier 연동.

// repo-root/eslint.config.mjs
import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';

// 공통 옵션
const TS_FILES = ['**/*.ts', '**/*.tsx'];
const JS_FILES = ['**/*.js', '**/*.cjs', '**/*.mjs'];
const IGNORE = [
  '**/node_modules/**',
  '**/dist/**',
  '**/coverage/**',
  '**/.turbo/**',
  '**/*.lock',
];

/** Node 전역 (process 등) */
const NODE_GLOBALS = {
  process: 'readonly',
  __dirname: 'readonly',
  __filename: 'readonly',
  require: 'readonly',
  module: 'readonly',
};

/** Jest 전역 (테스트 파일용) */
const JEST_GLOBALS = {
  describe: 'readonly',
  it: 'readonly',
  test: 'readonly',
  expect: 'readonly',
  beforeAll: 'readonly',
  beforeEach: 'readonly',
  afterAll: 'readonly',
  afterEach: 'readonly',
  jest: 'readonly',
};

export default [
  // 무시 패턴 (Flat Config에서는 .eslintignore 대신 여기에)
  { ignores: IGNORE },

  // 기본 JS 권장
  js.configs.recommended,

  // TypeScript 소스
  {
    files: TS_FILES,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        // 모노레포에서 TS 프로젝트 루트를 자동 탐색
        // 서비스별 tsconfig.json이 존재해야 정확한 타입 정보 활용 가능
        // v9 기능: 여러 tsconfig 자동 탐색
        projectService: true, // 모노레포에서 각 서비스 tsconfig 자동 탐색
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: { ...NODE_GLOBALS },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
    },
    rules: {
      // JS 기본 no-unused-vars 끄고 TS 전용만 사용(오검출 방지)
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      // 타입 전용 import 강제
      '@typescript-eslint/consistent-type-imports': 'error',

      // import 그룹/정렬/빈 줄
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      // 모노레포/경로별칭 환경에서 해석 이슈 완화
      'import/no-unresolved': 'off',
    },
  },

  // JS(빌드 스크립트 등)
  {
    files: JS_FILES,
    languageOptions: {
      globals: { ...NODE_GLOBALS },
    },
    rules: {
      // CJS require 허용 등 JS에서는 완화
      '@typescript-eslint/no-var-requires': 'off',
    },
  },

  // 테스트 파일(Jest 전역)
  {
    files: ['**/*.spec.ts', '**/*.test.ts', 'test/**/*.ts', '**/*.e2e-spec.ts'],
    languageOptions: {
      globals: { ...JEST_GLOBALS },
    },
  },
];
