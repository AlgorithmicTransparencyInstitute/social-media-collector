const generic = require('./generic');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');

const locale_en = (data, copyAssetFolder) => {
  const { plugins, ...base } = generic(data, '_locales/en', ['regenerator-runtime/runtime', './_locales/en']);

  return {
    ...base,
    plugins: [
      ...plugins,
      new GenerateJsonPlugin('messages.json', {
        appName: {
          "message": "Ad Observer",
          // "description": "The title of the application, displayed in the web store."
        },
        appDesc: {
          "message": "Installing our browser plugin sends us the ads you see on Facebook and YouTube without compromising your privacy.",
          // "description":"The description of the application, displayed in the web store."
        },

        // Preferences page.
        youtube_share_ad_targeting_label: {
          message: 'Share Ad Targeting Information',
        },
        youtube_share_ad_targeting_hintText: {
          message: 'This will share the explanations provided by YouTube for why you were shown a particular ad',
        },
        youtube_share_ads_label: {
          message: 'Share Advertisements',
        },
        youtube_share_ads_hintText: {
          message: 'This will share all of the different types of ads you are shown on YouTube',
        },
        youtube_share_recommended_videos_label: {
          message: 'Share Recommendations',
        },
        youtube_share_recommended_videos_hintText: {
          message: 'This will share the other videos YouTube recommends to you while you are watching a video',
        },
        youtube_share_watched_videos_label: {
          message: 'Share Watched Videos',
        },
        youtube_share_watched_videos_hintText: {
          message: 'This will share each video you choose to watch on YouTube (often, ads are targeted to be shown to viewers of a particular video or channel, so this is a big help if you opt-in)',
        },
        user_share_country_label: {
          message: 'Share My Country',
        },
        user_share_country_hintText: {
          message: 'The country you told us you are in',
        },
        user_share_language_label: {
          message: 'Share My Language',
        },
        user_share_language_hintText: {
          message: 'The language you told us you speak',
        },
        user_share_gender_label: {
          message: 'Share My Gender',
        },
        user_share_gender_hintText: {
          message: 'The gender you told us you are',
        },
        user_share_age_label: {
          message: 'Share My Age',
        },
        user_share_age_hintText: {
          message: 'The age group you told us you are in',
        },
        user_share_diagnostic_data_label: {
          message: 'Share Diagnostic Data',
        },
        user_share_diagnostic_data_hintText: {
          message: 'If things go wrong we’ll send extra data to help us diagnose the problem',
        },
        show_debug_data_label: {
          message: 'Show Debug Data',
        },
        show_debug_data_hintText: {
          message: 'Debugging information will be displayed',
        },
        facebook_share_sponsored_posts_label: {
          message: 'Share Facebook Ads',
        },
        facebook_share_sponsored_posts_hintText: {
          message: 'This allows the extension to collect all of the ads shown to you on Facebook',
        },
        facebook_share_ad_targeting_label: {
          message: 'Share Ad Targeting Information',
        },
        facebook_share_ad_targeting_hintText: {
          message: 'This allows the extension to request and collect the "Why am I seeing this?" information from facebook that explains why a particular ad was targeted to you',
        },
        facebook_show_collection_status_label: {
          message: 'Show Collection Status',
        },
        facebook_show_collection_status_hintText: {
          message: 'If on this will tag your facebook post with collection info.',
        },

        // Terms page.
        terms_0: {
          message: 'I accept these terms and conditions',
        },
        terms_1: {
          message: 'I accept the updated terms and conditions',
        },
        terms_2: {
          message: 'You need to accept the above terms and conditions before you can use the browser extension.',
        },
        terms_3: {
          message: 'The above terms and conditions have been updated since you last agreed to them.',
        },
        terms_4: {
          message: 'You accepted the above terms and conditions.',
        },
        terms_5: {
          message: 'Terms of Use'
        },
        terms_html: {
          message: `<style>
  p,h1,h4,h3,ul{
             margin: 2vmax;
  }
  p {
  line-height: 1; margin-top: 0pt; margin-bottom: 8pt;
  }
  h4 {
  line-height: 1; margin-top: 2pt; margin-bottom: 0pt;
  }
  p span, h4 span {
  font-size:11pt;font-family:Arial;color:#3c434e;background-color:transparent;font-weight:400;
  font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;
  }
</style>

<h4 style="margin-bottom: 12pt;">Thank you for installing Ad Observer and helping us monitor online political ads.</h4>
<p><span style="font-style:normal;">These Terms of Use form a legal agreement between you, the end user (“user” or “you”) and New York University (“NYU”, “us” or “we”), for the limited license to use the Ad Observer application, which includes a web browser extension, computer software and electronic documentation (“the Application” or “Ad Observer”).</span></p>
<h4><span style="font-style:italic;">Ownership and distribution</span></h4>
<p><span style="font-style:normal;">The Application is owned and copyrighted by NYU. NYU grants you a limited, worldwide, non-exclusive, royalty-free, revocable, and non-commercial license to download and use Ad Observer. Your license to download and use the Application confers no title or ownership in the Application and should not be construed as a sale of any right in the Application.</span></p>
<p><span style="font-style:normal;">Ad Observer may be freely distributed subject, but not limited to the following terms:</span></p>
  <ul><li>Unless you have the express written consent of NYU, you may not distribute the Application or any portion thereof to any third parties;</li><li>If the user would like to distribute the Application they will need to contact NYU at developers@adobserver.org for written consent prior to distribution;</li><li>The user may not sell or re-sell the Application;</li><li>The user must not distribute the Application as part of any commercial package;</li><li>The user must not use or distribute the Application in support of a commercial service;</li><li>The user must not use or distribute the Application to support any kind of profit generating activity, even if it is being distributed freely.</li></ul>
<h4><span style="font-style:italic;">User conduct</span></h4>
<p><span style="font-style:normal;">The user is strictly prohibited from, and agrees not to adapt, edit, change, modify, transform, publish, republish, distribute, or redistribute the Application or any elements, portions, or parts thereof without NYU’s prior written consent. You agree not to use any automated data collection methods, data mining, robots, scraping or any data gathering methods of any kind on the Application.&nbsp;</span></p>
<h4><span style="font-style:italic;">Copyright</span></h4>
<p><span style="font-style:normal;">The Application and all rights, without limitation including proprietary rights therein, are owned by NYU and protected by copyright laws and international copyright treaties, as well as other intellectual property laws and treaties. The Application is licensed, not sold. You acknowledge that no title to the intellectual property in the Application is transferred to you. You further acknowledge that title and full ownership rights to the Application will remain the exclusive property of NYU and you will not acquire any rights to the Application except as expressly set forth in this license. You agree that any copies of the Application will contain the same proprietary notices which appear on and in the Application. NYU may bring legal proceedings against individuals who contravene these Terms of Use, including to enforce its copyrights to Ad Observer.&nbsp;</span></p>
<h4><span style="font-style:italic;">Warranties</span></h4>
<p><span style="font-style:normal;">Ad Observer is provided to the user “AS IS” with no warranties for use or performance and NYU disclaims any warranty or liability obligations to the user of any kind, whether expressed or implied. Where legislation implies in this agreement any condition or warranty, and that legislation avoids or prohibits provisions in an agreement excluding or modifying application of or exercise of liability under such condition or warranty, the condition or warranty will be deemed to be included in this agreement.</span></p>
<h4><span style="font-style:italic;">Limitation of Liability</span></h4>
<p><span style="font-style:normal;">NYU is not subject to, and the user releases NYU from any additional liability and indemnifies them against any claim, action, suit or proceeding (including but not limited to direct, indirect, consequential loss or damage, removal costs or re-installation costs or liability for loss of use or profit) because of the use of or inability to use the Application or the provision of or failure to provide support services, any delay in delivery or fault or defect in the Application even if NYU has been advised of the possibility of such damages. NYU‘s entire liability under this agreement shall be limited to the amount paid by the user for the Application. The user further indemnifies NYU against any claim, action suit or proceedings brought by any web site provider or any copyright holder in respect of the operation of the Application by the user. The user expressly acknowledges and agrees that it has not relied upon, and NYU is not liable for any advice given by NYU, its servants, agents, representatives or employees in relation to the suitability for any purpose of the Application.</span></p>
<h4><span style="font-style:italic;">Third Party Copyright Infringement</span></h4>
<p><span style="font-style:normal;">NYU does not condone the violation of copyright and other laws. NYU requires all users to Use the Application in strict compliance with copyright and other laws. NYU does not, by the supply of the Application, authorize or encourage you to infringe the copyright or other rights of third parties.</span></p>
<h4><span style="font-style:italic;">Indemnification</span></h4>
<p><span style="font-style:normal;">In connection with your user of Ad Observer and to the extent permitted by applicable law, you agree to defend, indemnify, and hold harmless NYU and its directors, officers, employees, and consultants, from and against any claim or demand (including reasonable attorney fees) arising from and of (a) your use of the Application; (b) any violation of these Terms of Use by you; (c ) any allegation that your use of the Application infringes or violates the copyright, trademark, trade secret or other intellectual property or rights of any third party.&nbsp;</span></p>
<h4><span style="font-style:italic;">Your Information</span></h4>
<p><span style="font-style:normal;">By installing the Application you acknowledge that you have reviewed and agree to the Ad Observer Privacy Policy that describes and governs the Application’s information gathering practices. A copy of Ad Observer’s Privacy Policy is available&nbsp;</span>
  <a href="https://adobserver.org/privacy-policy/" rel="noopener noreferrer" target="_blank"><span style="font-style:normal;">here</span></a><span style="font-style:normal;">. Ad Observer reserves the right to change the provisions of its Privacy Policy from time to time and if it does so, Ad Observer will post any changes to its Privacy Policy at the web address provided.</span></p>
<h4><span style="font-style:italic;">General Provisions</span></h4>
<p><span style="font-style:normal;">This is the entire agreement between you and NYU governing your use of Ad Observer, which supersedes any prior agreement or understanding, whether written, or oral, relating to the subject matter of these Terms of Use. If any part of these Terms of Use is found void and unenforceable, it will not affect the validity of the balance of the agreement, which shall remain valid and enforceable according to its terms. These Terms of Use shall automatically terminate upon failure by you to comply with its terms. NYU in its sole discretion, may modify these Terms of Use in writing at any time.</span></p>
<h4><span style="font-style:italic;">Termination</span></h4>
<p><span style="font-style:normal;">You may terminate these Terms of Use at any time by uninstalling Ad Observer. Your right to use Ad Observer may also be terminated by NYU at any time, without cause and without notice. This agreement will automatically terminate if you fail to comply with any of its terms. Upon termination, you agree to stop using and to uninstall Ad Observer.&nbsp;</span></p>
<h4><span style="font-style:italic;">Changes in these Terms of Use</span></h4>
<p><span style="font-style:normal;">NYU reserves the right to update these Terms of Use from time to time. Since your use of the Application is anonymous, we cannot inform you about this personally. The most current version of the Terms of Use can be reviewed </span>
    <a href="https://adobserver.org/terms-of-use/"><span style="font-style:normal;">here</span></a><span style="font-style:normal;">.</span></p>`,
        },

        nav_0: {
          message: 'My Archive',
        },
        nav_1: {
          message: 'Privacy Policy',
        },
        nav_2: {
          message: 'Terms & Conditions',
        },
        nav_3: {
          message: 'About',
        },
        nav_4: {
          message: 'Preferences'
        },

        about_0: {
          message: 'About the'
        },
        about_html: {
          message: `
            <p>
              Ad Observer is an initiative to empower citizens to
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
              Institute, NYU, Quartz, and the University of Grenoble
            </p>
            <p>
              For more information about the project, please visit:&nbsp;
              <a href="https://adobserver.org">adobserver.org</a>.
            </p>`,
        },

        prefs_0: {
          message: 'Sharing Preferences',
        },
        prefs_1: {
          message: `You have control over what you share with this project. To change what data you wish to share, check or uncheck the box to enable or disable sharing that type of data.`,
        },

        prefs_2: {
          message: 'General Preferences',
        },
        prefs_3: {
          message: 'These settings apply to all data shared by the extension',
        },

        prefs_4: {
          message: 'Facebook Preferences',
        },
        prefs_5: {
          message: 'These options control what data you share from your Facebook feed',
        },

        prefs_6: {
          message: 'YouTube Preferences',
        },
        prefs_7: {
          message: 'These options control what data you share when you are using YouTube',
        },

        prefs_8: {
          message: 'Your Settings',
        },
        prefs_9: {
          message: "Setting your language and location help us ensure we're handling your data responsibly and analyzing it correctly.",
        },

        prefs_10: {
          message: 'Your Country',
        },
        prefs_11: {
          message: 'Your Language',
        },
        prefs_12: {
          message: 'Age',
        },
        prefs_13: {
          message: 'Gender'
        },

        privacy_0: {
          message: 'Privacy'
        },
        privacy_html: {
          message: `<p><strong>Privacy policy &ndash; Ad Observer</strong></p>
<p><br />July, 2021</p>
<p>This Privacy Policy (&ldquo;the Policy&rdquo;) explains how and why New York University (&ldquo;NYU&rdquo;) processes personal data when people install Ad Observer (&ldquo;the Application&rdquo;).</p>
<p>The Policy does not cover any other personal data processing by NYU, which is covered by other applicable policies and procedures, including <a href="https://www.nyu.edu/footer/copyright-and-fair-use/digital-privacy-statement.html">NYU&rsquo;s Digital Privacy Statement</a>.&nbsp;</p>
<p>If you have a question regarding the Policy or the use of the Application, please contact <a href="mailto:developers@adobserver.org">developers@adobserver.org</a>. <br /><br /></p>
<p><strong>Data controller&nbsp;</strong></p>
<p>NYU is the controller of the data covered by the Policy. You can contact NYU&rsquo;s Data Protection Officer with any questions about this notice, our data collection practices, or your rights. You can reach NYU&rsquo;s Data Protection Officer, Peter Christensen, at:</p>
<p>Peter Christensen</p>
<p>c/o Data Protection Officer&rsquo;s Office</p>
<p>70 Washington Square South</p>
<p>Room 1201</p>
<p>New York, NY 10012</p>
<p>+1 212 992 7256</p>
<p><strong>Guiding principles</strong></p>
<p>NYU is committed to respecting individuals&rsquo; right to privacy, protecting personal data and compliance with applicable laws globally. In accordance with these guiding principles, the Application has been designed to process the minimum amount of personal data possible to achieve NYU&rsquo;s objectives.&nbsp;</p>
<p><strong>Purposes and means of data processing</strong></p>
<p>The purpose of the Application is to collect information about the political ads directed at and seen by private individuals on Facebook &amp; YouTube. This is done with the objective of facilitating public understanding of how political advertising is deployed. NYU believes that it is in the public interest to understand this phenomenon and its impact on democracy.&nbsp;</p>
<p><br />To this end, NYU collects basic demographic information about the individuals who install the Application as well as information about the ads that they see. This information has been kept to an absolute minimum, so that it is not possible for NYU to identify individual users of the Application.</p>
<p>NYU also maintains a public, online repository of aggregate data (&ldquo;the Database&rdquo;) collected by the Application in order to render its research findings transparent and facilitate research by others. This information is anonymised so that it is not possible to identify individual users of the Application from within the Database. The Database can be accessed via [link].</p>
<p><strong>Data processed by the Application&nbsp;</strong></p>
<p>When an individual user installs the Application, they are invited to provide basic demographic information about themselves: their age group, gender and ethnicity. This basic demographic profile (&ldquo;the Profile&rdquo;) helps NYU understand which people see which ads. It is not mandatory to provide this information and the Application can still collect data that contributes to the research project without creating a Profile.&nbsp;</p>
<p>No other personally identifiable information is requested or processed by NYU. The browser language, which is recorded by the Application for the purposes of correctly parsing the ads, is also included in the Profile. The Application does not undertake any &ldquo;profiling&rdquo; or &ldquo;automated decision-making&rdquo; as defined by the GDPR.&nbsp;</p>
<p>If the user has decided not to create or share a Profile, only the data related to the ads is transmitted to and included in the Database. All users can view the data related to the ads that has been processed by the Application at any time by clicking on the Ad Observer icon and navigating to &lsquo;My Archive&rsquo;.&nbsp;</p>
<p>The Application will collect and transmit to NYU the ad creative data for each ad displayed to the user. If the user has the 'Collect Ad Targeting Data' setting turned on, the Application will also cause the user's browser to request the targeting data (i.e., the data shown to the user when the user clicks on the Why Am I Seeing This? button) associated with each ad shown to the user.</p>
<p><br /><br /></p>
<p><strong>Legal basis for processing</strong></p>
<p>NYU processes data for the above purposes on the basis of consent. By installing the Application, users consent to the processing of their data for the purposes described above. Individuals may withdraw their consent at any time by uninstalling the Application.&nbsp;</p>
<p><br />As noted above, data retained in the Database is anonymized, meaning that a user&rsquo;s withdrawal of consent will not mean the deletion of the data related to the ads that the Application has collected.&nbsp;</p>
<p><strong>&ldquo;Sensitive data&rdquo;&nbsp;</strong></p>
<p><br />As noted above, individuals may elect to provide information about their ethnicity when they install the Application. This data, which may fall within the definition of &ldquo;special category data&rdquo; under the GDPR, is processed with consent. As noted above, this data is not stored by NYU in a format that allows identification of the individual concerned. No other sensitive data is requested or processed by NYU.&nbsp;</p>
<p><strong>Information security</strong></p>
<p>NYU takes reasonable steps to protect personal data against loss, misuse, and unauthorized access, alteration, disclosure or destruction. This includes the use of technical, organisational and legal measures to ensure the confidentiality, integrity and availability of personal data.&nbsp;</p>
<p>Information transmitted across the internet remains vulnerable to unauthorised access. The transmission of such data is therefore at the individual&rsquo;s own risk. See further [link to ToU]</p>
<p><strong>Data retention&nbsp;</strong></p>
<p>No personal data is retained by NYU. The only data that is retained has been fully and irreversibly anonymised.</p>
<p><strong>Data Subjects Rights</strong></p>
<p>Individuals whose personal data is processed in accordance with the GDPR have the following rights:</p>
<ul>
<li>The right to be informed as to whether NYU holds data about them</li>
<li>The right of access to that information</li>
<li>The right to have inaccurate data corrected</li>
<li>The right to have their data deleted</li>
<li>The right to opt-out of particular data processing operations</li>
<li>The right to receive their data in a form that makes it &ldquo;portable&rdquo;</li>
<li>The right to object to data processing</li>
<li>The right to receive an explanation about any automated decision making and/or profiling, and to challenge those decisions where appropriate</li>
</ul>
<p>Individuals wishing to exercise their rights in respect of the Application can do so by contacting NYU&rsquo;s Data Protection Officer&rsquo;s Office using the contact details provided above.&nbsp;</p>
<p>Data subjects covered by EU law may also be entitled to lodge complaints in regard to data processing or the handling of subject access requests with data protection supervisory authority in their country of residence. Relevant supervisory authority names and contact details are listed <a href="https://ec.europa.eu/newsroom/article29/item-detail.cfm?item_id=612080">here</a>.&nbsp;</p>
<p><strong>Changes and revisions</strong></p>
<p>Should NYU make changes to this Policy, the date and nature of the change will be indicated below.</p>
<p>July, 2021: Clarified description of ad targeting collection</p>`,
        },

        gender_0: {
          message: 'Male',
        },
        gender_1: {
          message: 'Female',
        },
        gender_2: {
          message: 'Other',
        },
        gender_3: {
          message: 'Prefer not to say'
        },

        archive_0: {
          message: 'My Archive',
        },
        archive_1: {
          message: 'You have nothing in your archive.'
        },

        prefselector_0: {
          message: 'Choose'
        }
      }),
    ]
  }
};

