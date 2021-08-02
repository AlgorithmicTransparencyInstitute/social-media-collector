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
    nav: ['My Archive', 'Privacy Policy', 'Terms & Conditions', 'About', 'Preferences'],
    about: ['About the'],
    prefs: [
      'Sharing Preferences',
      `You have control over what you share with this project. To change what data you wish to share,
      check or uncheck the box to enable or disable sharing that type of data.`,

      'General Preferences',
      'These settings apply to all data shared by the extension',

      'Facebook Preferences',
      'These options control what data you share from your Facebook feed',

      'YouTube Preferences',
      'These options control what data you share when you are using YouTube',

      'Your Settings',
      "Setting your language and location help us ensure we're handling your data responsibly and analyzing it correctly.",

      'Your Country',
      'Your Language',
      'Age',
      'Gender'
    ],
    privacy: ['Privacy'],
    gender: ['Male', 'Female', 'Other', 'Prefer not to say'],
    archive: ['My Archive', 'You have nothing in your archive.']
  },
  german: {
    terms: [
      'Ich akzeptiere diese Nutzungsbedingungen.',
      'I accept the updated terms and conditions',
      'Sie müssen die oben genannten Nutzungsbedingungen akzeptieren, um die Browser-Erweiterung nutzen zu können.',
      'The above terms and conditions have been updated since you last agreed to them.',
      'You accepted the above terms and conditions.',
      'Nutzungsbedingungen',
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
    nav: ['Mein Archiv', 'Datenschutzrichtlinie', 'Nutzungsbedingungen', 'Über', 'Einstellungen'],
    about: ['Über'],
    prefs: [
      'Sharing Preferences',
      'Sie haben die Kontrolle darüber, was Sie mit diesem Projekt teilen. Um zu ändern, welche Daten sie teilen wollen, füllen Sie einfach die Kästchen aus.',

      'Allgemeine Präferenzen',
      'Diese Einstellungen betreffen alle mit Ad Observer geteilten Daten.',

      'Einstellungen für Facebook',
      'Diese Optionen kontrollieren, welche Facebook-Daten Sie mit uns teilen.',

      'Einstellungen für YouTube',
      'Diese Optionen kontrollieren, welche Youtube-Daten Sie mit uns teilen wollen',

      'Ihre Einstellungen',
      'Die Einstellung Ihrer Sprache und Ihres Landes hilft uns dabei, mit ihren Daten verantwortungsvoll im Rahmen der jeweiligen Gesetze umzugehen, sowie bei der korrekten Durchführung der Analysen.'
    ],
    privacy: ['Datenschutzrichtlinie'],
    gender: ['Männlich', 'Weiblich', 'TODO? Other', 'TODO? Prefer not to say'],
    archive: ['Mein Archiv', 'Sie haben nichts in Ihrem Archiv.']
  }
};

// var lang = process.env.lang;
var lang = process.env.LANGUAGE;
function I18n(page, i) {
  // return i18n.eng[page][i];
  // console.log('I18n debug', lang, page, i);
  return i18n[lang][page][i];
}

export default I18n;
