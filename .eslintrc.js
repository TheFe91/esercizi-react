const off = 'off';
const warn = 'warn';
const error = 'error';

const listOfRules = {
  a11y: {
    'jsx-a11y/anchor-is-valid': [warn, { aspects: ['invalidHref'] }],
    'jsx-a11y/click-events-have-key-events': off,
    'jsx-a11y/control-has-associated-label': off,
    'jsx-a11y/label-has-associated-control': off,
    'jsx-a11y/no-static-element-interactions': off,
    'jsx-a11y/no-autofocus': off,
    'jsx-a11y/label-has-for': off,
  },
  import: {
    'import/extensions': off,
    'import/no-cycle': off,
    'import/no-named-as-default': off,
    'import/no-unresolved': [error, { ignore: ['globalTypes'] }],
    'import/prefer-default-export': off,
  },
  misc: {
    camelcase: off,
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': off,
    'no-confusing-arrow': off,
    'no-console': off,
    'no-nested-ternary': off,
    'no-param-reassign': [error, { ignorePropertyModificationsFor: ['draft'], props: true }],
    'no-use-before-define': off,
    'no-shadow': off,
    'default-param-last': off,
  },
  react: {
    'react-hooks/exhaustive-deps': error,
    'react-hooks/rules-of-hooks': error,
    'react/destructuring-assignment': off,
    'react/forbid-prop-types': off,
    'react/jsx-filename-extension': off,
    'react/jsx-newline': [error, { prevent: false }],
    'react/jsx-no-duplicate-props': [error, { ignoreCase: false }],
    'react/jsx-no-useless-fragment': error,
    'react/jsx-props-no-spreading': off,
    'react/jsx-sort-props': [error, {
      callbacksLast: false,
      ignoreCase: true,
      noSortAlphabetically: false,
      reservedFirst: ['key'],
      shorthandFirst: false,
      shorthandLast: false,
    }],
    'react/no-access-state-in-setstate': off,
    'react/no-array-index-key': off,
    'react/prop-types': off,
    'react/require-default-props': off,
    'react/state-in-constructor': off,
    'react/static-property-placement': off,
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state', 'draft'] }],
    'react/react-in-jsx-scope': off,
    'no-alert': off,
  },
};

const rules = {
  ...listOfRules.import,
  ...listOfRules.a11y,
  ...listOfRules.misc,
  ...listOfRules.react,
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  root: true,
  extends: [
    'airbnb',
    'plugin:import/react',
    'plugin:sonarjs/recommended-legacy',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'jsx-a11y',
    'react',
    'react-hooks',
    'sonarjs',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@Components/*', './src/components'],
          ['@Containers/*', './src/containers'],
          ['@Resources/*', './src/resources'],
          ['@Src/*', './src'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules,
};