const locale_de = (data, copyAssetFolder) => {
  const { plugins, ...base } = generic(data, '_locales/de', ['regenerator-runtime/runtime', './_locales/de']);

  return {
    ...base,
    plugins: [
      ...plugins,
      new GenerateJsonPlugin('messages.json', {
        "appName": {
          "message": "Ad Observer",
        },
        "appDesc": {
          "message": "Das Plugin meldet uns die Werbungen, die Sie auf Facebook oder YouTube sehen.",
        },

        // Preferences page.
        youtube_share_ad_targeting_label: {
          message: 'Zielgruppeninformationen der Werbung teilen',
        },
        youtube_share_ad_targeting_hintText: {
          message: 'Dies erlaubt dem Programm die Erklärungen von YouTube zu sammeln, warum Sie eine Bestimmte Werbung sehen.',
        },
        youtube_share_ads_label: {
          message: 'Werbung teilen',
        },
        youtube_share_ads_hintText: {
          message: 'Dies erlaubt Ad Observer das Teilen der verschiedenen Arten von Werbungen, die ihnen gezeigt werden.',
        },
        youtube_share_recommended_videos_label: {
          message: 'Empfehlungen teilen',
        },
        youtube_share_recommended_videos_hintText: {
          message: 'Dies ermöglicht dem Programm zu sehen, welche Videos Ihnen empfohlen werden.',
        },
        youtube_share_watched_videos_label: {
          message: 'Gesehene Videos teilen',
        },
        youtube_share_watched_videos_hintText: {
          message: 'Dies ermöglicht dem Programm die von Ihnen angeschauten Videos auf Youtube zu sehen. Häufig sind zielgerichtete Werbungen mit bestimmten Videos oder Kanälen verbunden. Dies wäre also eine große Hilfe für dieses Forschungsprojekt',
        },
        user_share_country_label: {
          message: 'Land',
        },
        user_share_country_hintText: {
          message: 'Sie teilen uns mit, in welchem Land Sie leben.',
        },
        user_share_language_label: {
          message: 'Sprache',
        },
        user_share_language_hintText: {
          message: 'Sie teilen uns mit, welche Sprache Sie sprechen.',
        },
        user_share_gender_label: {
          message: 'Geschlecht',
        },
        user_share_gender_hintText: {
          message: 'Sie teilen uns Ihr Geschlecht mit.',
        },
        user_share_age_label: {
          message: 'Alter',
        },
        user_share_age_hintText: {
          message: 'Sie teilen uns Ihr Alter mit.',
        },
        user_share_diagnostic_data_label: {
          message: 'Diagnose-Daten',
        },
        user_share_diagnostic_data_hintText: {
          message: 'Falls Fehler auftreten, können Sie uns zusätzliche Daten schicken, um uns beim Lösen des Problems zu helfen.',
        },
        show_debug_data_label: {
          message: 'Debug-Informationen anzeigen',
        },
        show_debug_data_hintText: {
          message: 'Debug-Informationen werden angezeigt',
        },
        facebook_share_sponsored_posts_label: {
          message: 'Facebook-Werbungen teilen',
        },
        facebook_share_sponsored_posts_hintText: {
          message: 'Dies erlaubt dem Programm alle Werbungen zu sammeln, die Ihnen angezeigt werden.',
        },
        facebook_share_ad_targeting_label: {
          message: 'Zielgruppendaten teilen',
        },
        facebook_share_ad_targeting_hintText: {
          message: 'Dies erlaubt uns, die „Warum wird mir das angezeigt“-Informationen von Facebook zu sammeln. Dies sind Informationen darüber, warum Ihnen bestimmte Werbung gezielt gezeigt wird.',
        },
        facebook_show_collection_status_label: {
          message: 'Sammlungsstatus anzeigen',
        },
        facebook_show_collection_status_hintText: {
          message: 'Diese Option zeigt zu Ihren Facebook-Posts die jeweils gesammelten Informationen an.',
        },


        terms_0: {
          message: 'Ich akzeptiere diese Nutzungsbedingungen.',
        },
        terms_1: {
          message: 'I accept the updated terms and conditions',
        },
        terms_2: {
          message: 'Sie müssen die oben genannten Nutzungsbedingungen akzeptieren, um die Browser-Erweiterung nutzen zu können.',
        },
        terms_3: {
          message: 'The above terms and conditions have been updated since you last agreed to them.',
        },
        terms_4: {
          message: 'Sie haben die oben genannten Bedingungen akzeptiert.',
        },
        terms_5: {
          message: 'Nutzungsbedingungen'
        },
        terms_html: {
          message: `<style>
  p,h1,h4,h3,ul{
             margin: 2vmax;
  }
  p {
  line-height: 1; margin-top: 0pt; margin-bottom: 8pt;
  }
  h4 {
  line-height: 1; margin-top: 2pt; margin-bottom: 0pt;
  }
  p span, h4 span {
  font-size:11pt;font-family:Arial;color:#3c434e;background-color:transparent;font-weight:400;
  font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;
  }
</style>

<h4 style="margin-bottom: 12pt;">Danke, dass Sie Ad Observer installiert haben und uns dabei helfen, politische Online-Anzeigen zu beaufsichtigen.</h4>
<p><span style="font-style:normal;">Diese Nutzungsbedingungen bilden eine rechtliche Vereinbarung zwischen Ihnen, dem Endnutzer („Nutzer” oder „Sie”) und der New York University („NYU”, „uns” oder „wir”) für die beschränkte Lizenz zur Nutzung der Ad Observer-Anwendung, die eine Webbrowser-Erweiterung, Computersoftware und elektronische Dokumentation („die Anwendung” oder „Ad Observer”) umfasst.</span></p>

<h4><span style="font-style:italic;">Eigentum und Vertrieb</span></h4>
<p><span style="font-style:normal;">Die Anwendung ist Eigentum und urheberrechtlich geschützt durch NYU. NYU gewährt Ihnen eine begrenzte, weltweite, nicht ausschließliche, gebührenfreie, widerrufliche und nicht kommerzielle Lizenz zum Herunterladen und Verwenden von Ad Observer. Ihre Lizenz zum Herunterladen und zur Nutzung der Anwendung überträgt keinen Titel und kein Eigentum an der Anwendung und ist nicht als Verkauf von Rechten an der Anwendung auszulegen.</span></p>
<p><span style="font-style:normal;">Ad Observer kann frei verteilt werden, vorbehaltlich, aber nicht beschränkt auf die folgenden Bedingungen:</span></p>
  <ul>
    <li>Ohne die ausdrückliche schriftliche Zustimmung der NYU dürfen Sie die Anwendung oder Teile davon nicht an Dritte weitergeben;</li>
    <li>wenn der Nutzer die Anwendung weitergeben möchte, muss er sich mit der NYU unter developers@adobserver.org in Verbindung setzen, um vor der Weitergabe eine schriftliche Genehmigung einzuholen;</li>
    <li>der Nutzer darf die Anwendung nicht verkaufen oder weiterverkaufen;</li>
    <li>der Nutzer darf die Anwendung nicht als Teil eines kommerziellen Pakets weitergeben;</li>
    <li>der Nutzer darf die Anwendung nicht zur Unterstützung eines kommerziellen Dienstes verwenden oder verteilen;</li>
    <li>Der Nutzer darf die Anwendung nicht verwenden oder verteilen, um jede Art von Gewinn generierenden Aktivitäten zu unterstützen, selbst wenn sie frei verteilt wird.</li>
  </ul>

<h4><span style="font-style:italic;">Nutzerverhalten</span></h4>
<p><span style="font-style:normal;">Es ist dem Nutzer strengstens untersagt und er erklärt sich damit einverstanden, die Anwendung oder jegliche Elemente, Teile oder Abschnitte davon, ohne die vorherige schriftliche Zustimmung von NYU nicht anzupassen, zu bearbeiten, zu ändern, zu modifizieren, zu transformieren, zu veröffentlichen, neu zu veröffentlichen, zu verteilen oder weiterzugeben. Sie erklären sich damit einverstanden, keine automatisierten Datenerfassungsmethoden, Data Mining, Roboter, Scraping oder andere Datenerfassungsmethoden jeglicher Art in der Anwendung zu verwenden.</span></p>

<h4><span style="font-style:italic;">Urheberrecht</span></h4>
<p><span style="font-style:normal;">Die Anwendung und alle Rechte, insbesondere die Eigentumsrechte daran, sind Eigentum der NYU und durch Urheberrechtsgesetze und internationale Urheberrechtsverträge sowie andere Gesetze und Verträge über geistiges Eigentum geschützt. Die Anwendung wird lizenziert, nicht verkauft. Sie erkennen an, dass kein Eigentumsrecht an dem geistigen Eigentum der Anwendung auf Sie übertragen wird. Sie erkennen weiterhin an, dass der Titel und die vollen Eigentumsrechte an der Anwendung das ausschließliche Eigentum der NYU bleiben und Sie keine Rechte an der Anwendung erwerben, außer wie ausdrücklich in dieser Lizenz festgelegt. Sie erklären sich damit einverstanden, dass alle Kopien der Anwendung die gleichen Eigentumshinweise enthalten, die auf und in der Anwendung erscheinen. NYU kann seine Ansprüche gegenüber Personen gerichtlich geltend machen, die gegen diese Nutzungsbedingungen verstoßen, einschließlich der Durchsetzung seiner Urheberrechte an Ad Observer.</span></p>

<h4><span style="font-style:italic;">Garantien</span></h4>
<p><span style="font-style:normal;">Ad Observer wird dem Nutzer „WIE BESEHEN” zur Verfügung gestellt, ohne Garantien für die Nutzung oder Leistung und NYU lehnt jegliche Garantie- oder Haftungsverpflichtungen gegenüber dem Nutzer jeglicher Art ab, ob ausdrücklich oder stillschweigend. Wo die Gesetzgebung in dieser Vereinbarung eine Bedingung oder Garantie einschließt und diese Gesetzgebung Bestimmungen in einer Vereinbarung ausschließt oder verbietet, die die Anwendung oder Ausübung der Haftung unter einer solchen Bedingung oder Garantie ausschließt oder verändert, wird die Bedingung oder Garantie als in dieser Vereinbarung enthalten betrachtet.</span></p>

<h4><span style="font-style:italic;">Beschränkung der Haftung</span></h4>
<p><span style="font-style:normal;">NYU unterliegt nicht, und der Nutzer stellt NYU von jeglicher zusätzlichen Haftung frei und entschädigt NYU gegen jegliche Ansprüche, Klagen, Prozesse oder Verfahren (insbesondere unmittelbare, mittelbare oder Folgeschäden, Kosten für die Entfernung oder Neuinstallation oder Haftung für entgangene Nutzung oder entgangenen Gewinn) aufgrund der Nutzung oder Unmöglichkeit der Nutzung der Anwendung oder der Bereitstellung oder Nichterbringung von Support-Services, jede Verzögerung bei der Lieferung oder Fehler oder Defekt in der Anwendung, auch wenn NYU über die Möglichkeit solcher Schäden informiert wurde. Die gesamte Haftung von NYU im Rahmen dieser Vereinbarung ist auf den Betrag beschränkt, den der Nutzer für die Anwendung bezahlt hat. Der Nutzer hält NYU ferner von allen Ansprüchen, Klagen oder Verfahren schadlos, die von einem Anbieter von Websites oder einem Inhaber von Urheberrechten in Bezug auf den Betrieb der Anwendung durch den Nutzer erhoben werden. Der Nutzer erkennt ausdrücklich an und erklärt sich damit einverstanden, dass er sich nicht auf NYU verlassen hat, und NYU haftet nicht für Ratschläge, die NYU, ihre Bediensteten, Vertreter oder Mitarbeiter in Bezug auf die Eignung für einen beliebigen Zweck der Anwendung gegeben haben.</span></p>

<h4><span style="font-style:italic;">Copyright-Verletzung durch Dritte</span></h4>
<p><span style="font-style:normal;">NYU duldet nicht die Verletzung des Urheberrechts und anderer Gesetze. NYU verlangt von allen Nutzern, dass sie die Anwendung unter strikter Einhaltung des Urheberrechts und anderer Gesetze nutzen. Die NYU ermächtigt oder ermutigt Sie nicht durch die Bereitstellung der Anwendung, das Urheberrecht oder andere Rechte Dritter zu verletzen.</span></p>

<h4><span style="font-style:italic;">Haftungsfreistellung</span></h4>
<p><span style="font-style:normal;">In Verbindung mit Ihrer Nutzung von Ad Observer und soweit nach geltendem Recht zulässig, erklären Sie sich damit einverstanden, NYU und ihre Direktoren, leitenden Angestellten, Mitarbeiter und Berater zu verteidigen, freizustellen und schadlos zu halten von und gegen jegliche Ansprüche oder Forderungen (einschließlich angemessener Anwaltskosten), die sich ergeben aus (a) Ihrer Nutzung der Anwendung; (b) jeglicher Verletzung dieser Nutzungsbedingungen durch Sie; (c) jeglicher Behauptung, dass Ihre Nutzung der Anwendung das Urheberrecht, das Markenrecht, das Geschäftsgeheimnis oder sonstiges geistiges Eigentum oder Rechte Dritter verletzt oder dagegen verstößt.</span></p>

<h4><span style="font-style:italic;">Ihre Informationen</span></h4>
<p><span style="font-style:normal;">Durch die Installation der Anwendung erkennen Sie an, dass Sie die Datenschutzrichtlinie von Ad Observer, die die Praktiken zur Erhebung von Informationen der Anwendung beschreibt und regelt, überprüft haben und ihr zustimmen. Eine Kopie der Datenschutzrichtlinie von Ad Observer ist verfügbar unter <a href="https://adobserver.org/privacy-policy/" rel="noopener noreferrer" target="_blank"><span style="font-style:normal;">hier</span></a><span style="font-style:normal;">. Ad Observer behält sich das Recht vor, die Bestimmungen seiner Datenschutzrichtlinie von Zeit zu Zeit zu ändern, und wenn dies der Fall ist, wird Ad Observer alle Änderungen an seiner Datenschutzrichtlinie unter der angegebenen Webadresse veröffentlichen.
  </span></p>

<h4><span style="font-style:italic;">Allgemeine Bestimmungen</span></h4>
<p><span style="font-style:normal;">Dies ist die gesamte Vereinbarung zwischen Ihnen und der NYU, die Ihre Nutzung von Ad Observer regelt, und die jegliche vorherige Vereinbarung oder Absprache, ob schriftlich oder mündlich, in Bezug auf die vertraglichen Nutzungsbedingungen ersetzt. Sollte ein Teil dieser Nutzungsbedingungen für nichtig und nicht durchsetzbar befunden werden, hat dies keinen Einfluss auf die Gültigkeit des Rests der Vereinbarung, der gemäß seiner Bedingungen gültig und durchsetzbar bleibt. Diese Nutzungsbedingungen treten automatisch außer Kraft, wenn Sie die Bedingungen nicht einhalten. Die NYU kann diese Nutzungsbedingungen nach eigenem Ermessen jederzeit schriftlich ändern.</span></p>

<h4><span style="font-style:italic;">Kündigung</span></h4>
<p><span style="font-style:normal;">Sie können diese Nutzungsbedingungen jederzeit kündigen, indem Sie Ad Observer deinstallieren. Ihr Recht, Ad Observer zu nutzen, kann auch von NYU jederzeit, ohne Grund und ohne Vorankündigung beendet werden. Diese Vereinbarung endet automatisch, wenn Sie eine ihrer Bedingungen nicht einhalten. Sie stimmen zu, nach der Kündigung Ad Observer nicht mehr zu benutzen und zu deinstallieren.</span></p>

<h4><span style="font-style:italic;">Änderungen in diesen Nutzungsbedingungen</span></h4>
<p><span style="font-style:normal;">NYU behält sich das Recht vor, diese Nutzungsbedingungen von Zeit zu Zeit zu aktualisieren. Da Ihre Nutzung der Anwendung anonym erfolgt, können wir Sie nicht persönlich darüber informieren. Die aktuelle Version der Nutzungsbedingungen kann unter</span>
  <a href="https://adobserver.org/terms-of-use/"><span style="font-style:normal;">eingesehen werden</span></a><span style="font-style:normal;">.</span></p>`
        },

        nav_0: {
          message: 'Mein Archiv',
        },
        nav_1: {
          message: 'Datenschutzrichtlinie',
        },
        nav_2: {
          message: 'Nutzungsbedingungen',
        },
        nav_3: {
          message: 'Über',
        },
        nav_4: {
          message: 'Einstellungen'
        },


        about_0: {
          message: 'Über'
        },
        about_html: {
          message: `<p>
            Ad Observer nutzt die freiwillig geteilten Online-Daten der Nutzer für wissenschaftliche Forschung und investigativen Journalismus. Wir möchten die Frage beantworten, wie die Social-Media-Plattformen die Gesellschaft beeinflussen.
          </p>
          <p>
            Das Hauptwerkzeug des Projekts ist eine Browser-Erweiterung, die Inhalte, Werbungen Empfehlungen und Zielgruppeninformationen im Internet sammelt. Diese Daten werden anonymisiert und in einer zentralen Datenbank gesammelt, um sie zu analysieren. Die Daten werden für Forscher, Journalisten und die allgemeine Öffentlichkeit zusammengefasst. Es handelt sich dabei allein un eine nicht-kommerzielle-Nutzung, um zu untersuchen, wie sich Online-Inhalte verbreiten, welchen Gruppen von Nutzern gezielt welche Werbungen gezeigt wird und welche Nachrichten benutzt werden, um die Öffentlichkeit zu überzeugen.
          </p>
          <p>
            Dieses Projekt baut auf vielen früheren Untersuchungen auf. Dazu gehören unter anderem ProPublica Facebook Political Ad Collector (und der TGAM FB Political Ad Collector), Who Targets Me und Ad Analyst.
          </p>
          <p>
            Ziele der Initiative sind das Sammeln von Daten über mehrere Plattformen hinweg und eine bessere Transparenz über die Algorithmen, die unser Leben bestimmen.
          </p>
          <p>
            Das Projekt ist eine Zusammenarbeit von: The Algorithmic Transparency Institute, der New York University, Quartz und der University of Grenoble.
          </p>
          <p>
            Für weitere Informationen über dieses Projekt besuchen Sie bitte:&nbsp;
            <a href="https://adobserver.org">adobserver.org</a>.
          </p>`,
        },

        prefs_0: {
          message: 'Einstellungen Teilen',
        },
        prefs_1: {
          message: 'Sie haben die Kontrolle darüber, welche Informationen Sie mit diesem Projekt teilen. Um zu ändern, welche Daten Sie teilen möchten, füllen Sie einfach die Kästchen aus.',
        },
        prefs_2: {
          message: 'Allgemeine Präferenzen',
        },
        prefs_3: {
          message: 'Diese Einstellungen betreffen alle mit Ad Observer geteilten Daten.',
        },
        prefs_4: {
          message: 'Einstellungen für Facebook',
        },
        prefs_5: {
          message: 'Diese Optionen kontrollieren, welche Facebook-Daten Sie mit uns teilen.',
        },
        prefs_6: {
          message: 'Einstellungen für YouTube',
        },
        prefs_7: {
          message: 'Diese Optionen kontrollieren, welche Youtube-Daten Sie mit uns teilen wollen',
        },
        prefs_8: {
          message: 'Ihre Einstellungen',
        },
        prefs_9: {
          message: 'Die Einstellung Ihrer Sprache und Ihres Landes hilft uns dabei, mit ihren Daten verantwortungsvoll im Rahmen der jeweiligen Gesetze umzugehen, sowie bei der korrekten Durchführung der Analysen.'
        },

        prefs_10: {
          message: 'Dein Land',
        },
        prefs_11: {
          message: 'Ihre Sprache',
        },
        prefs_12: {
          message: 'Alter',
        },
        prefs_13: {
          message: 'Geschlecht'
        },

        privacy_0: {
          message: 'Datenschutzrichtlinie'
        },
        privacy_html: {
          message: `
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Diese Datenschutzrichtlinie („die Richtlinie“) erläutert, wie und warum die New York University („NYU“) personenbezogene Daten verarbeitet, wenn Personen Ad Observer („die Anwendung“) installieren.</span></p>
<br>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;">
<span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Die Richtlinie deckt keine andere Verarbeitung personenbezogener Daten durch NYU ab, die durch andere anwendbare Richtlinien und Verfahren, einschließlich der</span>

  <a href="https://www.nyu.edu/footer/copyright-and-fair-use/digital-privacy-statement.html" style="text-decoration:none;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#0000ff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">digitalen Datenschutzerklärung von NYU</span></a><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">, abgedeckt ist.&nbsp;</span></p>
  <br>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Wenn Sie Fragen zur Richtlinie oder zur Nutzung der Anwendung haben, wenden Sie sich bitte an&nbsp;</span>
  <a href="mailto:developers@adobserver.org" style="text-decoration:none;"><span style="font-size: 11pt; font-family: Calibri, sans-serif; color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: underline; text-decoration-skip-ink: none; vertical-align: baseline; white-space: pre-wrap;">developers@adobserver.org</span></a><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">. &nbsp;&nbsp;</span><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">
    <br>
    <br>
  </span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Verantwortlicher&nbsp;</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">NYU ist der Verantwortliche für die Daten, die von der Richtlinie abgedeckt werden. Sie können sich bei Fragen zu dieser Mitteilung, unseren Praktiken zur Datenerfassung oder Ihren Rechten an den Datenschutzbeauftragten von NYU wenden. Sie können den Datenschutzbeauftragten der NYU, Peter Christensen, erreichen unter:</span></p>
<p style="line-height: 1;">
  <br>
</p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Peter Christensen</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">c/o Data Protection Officer’s Office</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">70 Washington Square South</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Room 1201</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">New York, NY 10012</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">+1 212 992 7256</span></p>
<p style="line-height: 1;">
  <br>
</p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Leitprinzipien</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Die NYU verpflichtet sich, das Recht des Einzelnen auf Privatsphäre zu respektieren, personenbezogene Daten zu schützen und die geltenden Gesetze weltweit einzuhalten. In Übereinstimmung mit diesen Leitprinzipien wurde die Anwendung so konzipiert, dass so wenig personenbezogene Daten wie möglich verarbeitet werden, um die Ziele der NYU zu erreichen.</span></p>
<p style="line-height: 1;">
  <br>
</p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Zwecke und Mittel der Datenverarbeitung</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Der Zweck der Anwendung besteht darin, Informationen über die an Privatpersonen gerichteten und von ihnen gesehenen politischen Anzeigen auf Facebook und YouTube zu erheben. Dies geschieht mit dem Ziel, der Öffentlichkeit das Verständnis dafür zu erleichtern, wie politische Werbung eingesetzt wird. NYU ist der Auffassung, dass es im öffentlichen Interesse liegt, dieses Phänomen und seine Auswirkungen auf die Demokratie zu verstehen.</span><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">
    <br>
  </span><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Zu diesem Zweck erhebt die NYU grundlegende demografische Informationen über die Personen, die die Anwendung installieren, sowie Informationen über die Anzeigen, die sie sehen. Diese Informationen wurden auf ein absolutes Minimum beschränkt, so dass&nbsp;</span><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">es für NYU nicht möglich ist, einzelne Nutzer der Anwendung zu identifizieren</span><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">. &nbsp;</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">NYU unterhält auch ein öffentliches Online-Archiv mit aggregierten Daten („die Datenbank“), die von der Anwendung erhoben wurden, um ihre Forschungsergebnisse transparent zu machen und anderen die Forschung zu vereinfachen. Diese Informationen werden anonymisiert, so dass&nbsp;</span><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">es nicht möglich ist, einzelne Nutzer der Anwendung innerhalb der Datenbank zu identifizieren</span><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">. Auf die Datenbank kann über zugegriffen werden&nbsp;</span>
  <a href="https://adobserver.org/ad_database" rel="noopener noreferrer" target="_blank"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">hier</span></a><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">.</span></p>
<p style="line-height: 1;">
  <br>
</p>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Von der Anwendung verarbeitete Daten&nbsp;</span></p>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Wenn ein einzelner Nutzer die Anwendung installiert, wird er aufgefordert, grundlegende demografische Informationen über sich anzugeben: seine Altersgruppe, sein Geschlecht und seine ethnische Zugehörigkeit. Dieses grundlegende demografische Profil („das Profil“) hilft NYU zu verstehen, welche Personen welche Anzeigen angezeigt bekommen. Es ist nicht zwingend erforderlich, diese Informationen anzugeben, und die Anwendung kann trotzdem Daten erheben, die zum Forschungsprojekt beitragen, ohne ein Profil zu erstellen.&nbsp;</span></p>
<br>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Es werden von NYU keine weiteren personenbezogenen identifizierbaren Informationen angefordert oder verarbeitet. Die Browsersprache, die von der Anwendung zum Zwecke der korrekten Satz- und Syntaxanalyse (Parsing) der Anzeigen aufgezeichnet wird, ist ebenfalls im Profil enthalten. Die Anwendung führt kein „Profiling“ oder eine „automatisierte Entscheidungsfindung“ im Sinne der DSGVO durch.&nbsp;</span></p>
<br>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Wenn die Nutzerin/ der Nutzer sich dafür entschieden hat, ihr/sein Profil zu teilen, wird eine Identifikationsnummer (ID) erstellt und lokal in der Anwendung gespeichert. Wenn die Anwendung eine Werbeanzeige erkennt, werden die Details der Werbeanzeige zusammen mit der ID und den Profildaten an die NYU übermittelt. Diese Daten werden dann in die Datenbank hinzugefügt, mit Ausnahme der ID, die nicht in die Datenbank aufgenommen wird.</span></p>
<br>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Wenn der Nutzer sich entscheidet, kein Profil zu erstellen oder mit NYU zu teilen, werden nur Daten im Zusammenhang mit den Anzeigen an die Datenbank übermittelt und in diese aufgenommen. Alle Nutzer können die Daten im Zusammenhang mit den Anzeigen, die von der Anwendung verarbeitet wurden, jederzeit ansehen, indem sie auf das Symbol Ad Observer klicken und zu „My Archive“ (Mein Archiv) navigieren.&nbsp;</span></p>
<br>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Zusätzlich zu den Daten des Werbematerials, das dem Nutzer angezeigt wird, wird die Anwendung den Browser des Nutzers veranlassen, die dem Nutzer angezeigten, mit jeder Anzeige verbundenen Targeting-Datem anzufordern, sofern der Nutzer die Einstellung „Collect Ad Targeting Data“ (Targeting-Daten der Anzeige sammeln) aktiviert hat. Felder mit Targeting-Daten, die das Potenzial haben, persönlich identifizierbare Informationen zu enthalten, werden entfernt, bevor diese Daten an NYU übertragen werden.&nbsp;</span></p>

<p style="line-height: 1;">
  <br>
</p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Rechtsgrundlage für die Verarbeitung</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Die NYU verarbeitet Daten für die oben genannten Zwecke auf der Grundlage Ihrer Einwilligung. Mit Installation der Anwendung willigen die Nutzer in die Verarbeitung ihrer Daten für die oben beschriebenen Zwecke ein. Einzelpersonen können ihre Einwilligung jederzeit widerrufen, indem sie die Anwendung deinstallieren.&nbsp;</span><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">
    <br>
  </span><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Wie oben erwähnt, werden die in der Datenbank gespeicherten Daten anonymisiert, was bedeutet, dass der Widerruf der Einwilligung eines Nutzers nicht die Löschung der Daten im Zusammenhang mit den von der Anwendung erhobenen Anzeigen bedeutet.&nbsp;</span></p>
<p style="line-height: 1;">
  <br>
</p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">„Sensible Daten“&nbsp;</span><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">
    <br>
  </span><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Wie oben erwähnt, können Einzelpersonen bei der Installation der Anwendung Informationen über ihre ethnische Zugehörigkeit angeben. Diese Daten, die unter die Definition von „besondere Kategorien von personenbezogenen Daten“ gemäß der DSGVO fallen können, werden mit Zustimmung verarbeitet. Wie oben erwähnt,&nbsp;</span><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">werden diese Daten von der NYU nicht in einem Format gespeichert, das die Identifizierung der betroffenen Person ermöglicht</span><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">. Andere sensible Daten werden von NYU nicht angefordert oder verarbeitet.&nbsp;</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;">
  <br>
</p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Sicherheit von Informationen</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Die NYU unternimmt angemessene Schritte, um personenbezogene Daten vor Verlust, Missbrauch und unbefugtem Zugriff, Änderung, Offenlegung oder Zerstörung zu schützen. Dies umfasst den Einsatz technischer, organisatorischer und rechtlicher Maßnahmen zur Sicherstellung der Vertraulichkeit, Integrität und Verfügbarkeit personenbezogener Daten.&nbsp;</span></p>
<br>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Informationen, die über das Internet übertragen werden, bleiben anfällig für unbefugten Zugriff. Die Übermittlung solcher Daten erfolgt daher auf eigenes Risiko des Einzelnen. Siehe weiter&nbsp;</span>
  <a href="https://adobserver.org/terms-of-use/" rel="noopener noreferrer" target="_blank"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">hier</span></a><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">.</span></p>
<p style="line-height: 1;">
  <br>
</p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Speicherung von Daten&nbsp;</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Es werden keine personenbezogenen Daten von der NYU gespeichert. Die einzigen Daten, die gespeichert werden, wurden vollständig und unwiderruflich anonymisiert. &nbsp;</span></p>
<p style="line-height: 1;">
  <br>
</p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Rechte der betroffenen Personen</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Personen, deren personenbezogene Daten in Übereinstimmung mit der DSGVO verarbeitet werden, haben die folgenden Rechte:</span></p>
	<ul>
    <li>Das Recht, darüber informiert zu werden, ob die NYU Daten über sie besitzt</li>
    <li>Das Recht auf Zugang zu diesen Informationen</li>
    <li>Das Recht auf Berichtigung unrichtiger Daten</li>
    <li>Das Recht auf Löschung ihrer Daten</li>
    <li>Das Recht, sich von bestimmten Datenverarbeitungsvorgängen abzumelden</li>
    <li>Das Recht, ihre Daten in einer Form zu erhalten, die sie „portabel“ macht</li>
    <li>Das Recht, der Datenverarbeitung zu widersprechen</li>
    <li>Das Recht, eine Erklärung über jede automatisierte Entscheidungsfindung und/oder Profiling zu erhalten und diese Entscheidungen gegebenenfalls anzufechten</li>
  </ul>
<p style="line-height: 1;">
  <br>
</p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Personen, die ihre Rechte in Bezug auf die Anwendung ausüben möchten, können dies tun, indem sie sich an das Büro des Datenschutzbeauftragten der NYU unter den oben angegebenen Kontaktdaten wenden.&nbsp;</span></p>
<p style="line-height: 1;">
  <br>
</p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Betroffene Personen, die unter EU-Recht fallen, können auch berechtigt sein, bei der Datenschutzaufsichtsbehörde in ihrem Wohnsitzland Beschwerden in Bezug auf die Datenverarbeitung oder die Bearbeitung von Auskunftsersuchen einzureichen. Die Namen und Kontaktdaten der zuständigen Aufsichtsbehörde sind&nbsp;</span>
  <a href="https://ec.europa.eu/newsroom/article29/item-detail.cfm?item_id=612080" style="text-decoration:none;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#0000ff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">hier</span></a><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#0000ff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> aufgeführt.&nbsp;</span></p>
<p style="line-height: 1;">
  <br>
</p>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Änderungen und Überarbeitungen</span></p>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Sollte NYU Änderungen an dieser Richtlinie vornehmen, werden das Datum und die Art der Änderung unten angegeben.</span></p>`,
        },

        gender_0: {
          message: 'Männlich',
        },
        gender_1: {
          message: 'Weiblich',
        },
        gender_2: {
          message: 'Divers',
        },
        gender_3: {
          message: 'Keine Angabe'
        },

        archive_0: {
          message: 'Mein Archiv',
        },
        archive_1: {
          message: 'Sie haben nichts in Ihrem Archiv.'
        },

        prefselector_0: {
          message: 'Auswählen'
        }



      }),
    ]
  }
};

