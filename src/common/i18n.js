// general

// LC is abbreviation for locale.
// export const LC = process.env.LC;

export const i18n = {
  eng: [
    'I accept these terms and conditions',
    'I accept the updated terms and conditions',
    'You need to accept the above terms and conditions before you can use the browser extension.',
    'The above terms and conditions have been updated since you last agreed to them.',
    'You accepted the above terms and conditions.',
    'Terms of Use',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ]
};

function I18n(i) {
  return i18n.eng[i];
}

export default I18n;
