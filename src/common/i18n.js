// general

// LC is abbreviation for locale.
// export const LC = process.env.LC;

export const i18n = {
  eng: {
    terms: [
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
    ],
    nav: ['My Archive', 'Privacy Policy', 'Terms & Conditions'],
    about: ['About the']
  },
  german: {
    nav: ['Mein Archiv', 'TODO', 'TODO'],
    about: ['Über']
  }
};

function I18n(page, i) {
  return i18n.eng[page][i];
}

export default I18n;