const locale_es = (data, copyAssetFolder) => {
  const { plugins, ...base } = generic(data, '_locales/es', ['regenerator-runtime/runtime', './_locales/es']);

  return {
    ...base,
    plugins: [
      ...plugins,
      new GenerateJsonPlugin('messages.json', {
        "appName": {
          "message": "Ad Observer",
        },
        "appDesc": {
          "message": "TODO",
          // XXX english version
          // "message": "Installing our browser plugin sends us the ads you see on Facebook and YouTube without compromising your privacy.",
          // "description":"The description of the application, displayed in the web store."
        },

        // Preferences page.
        youtube_share_ad_targeting_label: {
          message: 'Zielgruppeninformationen der Werbung teilen',
        },
        youtube_share_ad_targeting_hintText: {
          message: 'Dies erlaubt dem Programm die Erklärungen von YouTube zu sammeln, warum Sie eine Bestimmte Werbung sehen.',
        },
        youtube_share_ads_label: {
          message: 'Werbung teilen',
        },
        youtube_share_ads_hintText: {
          message: 'Dies erlaubt Ad Observer das Teilen der verschiedenen Arten von Werbungen, die ihnen gezeigt werden.',
        },
        youtube_share_recommended_videos_label: {
          message: 'Empfehlungen teilen',
        },
        youtube_share_recommended_videos_hintText: {
          message: 'Dies ermöglicht dem Programm zu sehen, welche Videos Ihnen empfohlen werden.',
        },
        youtube_share_watched_videos_label: {
          message: 'Gesehene Videos teilen',
        },
        youtube_share_watched_videos_hintText: {
          message: 'Dies ermöglicht dem Programm die von Ihnen angeschauten Videos auf Youtube zu sehen. Häufig sind zielgerichtete Werbungen mit bestimmten Videos oder Kanälen verbunden. Dies wäre also eine große Hilfe für dieses Forschungsprojekt',
        },
        user_share_country_label: {
          message: 'Land',
        },
        user_share_country_hintText: {
          message: 'Sie teilen uns mit, in welchem Land Sie leben.',
        },
        user_share_language_label: {
          message: 'Sprache',
        },
        user_share_language_hintText: {
          message: 'Sie teilen uns mit, welche Sprache Sie sprechen.',
        },
        user_share_gender_label: {
          message: 'Geschlecht',
        },
        user_share_gender_hintText: {
          message: 'Sie teilen uns Ihr Geschlecht mit.',
        },
        user_share_age_label: {
          message: 'Alter',
        },
        user_share_age_hintText: {
          message: 'Sie teilen uns Ihr Alter mit.',
        },
        user_share_diagnostic_data_label: {
          message: 'Diagnose-Daten',
        },
        user_share_diagnostic_data_hintText: {
          message: 'Falls Fehler auftreten, können Sie uns zusätzliche Daten schicken, um uns beim Lösen des Problems zu helfen.',
        },
        show_debug_data_label: {
          message: 'Debug-Informationen anzeigen',
        },
        show_debug_data_hintText: {
          message: 'Debug-Informationen werden angezeigt',
        },
        facebook_share_sponsored_posts_label: {
          message: 'Facebook-Werbungen teilen',
        },
        facebook_share_sponsored_posts_hintText: {
          message: 'Dies erlaubt dem Programm alle Werbungen zu sammeln, die Ihnen angezeigt werden.',
        },
        facebook_share_ad_targeting_label: {
          message: 'Zielgruppendaten teilen',
        },
        facebook_share_ad_targeting_hintText: {
          message: 'Dies erlaubt uns, die „Warum wird mir das angezeigt“-Informationen von Facebook zu sammeln. Dies sind Informationen darüber, warum Ihnen bestimmte Werbung gezielt gezeigt wird.',
        },
        facebook_show_collection_status_label: {
          message: 'Sammlungsstatus anzeigen',
        },
        facebook_show_collection_status_hintText: {
          message: 'Diese Option zeigt zu Ihren Facebook-Posts die jeweils gesammelten Informationen an.',
        },


        terms_0: {
          message: 'Ich akzeptiere diese Nutzungsbedingungen.',
        },
        terms_1: {
          message: 'I accept the updated terms and conditions',
        },
        terms_2: {
          message: 'Sie müssen die oben genannten Nutzungsbedingungen akzeptieren, um die Browser-Erweiterung nutzen zu können.',
        },
        terms_3: {
          message: 'The above terms and conditions have been updated since you last agreed to them.',
        },
        terms_4: {
          message: 'Sie haben die oben genannten Bedingungen akzeptiert.',
        },
        terms_5: {
          message: 'Nutzungsbedingungen'
        },
        terms_html: {
          message: `<style>
  p,h1,h4,h3,ul{
             margin: 2vmax;
  }
  p {
  line-height: 1; margin-top: 0pt; margin-bottom: 8pt;
  }
  h4 {
  line-height: 1; margin-top: 2pt; margin-bottom: 0pt;
  }
  p span, h4 span {
  font-size:11pt;font-family:Arial;color:#3c434e;background-color:transparent;font-weight:400;
  font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;
  }
</style>

<h4 style="margin-bottom: 12pt;">Danke, dass Sie Ad Observer installiert haben und uns dabei helfen, politische Online-Anzeigen zu beaufsichtigen.</h4>
<p><span style="font-style:normal;">Diese Nutzungsbedingungen bilden eine rechtliche Vereinbarung zwischen Ihnen, dem Endnutzer („Nutzer” oder „Sie”) und der New York University („NYU”, „uns” oder „wir”) für die beschränkte Lizenz zur Nutzung der Ad Observer-Anwendung, die eine Webbrowser-Erweiterung, Computersoftware und elektronische Dokumentation („die Anwendung” oder „Ad Observer”) umfasst.</span></p>

<h4><span style="font-style:italic;">Eigentum und Vertrieb</span></h4>
<p><span style="font-style:normal;">Die Anwendung ist Eigentum und urheberrechtlich geschützt durch NYU. NYU gewährt Ihnen eine begrenzte, weltweite, nicht ausschließliche, gebührenfreie, widerrufliche und nicht kommerzielle Lizenz zum Herunterladen und Verwenden von Ad Observer. Ihre Lizenz zum Herunterladen und zur Nutzung der Anwendung überträgt keinen Titel und kein Eigentum an der Anwendung und ist nicht als Verkauf von Rechten an der Anwendung auszulegen.</span></p>
<p><span style="font-style:normal;">Ad Observer kann frei verteilt werden, vorbehaltlich, aber nicht beschränkt auf die folgenden Bedingungen:</span></p>
  <ul>
    <li>Ohne die ausdrückliche schriftliche Zustimmung der NYU dürfen Sie die Anwendung oder Teile davon nicht an Dritte weitergeben;</li>
    <li>wenn der Nutzer die Anwendung weitergeben möchte, muss er sich mit der NYU unter developers@adobserver.org in Verbindung setzen, um vor der Weitergabe eine schriftliche Genehmigung einzuholen;</li>
    <li>der Nutzer darf die Anwendung nicht verkaufen oder weiterverkaufen;</li>
    <li>der Nutzer darf die Anwendung nicht als Teil eines kommerziellen Pakets weitergeben;</li>
    <li>der Nutzer darf die Anwendung nicht zur Unterstützung eines kommerziellen Dienstes verwenden oder verteilen;</li>
    <li>Der Nutzer darf die Anwendung nicht verwenden oder verteilen, um jede Art von Gewinn generierenden Aktivitäten zu unterstützen, selbst wenn sie frei verteilt wird.</li>
  </ul>

<h4><span style="font-style:italic;">Nutzerverhalten</span></h4>
<p><span style="font-style:normal;">Es ist dem Nutzer strengstens untersagt und er erklärt sich damit einverstanden, die Anwendung oder jegliche Elemente, Teile oder Abschnitte davon, ohne die vorherige schriftliche Zustimmung von NYU nicht anzupassen, zu bearbeiten, zu ändern, zu modifizieren, zu transformieren, zu veröffentlichen, neu zu veröffentlichen, zu verteilen oder weiterzugeben. Sie erklären sich damit einverstanden, keine automatisierten Datenerfassungsmethoden, Data Mining, Roboter, Scraping oder andere Datenerfassungsmethoden jeglicher Art in der Anwendung zu verwenden.</span></p>

<h4><span style="font-style:italic;">Urheberrecht</span></h4>
<p><span style="font-style:normal;">Die Anwendung und alle Rechte, insbesondere die Eigentumsrechte daran, sind Eigentum der NYU und durch Urheberrechtsgesetze und internationale Urheberrechtsverträge sowie andere Gesetze und Verträge über geistiges Eigentum geschützt. Die Anwendung wird lizenziert, nicht verkauft. Sie erkennen an, dass kein Eigentumsrecht an dem geistigen Eigentum der Anwendung auf Sie übertragen wird. Sie erkennen weiterhin an, dass der Titel und die vollen Eigentumsrechte an der Anwendung das ausschließliche Eigentum der NYU bleiben und Sie keine Rechte an der Anwendung erwerben, außer wie ausdrücklich in dieser Lizenz festgelegt. Sie erklären sich damit einverstanden, dass alle Kopien der Anwendung die gleichen Eigentumshinweise enthalten, die auf und in der Anwendung erscheinen. NYU kann seine Ansprüche gegenüber Personen gerichtlich geltend machen, die gegen diese Nutzungsbedingungen verstoßen, einschließlich der Durchsetzung seiner Urheberrechte an Ad Observer.</span></p>

<h4><span style="font-style:italic;">Garantien</span></h4>
<p><span style="font-style:normal;">Ad Observer wird dem Nutzer „WIE BESEHEN” zur Verfügung gestellt, ohne Garantien für die Nutzung oder Leistung und NYU lehnt jegliche Garantie- oder Haftungsverpflichtungen gegenüber dem Nutzer jeglicher Art ab, ob ausdrücklich oder stillschweigend. Wo die Gesetzgebung in dieser Vereinbarung eine Bedingung oder Garantie einschließt und diese Gesetzgebung Bestimmungen in einer Vereinbarung ausschließt oder verbietet, die die Anwendung oder Ausübung der Haftung unter einer solchen Bedingung oder Garantie ausschließt oder verändert, wird die Bedingung oder Garantie als in dieser Vereinbarung enthalten betrachtet.</span></p>

<h4><span style="font-style:italic;">Beschränkung der Haftung</span></h4>
<p><span style="font-style:normal;">NYU unterliegt nicht, und der Nutzer stellt NYU von jeglicher zusätzlichen Haftung frei und entschädigt NYU gegen jegliche Ansprüche, Klagen, Prozesse oder Verfahren (insbesondere unmittelbare, mittelbare oder Folgeschäden, Kosten für die Entfernung oder Neuinstallation oder Haftung für entgangene Nutzung oder entgangenen Gewinn) aufgrund der Nutzung oder Unmöglichkeit der Nutzung der Anwendung oder der Bereitstellung oder Nichterbringung von Support-Services, jede Verzögerung bei der Lieferung oder Fehler oder Defekt in der Anwendung, auch wenn NYU über die Möglichkeit solcher Schäden informiert wurde. Die gesamte Haftung von NYU im Rahmen dieser Vereinbarung ist auf den Betrag beschränkt, den der Nutzer für die Anwendung bezahlt hat. Der Nutzer hält NYU ferner von allen Ansprüchen, Klagen oder Verfahren schadlos, die von einem Anbieter von Websites oder einem Inhaber von Urheberrechten in Bezug auf den Betrieb der Anwendung durch den Nutzer erhoben werden. Der Nutzer erkennt ausdrücklich an und erklärt sich damit einverstanden, dass er sich nicht auf NYU verlassen hat, und NYU haftet nicht für Ratschläge, die NYU, ihre Bediensteten, Vertreter oder Mitarbeiter in Bezug auf die Eignung für einen beliebigen Zweck der Anwendung gegeben haben.</span></p>

<h4><span style="font-style:italic;">Copyright-Verletzung durch Dritte</span></h4>
<p><span style="font-style:normal;">NYU duldet nicht die Verletzung des Urheberrechts und anderer Gesetze. NYU verlangt von allen Nutzern, dass sie die Anwendung unter strikter Einhaltung des Urheberrechts und anderer Gesetze nutzen. Die NYU ermächtigt oder ermutigt Sie nicht durch die Bereitstellung der Anwendung, das Urheberrecht oder andere Rechte Dritter zu verletzen.</span></p>

<h4><span style="font-style:italic;">Haftungsfreistellung</span></h4>
<p><span style="font-style:normal;">In Verbindung mit Ihrer Nutzung von Ad Observer und soweit nach geltendem Recht zulässig, erklären Sie sich damit einverstanden, NYU und ihre Direktoren, leitenden Angestellten, Mitarbeiter und Berater zu verteidigen, freizustellen und schadlos zu halten von und gegen jegliche Ansprüche oder Forderungen (einschließlich angemessener Anwaltskosten), die sich ergeben aus (a) Ihrer Nutzung der Anwendung; (b) jeglicher Verletzung dieser Nutzungsbedingungen durch Sie; (c) jeglicher Behauptung, dass Ihre Nutzung der Anwendung das Urheberrecht, das Markenrecht, das Geschäftsgeheimnis oder sonstiges geistiges Eigentum oder Rechte Dritter verletzt oder dagegen verstößt.</span></p>

<h4><span style="font-style:italic;">Ihre Informationen</span></h4>
<p><span style="font-style:normal;">Durch die Installation der Anwendung erkennen Sie an, dass Sie die Datenschutzrichtlinie von Ad Observer, die die Praktiken zur Erhebung von Informationen der Anwendung beschreibt und regelt, überprüft haben und ihr zustimmen. Eine Kopie der Datenschutzrichtlinie von Ad Observer ist verfügbar unter <a href="https://adobserver.org/privacy-policy/" rel="noopener noreferrer" target="_blank"><span style="font-style:normal;">hier</span></a><span style="font-style:normal;">. Ad Observer behält sich das Recht vor, die Bestimmungen seiner Datenschutzrichtlinie von Zeit zu Zeit zu ändern, und wenn dies der Fall ist, wird Ad Observer alle Änderungen an seiner Datenschutzrichtlinie unter der angegebenen Webadresse veröffentlichen.
  </span></p>

<h4><span style="font-style:italic;">Allgemeine Bestimmungen</span></h4>
<p><span style="font-style:normal;">Dies ist die gesamte Vereinbarung zwischen Ihnen und der NYU, die Ihre Nutzung von Ad Observer regelt, und die jegliche vorherige Vereinbarung oder Absprache, ob schriftlich oder mündlich, in Bezug auf die vertraglichen Nutzungsbedingungen ersetzt. Sollte ein Teil dieser Nutzungsbedingungen für nichtig und nicht durchsetzbar befunden werden, hat dies keinen Einfluss auf die Gültigkeit des Rests der Vereinbarung, der gemäß seiner Bedingungen gültig und durchsetzbar bleibt. Diese Nutzungsbedingungen treten automatisch außer Kraft, wenn Sie die Bedingungen nicht einhalten. Die NYU kann diese Nutzungsbedingungen nach eigenem Ermessen jederzeit schriftlich ändern.</span></p>

<h4><span style="font-style:italic;">Kündigung</span></h4>
<p><span style="font-style:normal;">Sie können diese Nutzungsbedingungen jederzeit kündigen, indem Sie Ad Observer deinstallieren. Ihr Recht, Ad Observer zu nutzen, kann auch von NYU jederzeit, ohne Grund und ohne Vorankündigung beendet werden. Diese Vereinbarung endet automatisch, wenn Sie eine ihrer Bedingungen nicht einhalten. Sie stimmen zu, nach der Kündigung Ad Observer nicht mehr zu benutzen und zu deinstallieren.</span></p>

<h4><span style="font-style:italic;">Änderungen in diesen Nutzungsbedingungen</span></h4>
<p><span style="font-style:normal;">NYU behält sich das Recht vor, diese Nutzungsbedingungen von Zeit zu Zeit zu aktualisieren. Da Ihre Nutzung der Anwendung anonym erfolgt, können wir Sie nicht persönlich darüber informieren. Die aktuelle Version der Nutzungsbedingungen kann unter</span>
  <a href="https://adobserver.org/terms-of-use/"><span style="font-style:normal;">eingesehen werden</span></a><span style="font-style:normal;">.</span></p>`
        },

        nav_0: {
          message: 'Mein Archiv',
        },
        nav_1: {
          message: 'Datenschutzrichtlinie',
        },
        nav_2: {
          message: 'Nutzungsbedingungen',
        },
        nav_3: {
          message: 'Über',
        },
        nav_4: {
          message: 'Einstellungen'
        },


        about_0: { // TODO
          message: 'Über'
        },
        about_html: { // DONE.
          message: `<p>
            Ad Observer es una iniciativa para que los ciudadanos compartan de manera voluntaria los datos sobre lo que ven en Internet para permitir la investigación académica y el periodismo de investigación sobre el impacto de las plataformas digitales en la sociedad.
          </p>
          <p>
            La herramienta central de este proyecto es una extensión del navegador que recoge contenidos, anuncios, recomendaciones e información de orientación publicitaria mientras los usuarios navegan por la web.  Estos datos se anonimizan y se transmiten a una base de datos central donde se pueden analizar.  Los datos agregados sobre lo que ven los usuarios, así como los contenidos y anuncios reales, son accesibles para investigadores, periodistas y el público en general.  Estos datos pueden utilizarse con fines no comerciales para investigar cómo se difunden los contenidos en línea, cómo se dirigen los anuncios a los usuarios y qué tipo de mensajes se utilizan para persuadir al público.
          </p>
          <p>
            Este proyecto se inspira en varias iniciativas anteriores, como el Facebook Political Ad Collector de ProPublica (y el TGAM FB Political Ad Collector), Who Targets Me, Ad Analyst.
          </p>
          <p>
            El objetivo de esta iniciativa es facilitar la recopilación y el intercambio de datos a través de una serie de plataformas digitales para aportar mayor transparencia a los algoritmos que afectan a nuestras vidas.
          </p>
          <p>
            Este proyecto es una colaboración entre:  el Instituto de Transparencia Algorítmica, la Universidad de Nueva York, Quartz y la Universidad de Grenoble.
          </p>
          <p>
            Para más información sobre el proyecto, visite:&nbsp;
            <a href="https://adobserver.org">adobserver.org</a>.
          </p>`,
        },

        prefs_0: { // DONE
          message: 'Preferencias de uso compartido',
        },
        prefs_1: { // DONE
          message: 'Usted tiene el control sobre lo que comparte con este proyecto. Para cambiar los datos que desea compartir, marque o desmarque la casilla para activar o desactivar el uso compartido de ese tipo de datos.',
        },
        prefs_2: { // DONE
          message: 'Preferencias generales',
        },
        prefs_3: { // DONE
          message: 'Estos ajustes se aplican a todos los datos compartidos por la extensión.',
        },
        prefs_4: { // DONE
          message: 'Preferencias de Facebook',
        },
        prefs_5: { // DONE
          message: 'Estas opciones controlan los datos que comparte de su canal de Facebook.',
        },
        prefs_6: { // DONE
          message: 'Preferencias de YouTube',
        },
        prefs_7: { // DONE
          message: 'Estas opciones controlan los datos que comparte cuando utiliza YouTube',
        },
        prefs_8: { // DONE
          message: 'Su configuración',
        },
        prefs_9: { // DONE
          message: 'La configuración de su idioma y ubicación nos ayuda a garantizar que estamos manejando sus datos de manera responsable y analizándolos de manera correcta.'
        },

        prefs_10: { // DONE
          message: 'Su país',
        },
        prefs_11: { // DONE
          message: 'Su idioma',
        },
        prefs_12: { // DONE
          message: 'Edad',
        },
        prefs_13: { // DONE
          message: 'Sexo'
        },

        privacy_0: { // DONE
          message: 'Política de privacidad'
        },
        privacy_html: {
          message: `
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">En la presente Política de privacidad (“la Política”) se detallan la forma y los motivos por los que la New York University (“la NYU”) procesa los datos personales cuando las personas instalan Ad Observer (“la Aplicación”).</span></p>
<br>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;">
<span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">La Política no se aplica a ningún otro procesamiento de datos personales por parte de la NYU que se rija de conformidad con otras políticas y procedimientos aplicables, como la</span>
  <a href="https://www.nyu.edu/footer/copyright-and-fair-use/digital-privacy-statement.html" style="text-decoration:none;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#0000ff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Declaración de privacidad digital de la NYU.</span></a></p>
  <br>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Si tiene alguna pregunta relacionada con la Política o con el uso de la Aplicación, por favor comuníquese por correo electrónico a&nbsp;</span>
  <a href="mailto:developers@adobserver.org" style="text-decoration:none;"><span style="font-size: 11pt; font-family: Calibri, sans-serif; color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: underline; text-decoration-skip-ink: none; vertical-align: baseline; white-space: pre-wrap;">developers@adobserver.org</span></a><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">. &nbsp;&nbsp;</span><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">
    <br>
    <br>

  </span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Controlador de datos&nbsp;</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">La NYU es el controlador de los datos cubiertos por la Política. Puede comunicarse con el Funcionario de protección de datos de la NYU si tiene alguna pregunta relacionada con este aviso, con nuestras prácticas de recopilación de datos o con sus derechos. Puede ponerse en contacto con el Funcionario de protección de datos de la NYU, Peter Christensen, a través de la siguiente información:</span></p>
<p style="line-height: 1;">
  <br>
</p>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Peter Christensen</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">c/o Data Protection Officer’s Office</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">70 Washington Square South</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Room 1201</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">New York, NY 10012</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">+1 212 992 7256</span></p>
<p style="line-height: 1;">
  <br>
</p>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Principios rectores</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">La NYU se compromete a respetar el derecho a la protección de la privacidad del individuo, a proteger los datos personales y a cumplir con las leyes aplicables en todo el mundo. De conformidad con estos principios rectores, la Aplicación ha sido diseñada de forma tal que se trate la mínima cantidad de datos personales posible para alcanzar los objetivos de la NYU.</span></p>

<p style="line-height: 1;">
  <br>
</p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Fines y medios para el procesamiento de datos</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">El proposito de la Aplicación es recopilar información sobre los anuncios políticos dirigidos a las personas físicas y que estas ven en Facebook y YouTube. Esto se lleva a cabo con el objetivo de que el público pueda comprender más fácilmente cómo se despliega la publicidad política. La NYU considera que comprender este fenómeno y su impacto en la democracia obra en beneficio del interés público.</span>

<span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">
  <br></span>

// TODO: translate "Zu diesem..." German bit.
<span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Zu diesem Zweck erhebt die NYU grundlegende demografische Informationen über die Personen, die die Anwendung installieren, sowie Informationen über die Anzeigen, die sie sehen. Diese Informationen wurden auf ein absolutes Minimum beschränkt, so dass&nbsp;</span>
<span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">es für NYU nicht möglich ist, einzelne Nutzer der Anwendung zu identifizieren</span><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">. &nbsp;</span></p>

<br>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Además, la NYU cuenta con un repositorio público en línea de datos agregados (“la Base de datos”) que han sido recopilados por la Aplicación con el fin de que los resultados de la investigación sean transparentes y para facilitar las investigaciones realizadas por terceros. Esta información se anonimiza para que&nbsp;</span><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">resulte imposible identificar a los usuarios particulares de la Aplicación a partir de la Base de datos</span><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">. Se puede acceder a la Base de datos en &nbsp;</span><a href="https://adobserver.org/ad_database" rel="noopener noreferrer" target="_blank"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">aquí.</span></a></p>

<p style="line-height: 1;">
  <br>
</p>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Procesamiento de datos realizado por la Aplicación</span></p>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Cuando un usuario particular instala la Aplicación, se lo invita a suministrar información demográfica básica sobre sí mismo: el grupo de edad, el género y la etnia. Este perfil con características demográficas básicas (“el Perfil”) permite que la NYU pueda entender quiénes ven los anuncios. No es obligatorio suministrar dicha información y la Aplicación puede seguir recopilando datos que contribuyan al proyecto de investigación sin que el usuario cree un Perfil.</span></p>
<br>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Es werden von NYU keine weiteren personenbezogenen identifizierbaren Informationen angefordert oder verarbeitet. Die Browsersprache, die von der Anwendung zum Zwecke der korrekten Satz- und Syntaxanalyse (Parsing) der Anzeigen aufgezeichnet wird, ist ebenfalls im Profil enthalten. Die Anwendung führt kein „Profiling“ oder eine „automatisierte Entscheidungsfindung“ im Sinne der DSGVO durch.</span></p>
<br>

// TODO: this needs translation
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Wenn die Nutzerin/ der Nutzer sich dafür entschieden hat, ihr/sein Profil zu teilen, wird eine Identifikationsnummer (ID) erstellt und lokal in der Anwendung gespeichert. Wenn die Anwendung eine Werbeanzeige erkennt, werden die Details der Werbeanzeige zusammen mit der ID und den Profildaten an die NYU übermittelt. Diese Daten werden dann in die Datenbank hinzugefügt, mit Ausnahme der ID, die nicht in die Datenbank aufgenommen wird.</span></p>
<br>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Si el usuario decide no crear o no compartir un Perfil, solo los datos relacionados con los anuncios se transmitirán e incluirán en la Base de datos. Todos los usuarios pueden ver los datos relacionados con los anuncios que la Aplicación haya procesado si hacen clic, en cualquier momento, en el icono Ad Observer y se desplazan hasta “My Archive” (Mi Archivo). </span></p>
<br>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">La Aplicación recopilará y transmitirá a la NYU los datos de creatividad de cada anuncio que se haya mostrado al usuario. Si el usuario tiene activada la opción “Collect Ad Targeting Data” (Recopilar datos de segmentación de anuncios), la Aplicación también hará que el navegador del usuario solicite los datos de segmentación (es decir, los datos que se muestran al usuario cuando este hace clic en el botón “Why Am I Seeing This?” [¿Por qué estoy viendo esto?]) asociados a cada anuncio que se haya mostrado al usuario.</span></p>

<p style="line-height: 1;">
  <br>
</p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Fundamentos legales para el procesamiento</span></p>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">La NYU procesa los datos para los fines descritos anteriormente y sobre la base del consentimiento. Al instalar la Aplicación, los usuarios aceptan el procesamiento de sus datos para los fines descritos anteriormente. Pueden retirar el consentimiento en cualquier momento mediante la desinstalación de la Aplicación. </span>

<span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">
  <br>  </span>

  // TODO: this bit needs translation.
  <span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Wie oben erwähnt, werden die in der Datenbank gespeicherten Daten anonymisiert, was bedeutet, dass der Widerruf der Einwilligung eines Nutzers nicht die Löschung der Daten im Zusammenhang mit den von der Anwendung erhobenen Anzeigen bedeutet.&nbsp;</span></p>

<p style="line-height: 1;">
  <br>
</p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;">

<span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">“Datos confidenciales” </span>

<span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">
    <br> </span>

  // TODO: this bit needs translation.
  <span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Wie oben erwähnt, können Einzelpersonen bei der Installation der Anwendung Informationen über ihre ethnische Zugehörigkeit angeben. Diese Daten, die unter die Definition von „besondere Kategorien von personenbezogenen Daten“ gemäß der DSGVO fallen können, werden mit Zustimmung verarbeitet. Wie oben erwähnt,&nbsp;</span>

  <span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">werden diese Daten von der NYU nicht in einem Format gespeichert, das die Identifizierung der betroffenen Person ermöglicht</span><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">. Andere sensible Daten werden von NYU nicht angefordert oder verarbeitet.&nbsp;</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;">
  <br>
</p>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Seguridad de la Información</span></p>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">La NYU toma las precauciones razonables para proteger los datos personales de pérdidas, uso indebido, acceso no autorizado, divulgación, modificaciones o destrucción. Esto incluye la adopción de medidas técnicas, organizativas y legales para garantizar la confidencialidad, integridad y disponibilidad de los datos personales.</span></p>
<br>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">La información que se transmite a través de Internet sigue siendo vulnerable al acceso no autorizado. Por consiguiente, la transmisión de dichos datos se realiza bajo la propia responsabilidad del individuo. Consulte más información</span>
  <a href="https://adobserver.org/terms-of-use/" rel="noopener noreferrer" target="_blank"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">aquí.</span></a></p>
<p style="line-height: 1;">
  <br>
</p>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Retención de los datos</span></p>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">La NYU no retiene datos personales. Los únicos datos que se retienen son anonimizados de forma completa e irreversible.</span></p>
<p style="line-height: 1;">
  <br>
</p>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Derechos de los interesados</span></p>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Los individuos cuyos datos personales se traten de conformidad con el RGPD tienen los siguientes derechos:</span></p>

	<ul>
    <li>Derecho a ser informados respecto de si la NYU tiene datos sobre ellos.</li>
    <li>Derecho a acceder a dicha información.</li>
    <li>Derecho a solicitar la corrección de cualquier dato inexacto.</li>
    <li>Derecho a solicitar la eliminación de los datos.</li>
    <li>Derecho a excluirse de determinadas operaciones de procesamiento de datos.</li>
    <li>Derecho a recibir los datos en un formato que permita su “portabilidad”.</li>
    <li>Derecho a oponerse al procesamiento de datos.</li>
    <li>Derecho a recibir una explicación sobre la toma de decisiones automatizadas o la elaboración de perfiles, y a impugnar tales decisiones cuando proceda.</li>
  </ul>

<br>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Aquellos individuos que deseen ejercer sus derechos con respecto a la Aplicación pueden hacerlo poniéndose en contacto con la oficina del Funcionario de protección de datos de la NYU a través de la información de contacto indicada anteriormente.</span></p>

<br>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Los interesados amparados por la legislación de la Unión Europea (UE) también pueden tener derecho a presentar reclamaciones relativas al procesamiento de datos o a la gestión de las solicitudes de acceso de los interesados ante la autoridad supervisora de protección de datos del país en el que residan. Los nombres y la información de contacto de la autoridad supervisora pertinente se indican</span>

  <a href="https://ec.europa.eu/newsroom/article29/item-detail.cfm?item_id=612080" style="text-decoration:none;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#0000ff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">aquí.</span></a></p>

<br>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Modificaciones y revisiones</span></p>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Si la NYU realiza cualquier modificación de esta Política, la fecha y la naturaleza de la modificación se indicarán a continuación.</span></p>

<br>

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Julio de 2021: descripción más precisa de la recopilación de datos de segmentación de anuncios</span></p>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
`,
        },

        gender_0: {
          message: 'Männlich',
        },
        gender_1: {
          message: 'Weiblich',
        },
        gender_2: {
          message: 'Divers',
        },
        gender_3: {
          message: 'Keine Angabe'
        },

        archive_0: {
          message: 'Mein Archiv',
        },
        archive_1: {
          message: 'Sie haben nichts in Ihrem Archiv.'
        },

        prefselector_0: {
          message: 'Auswählen'
        }



      }),
    ]
  }
};

module.exports = {
  en: locale_en,
  de: locale_de,
  es: locale_es
}
