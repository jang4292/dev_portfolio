// eslint.config.mjs (ESLint v9 Flat Config)
// 모노레포(services/*) 전체에 적용. TS + import/order + Prettier 연동.
// eslint.config.mjs — Monorepo Root (ESLint v9 Flat Config)

// repo-root/eslint.config.mjs
// Base
import js from '@eslint/js';

// TS
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

// Plugins
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

// Env globals
import globals from 'globals';

// Prettier compatibility (규칙 충돌 해제)
import prettierConfig from 'eslint-config-prettier';

// 공통 옵션 파일 패턴
const TS_FILES = ['**/*.ts', '**/*.tsx'];
const JS_FILES = ['**/*.js', '**/*.cjs', '**/*.mjs'];

// 무시(산출물/문서/캐시 등)
const IGNORE = [
  '**/node_modules/**',
  '**/dist/**',
  '**/build/**',
  '**/.next/**',
  '**/.turbo/**',
  '**/.cache/**',
  '**/coverage/**',
  'docs/**',             // ← GitHub Pages 등 정적 산출물 무시
  '**/*.min.js',
  '**/*.lock',
  // Expo / RN 산출물/캐시 보강
  '**/.expo/**',
  '**/.expo-shared/**',
  '**/android/**',
  '**/ios/**',
];

export default [
  // 0) ignore (Flat Config는 .eslintignore 미사용)
  { ignores: IGNORE },

  // 1) JS 권장
  js.configs.recommended,

  // 2) TS(범용; NestJS/Fastify 포함) — Node 전역 허용
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
      // 기본은 Node 전역(서버 사이드/빌드 스크립트 고려)
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
    },
    settings: {
      // 경로별칭/TS 해석 안정화 (선택) → resolver 설치 필요
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: ['services/*/tsconfig.json'],
        },
        node: { extensions: ['.js', '.ts', '.tsx'] },
      },
    },
    rules: {
      // JS 기본 no-unused-vars 끄고 TS 전용만 사용(오검출 방지)
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      // 타입 전용 import 일관화
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
          // vite/플러그인 우선 배치 (vite.config.ts에서 편함)
          pathGroups: [
            { pattern: 'vite', group: 'external', position: 'before' },
            { pattern: '@vitejs/**', group: 'external', position: 'before' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],

      // 경로 해석은 TS/빌드에 맡김
      'import/no-unresolved': 'off',
    },
  },

  // 3) JS(빌드 스크립트 등) — Node 전역
  {
    files: JS_FILES,
    languageOptions: {
      globals: { ...globals.node },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },

  // 4) Vite + React 앱 소스 전용(브라우저 전역 + Hooks/Refresh)
  //    예: services/web-frontend-vite/src/**/*
  {
    files: [
      'services/**/src/**/*.{ts,tsx,js,jsx}',
      // 필요 시 앱 경로 추가
    ],
    languageOptions: {
      // 브라우저 전역(document, window, console 등) 허용
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // React Hooks 권장
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Vite React Fast Refresh 관련
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },

  // 4-1) RN(Expo) 소스 전용 — App.tsx 포함 범위 추가
  {
    files: [
      'services/**/App.{ts,tsx,js,jsx}',
      'services/**/app/**/*.{ts,tsx,js,jsx}',
    ],
    languageOptions: {
      // RN은 browser 전역이 1:1 매칭은 아니지만 window/document 사용 안 함이 일반적
      // 별도 globals 생략(기본값) 또는 필요 시 최소만 추가
    },
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // RN에는 react-refresh 규칙 미적용 (웹 전용이므로 과잉 방지)
    },
  },

  // 5) vite.config / vitest.config 등 Node 컨텍스트 파일
  {
    files: [
      '**/vite.config.{ts,js,mjs,cjs}',
      '**/vitest.config.{ts,js,mjs,cjs}',
      '**/eslint.config.{ts,js,mjs,cjs}',
      '**/postcss.config.{ts,js,mjs,cjs}',
      '**/tailwind.config.{ts,js,mjs,cjs}',
      '**/webpack.config.{ts,js,mjs,cjs}',
      '**/rollup.config.{ts,js,mjs,cjs}',
      '**/metro.config.{ts,js,mjs,cjs}',
      '**/babel.config.{ts,js,mjs,cjs}',
    ],
    languageOptions: {
      globals: { ...globals.node },
    },
    rules: {
      // CJS require 허용 등 JS에서는 완화
      // 여기선 Node 컨텍스트 가정. 필요 시 규칙 완화 추가 가능.
    },
  },

  // 6) 테스트 파일 — Jest 또는 Vitest 전역 허용
  {
    files: [
      '**/*.spec.{ts,tsx,js,jsx}',
      '**/*.test.{ts,tsx,js,jsx}',
      'test/**/*.{ts,tsx,js,jsx}',
      '**/*.e2e-spec.{ts,tsx,js,jsx}',
    ],
    languageOptions: {
      globals: {
        // 둘 다 허용(프로젝트별로 하나만 써도 무방)
        ...globals.jest,
        ...globals.vitest,
      },
    },
  },

  // 7) Prettier 호환(규칙 충돌 제거)
  prettierConfig,
];
