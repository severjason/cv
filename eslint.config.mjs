import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
  { files: ['**/*.{js,jsx,ts,tsx}'] },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  reactHooks.configs.flat['recommended-latest'],
  reactRefresh.configs.vite,
  {
    plugins: {
      'jsx-a11y': jsxA11y,
      react,
      reactHooks,
    },
  },
  {
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
  },
  {
    rules: {
      'import/no-named-as-default': 'off',
      'import/first': 'error',
      'import/no-amd': 'error',
      'import/no-webpack-loader-syntax': 'error',
      'import/no-anonymous-default-export': 0,

      'react/forbid-foreign-prop-types': [
        'warn',
        {
          allowInPropTypes: true,
        },
      ],

      'react/jsx-no-comment-textnodes': 'warn',
      'react/jsx-no-duplicate-props': 'warn',
      'react/jsx-no-target-blank': 'warn',
      'react/jsx-no-undef': 'error',

      'react/jsx-pascal-case': [
        'warn',
        {
          allowAllCaps: true,
          ignore: [],
        },
      ],

      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-uses-react': 'warn',
      'react/jsx-uses-vars': 'warn',
      'react/no-danger-with-children': 'warn',
      'react/no-direct-mutation-state': 'warn',
      'react/no-is-mounted': 'warn',
      'react/no-typos': 'error',
      'react/react-in-jsx-scope': 0,
      'react/display-name': 0,
      'react/prop-types': 0,
      'react/no-unescaped-entities': 1,
      'no-case-declarations': 0,
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/explicit-member-accessibility': 0,
      '@typescript-eslint/explicit-module-boundary-types': 0,
      '@typescript-eslint/indent': 0,
      '@typescript-eslint/member-delimiter-style': 0,
      '@typescript-eslint/no-useless-constructor': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-inferrable-types': 'warn',
      '@typescript-eslint/no-use-before-define': 0,
      'react-refresh/only-export-components': 1,

      '@typescript-eslint/no-unused-vars': [
        1,
        {
          argsIgnorePattern: '^_',
        },
      ],

      'no-useless-escape': 'warn',

      'no-console': [
        1,
        {
          allow: ['warn', 'error'],
        },
      ],
    },
  },
  {
    ignores: [
      'node_modules',
      '.next',
      'public/workbox-*.js',
      'public/workbox-*.js.map',
      'public/sw.js',
      'public/sw.js.map',
      '**!/pages',
      'next.config.js',
      'next-env.d.ts',
    ],
  },
  eslintPluginPrettierRecommended,
]);
