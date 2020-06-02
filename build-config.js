const { name, version, description, consentVersion } = require('./package.json');

const title = 'ATI Social Media Monitor Extension';

/**
 *  NOTE: If you wish to override the settings in this file, make a copy of it and use that copy
 *  when building the extension.
 *
 *  So if, for example, you create your own build config called `alt-build-config.js` in the
 *  root folder of this project, then you'd use it by adding the param `--env.file=./alt-build-conf`.
 *
 *  See README.md for more.
 */
module.exports = (isDebug = false) => ({
  name, // the extension name (uses what's in package.json as a default)
  title,
  description,
  version,
  consentVersion, // if you change this, strange things might happen.
  extensionProviderId: 'ati',
  geckoId: 'info@ati.io',
  homepage: 'https://github.com/AlgorithmicTransparencyInstitute/social-media-collector',
  assetsPath: 'assets',
  defaultIcon: 'icon128.png',
  consentText: `
  <p>
    By installing this extension and sharing what you see online, you are
    helping to support crucial investigative journalism and academic
    research into how social media impacts our shared civic discourse.
  </p>
  <p>This tool will collect and share:</p>
  <ul>
    <li>The public content you see on Facebook and YouTube</li>
    <li>The ads you are shown on these platforms</li>
    <li>The reasons why you were targeted with these ads</li>
    <li>Any recommendations associated with the content you view</li>
    <li>Diagnostic data about the behavior of the extension</li>
    <li>
      A unique identifier to link all the items shared from your browser
    </li>
  </ul>
  <p>This tool will NOT collect:</p>
  <p>
    Personal information about you that is not directly linked to the ads or
    content you see
  </p>
  <p>You are in control. At any time, you can:</p>
  <ul>
    <li>view everything shared with our project</li>
    <li>disable or remove this extension</li>
    <li>change which types of information are shared with the project</li>
    <li>
      request that all information shared by you is permanently deleted from
      our systems
    </li>
  </ul>`,
  helpText: `
  <p>
    <i>help text to go here</i>
  </p>`,
  aboutText: `
  <p>
    The ${title} is an initiative to empower citizens to
    voluntarily share data about what they see online to enable academic
    research and investigative journalism about how digital platforms impact
    society.
  </p>
  <p>
    The central tool for this project is a browser extension that collects
    content, advertisements, recommendations, and ad targeting information as
    users browse the web. This data is anonymized and transmitted to a central
    database where it can be analyzed. Aggregated data about what users see as
    well as the actual content and advertisements are accessible to
    researchers, journalists, and the public. This data can be used for
    non-commercial purposes to investigate how content spreads online, how
    users are targeted with advertisements, and what kinds of messages are
    used to persuade the public.
  </p>
  <p>
    This project is inspired by numerous efforts that have come before it,
    including the ProPublica Facebook Political Ad Collector (and the TGAM FB
    Political Ad Collector), Who Targets Me, Ad Analyst.
  </p>
  <p>
    The goal of this initiative is to make it easier to collect and share data
    across a range of digital platforms to bring greater transparency to the
    algorithms that impact our lives.
  </p>
  <p>
    This project is a collaboration between: The Algorithmic Transparency
    Institute, NYU, Quartz, and…
  </p>
  <p>
    For more information about the project, please visit:&nbsp;
    <a href="https://ati.io/extension">ati.io/extension</a>.
  </p>`,
  privacyText: `
  <p>
    Your privacy is important to us. <i>full privacy policy yet to be supplied</i>
  </p>`,
  preferencesPageFooter: `
  <p>
    If you wish to have all of your data deleted from the data archive,
    please send an email to&nbsp;
    <a href="mailto: deleteme@ati.io">deleteme@ati.io</a>
    &nbsp;and we&lsquo;ll walk you through the process.
  </p>`,
  apiUrl: '',
  permissions: {
    SHOW_DEBUG_DATA: {
      label: 'Show Debug Data',
      hintText: 'Debugging information will be displayed',
      defaultValue: isDebug
    },
    USER_SHARE_INSTALLATION_ID: {
      label: 'Share Installation ID',
      hintText:
        'An anonymous user ID that allows us to link all of your content ads and targeting data together',
      defaultValue: true
    },
    USER_SHARE_COUNTRY: {
      label: 'Share My Country',
      hintText: 'The country you told us you are in',
      defaultValue: true
    },
    USER_SHARE_LANGUAGE: {
      label: 'Share My Language',
      hintText: 'The language you told us you speak',
      defaultValue: true
    },
    USER_SHARE_GENDER: {
      label: 'Share My Gender',
      hintText: 'The gender you told us you are',
      defaultValue: true
    },
    USER_SHARE_AGE: {
      label: 'Share My Age',
      hintText: 'The age group you told us you are in',
      defaultValue: true
    },
    USER_SHARE_IP: {
      label: 'Share My IP Address',
      hintText: 'The Internet Protocol address for your computer',
      defaultValue: true
    },
    USER_SHARE_DIAGNOSTICS: {
      label: 'Share Diagnostic Data',
      hintText: 'If things go wrong we’ll send extra data to help us diagnose the problem',
      defaultValue: true
    },
    // FB_SHARE_PUBLIC_USER_POSTS: {
    //   label: 'Share Public User Posts',
    //   hintText:
    //     'This allows the extension to collect any public posts posted by actual people that appear in your newsfeed. Posts by shared by your friends and family that are not marked as public will not be shared',
    //   defaultValue: false
    // },
    FB_SHARE_PUBLIC_PAGE_POSTS: {
      label: 'Share Public Page Posts',
      hintText:
        'This allows the extension to collect any public posts by brands or pages that appear in your newsfeed. Posts by shared by your friends and family that are not marked as public will not be shared',
      defaultValue: true
    },
    FB_SHARE_SPONSORED_POSTS: {
      label: 'Share Sponsored Posts',
      hintText: 'This allows the extension to collect all of the ads shown to you on Facebook',
      defaultValue: true
    },
    FB_SHARE_AD_TARGETING: {
      label: 'Share Ad Targeting Information',
      hintText:
        'This allows the extension to request and collect the "Why am I seeing this?" information from facebook that explains why a particular ad was targeted to you',
      defaultValue: true
    },
    FB_SHOW_COLLECTION_STATUS: {
      label: 'Show Collection Status',
      hintText: 'If on this will tag your facebook post with collection info.',
      defaultValue: true // change this to `isDebug` if you want this only be on for debug users
    },
    YT_SHARE_WATCHED_VIDEOS: {
      label: 'Share Watched Videos',
      hintText: 'This will share each video you choose to watch on YouTube',
      defaultValue: true
    },
    YT_SHARE_RECOMMENDED_VIDEOS: {
      label: 'Share Recommendations',
      hintText:
        'This will share the other videos YouTube recommends to you while you are watching a video',
      defaultValue: true
    },
    YT_SHARE_ADS: {
      label: 'Share Advertisments',
      hintText: 'This will share all of the different types of ads you are shown on YouTube',
      defaultValue: true
    },
    YT_SHARE_AD_TARGETING: {
      label: 'Share Ad Targeting Information',
      hintText:
        'This will share the explanations provided by YouTube for why you were shown a particular ad',
      defaultValue: true
    }
  }
});
