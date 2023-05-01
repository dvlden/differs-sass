module.exports = {
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-empty-line-before': ['always', {
      except: [
        'blockless-after-same-name-blockless',
        'first-nested'
      ],
      ignore: ['after-comment'],
      ignoreAtRules: ['else']
    }],
    'at-rule-no-vendor-prefix': true,
    'block-no-empty': true,
    'color-hex-length': 'short',
    'color-named': 'never',
    'color-no-invalid-hex': true,
    'comment-empty-line-before': ['always', {
      except: ['first-nested'],
      ignore: ['stylelint-commands'],
    }],
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    'custom-property-empty-line-before': ['always', {
      except: [
        'after-custom-property',
        'first-nested',
      ],
      ignore: [
        'after-comment',
        'inside-single-line-block',
      ],
    }],
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values']
      }
    ],
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-single-line-max-declarations': 1,
    'declaration-empty-line-before': ['always', {
      except: [
        'after-declaration',
        'first-nested',
      ],
      ignore: [
        'after-comment',
        'inside-single-line-block',
      ],
    }],
    'declaration-no-important': true,
    // 'declaration-property-value-blacklist': {
    //   '/^border-?/': ['none']
    // },
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'font-family-name-quotes': 'always-where-recommended',
    'font-weight-notation': 'numeric',
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-name-case': 'lower',
    'function-url-quotes': 'always',
    'keyframe-declaration-no-important': true,
    'length-zero-no-unit': true,
    'max-nesting-depth': [4, {
      'ignoreAtRules': [
        'media',
        'supports',
        'include'
      ]
    }],
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': true,
    // 'no-descending-specificity': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-invalid-double-slash-comments': true,
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': ['always-multi-line', {
      except: ['first-nested'],
      ignore: ['after-comment'],
    }],
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-pattern': ['^[a-z]+(-[a-z]+)*$', {
      'message': 'Function should be written in lowercase with hyphens'
    }],
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],
    'scss/at-mixin-pattern': ['^[a-z]+(-[a-z]+)*$', {
      'message': 'Mixin should be written in lowercase with hyphens'
    }],
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-colon-space-after': 'at-least-one-space',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-pattern': ['^dfr(?:--(?:base|root|[xy]))?(?:-(?!base\b|root\b|[xy]\b)[a-z]+(?:[A-Z][a-z]+)*)+$', {
      'message': 'Variable must be written properly... It is predefined pattern!',
      'ignore': 'local'
    }],
    'scss/percent-placeholder-pattern': ['^[a-z]+(-[a-z]+)*$', {
      'message': 'Placeholder should be written in lowercase with hyphens'
    }],
    'scss/selector-no-redundant-nesting-selector': true,
    'selector-class-pattern': ['^[a-z]+(-[a-z]+)*$', {
      'message': 'Selector should be written in lowercase with hyphens'
    }],
    'selector-attribute-quotes': 'always',
    'selector-max-attribute': 1,
    'selector-max-class': 4,
    'selector-max-combinators': 2,
    'selector-max-compound-selectors': 3,
    'selector-max-id': 0,
    'selector-max-universal': 1,
    'selector-no-qualifying-type': true,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'shorthand-property-no-redundant-values': true,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': true,
    'string-no-newline': true,
    'unit-no-unknown': true,
    'value-keyword-case': ['lower', {
      'ignoreProperties': ['font']
    }],
    'value-no-vendor-prefix': true
  }
}
