const { name, version, description, consentVersion } = require('./package.json');

// const title = 'Ad Observer';
const title = 'Ad Observer';

// override any of these.
module.exports = (isDebug = false) => ({
  name: 'Ad Observer', // the extension name (uses what's in package.json as a default)
  title,
  description,
  version: '3.0.12', // legacy build is v2.0+, this is better, so it's 3.0
  // language: 'eng',
  language: 'german',
  consentVersion, // if you change this, strange things might happen.
  extensionProviderId: 'nyu',
  geckoId: 'developers@adobserver.org',
  includeYoutube: true,
  homepage: 'https://adobserver.org',
  assetsPath: 'assets',
  defaultIcon: 'icon128.png',

  helpText: `<p>Need help? Email info@adobservatory.org</p>`,
  preferencesPageFooter: ``,

  consentText: `<style>
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
  <a href="https://adobserver.org/terms-of-use/"><span style="font-style:normal;">eingesehen werden</span></a><span style="font-style:normal;">.</span></p>`,
  aboutText: `
  <p>
    ${title} nutzt die freiwillig geteilten Online-Daten der Nutzer für wissenschaftliche Forschung und investigativen Journalismus. Wir wollen die Frage beantworten, wie die Social-Media-Plattformen die Gesellschaft beeinflussen. 

  </p>
  <p>
    Das Hauptwerkzeug des Projekts ist eine Browser-Erweiterung, die Inhalte, Werbungen Empfehlungen und Zielgruppeninformationen im Internet sammelt. Diese Daten werden anonymisiert und in einer zentralen Datenbank gesammelt, um sie zu analysieren. Die Daten werden für Forscher, Journalisten und die allgemeine Öffentlichkeit zusammengefasst. Dies ist allein eine nicht-kommerzielle-Nutzung, um zu untersuchen, wie sich Online-Inhalte verbreiten, welchen Gruppen von Nutzern gezielt welche Werbungen gezeigt wird und welche Nachrichten benutzt werden, um die Öffentlichkeit zu überzeugen. 
  </p>
  <p>
    Dieses Projekt auf vielen früheren Untersuchungen auf. Dazu gehören unter anderem ProPublica Facebook Political Ad Collector (und der TGAM FB Political Ad Collector), Who Targets Me und Ad Analyst.
  </p>
  <p>
    Ziele der Initiative sind das Sammeln von Daten über mehrere Plattformen hinweg und eine bessere Transparenz über die Algorithmen, die unser Leben bestimmen. 
  </p>
  <p>
    Das Projekt ist eine Zusammenarbeit von: The Algorithmic Transparency Institute, der New York University, Quartz und der University of Grenoble.
  </p>
  <p>
    Für weitere Informationen über dieses Projekt besuchen sie bitte:&nbsp;
    <a href="https://adobserver.org">adobserver.org</a>.
  </p>`,
  privacyText: `
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">This Privacy Policy (“the Policy”) explains how and why New York University (“NYU”) processes personal data when people install Ad Observer (“the Application”).</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The Policy does not cover any other personal data processing by NYU, which is covered by other applicable policies and procedures, including&nbsp;</span>
  <a href="https://www.nyu.edu/footer/copyright-and-fair-use/digital-privacy-statement.html" style="text-decoration:none;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#0000ff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">NYU’s Digital Privacy Statement</span></a><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">.&nbsp;</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">If you have a question regarding the Policy or the use of the Application, please contact&nbsp;</span>
  <a href="mailto:developers@adobserver.org" style="text-decoration:none;"><span style="font-size: 11pt; font-family: Calibri, sans-serif; color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: underline; text-decoration-skip-ink: none; vertical-align: baseline; white-space: pre-wrap;">developers@adobserver.org</span></a><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">. &nbsp;&nbsp;</span><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">
    <br>
    <br>
  </span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Data controller&nbsp;</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">NYU is the controller of the data covered by the Policy. You can contact NYU’s Data Protection Officer with any questions about this notice, our data collection practices, or your rights. You can reach NYU’s Data Protection Officer, Peter Christensen, at:</span></p>
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
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Guiding principles</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">NYU is committed to respecting individuals’ right to privacy, protecting personal data and compliance with applicable laws globally. In accordance with these guiding principles, the Application has been designed to process the minimum amount of personal data possible to achieve NYU’s objectives.&nbsp;</span></p>
<p style="line-height: 1;">
  <br>
</p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Purposes and means of data processing</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The purpose of the Application is to collect information about the political ads directed at and seen by private individuals on Facebook &amp; YouTube. This is done with the objective of facilitating public understanding of how political advertising is deployed. NYU believes that it is in the public interest to understand this phenomenon and its impact on democracy.&nbsp;</span><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">
    <br>
  </span><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">To this end, NYU collects basic demographic information about the individuals who install the Application as well as information about the ads that they see. This information has been kept to an absolute minimum, so that&nbsp;</span><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">it is not possible for NYU to identify individual users of the Application</span><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">. &nbsp;</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">NYU also maintains a public, online repository of aggregate data (“the Database”) collected by the Application in order to render its research findings transparent and facilitate research by others. This information is anonymized so that&nbsp;</span><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">it is not possible to identify individual users of the Application from within the Database</span><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">. The Database can be accessed&nbsp;</span>
  <a href="https://adobserver.org/ad_database" rel="noopener noreferrer" target="_blank"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">here</span></a><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">.</span></p>
<p style="line-height: 1;">
  <br>
</p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Data processed by the Application&nbsp;</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">When an individual user installs the Application, they are invited to provide basic demographic information about themselves: their age group, gender and ethnicity. This basic demographic profile (“the Profile”) helps NYU understand which people see which ads. It is not mandatory to provide this information and the Application can still collect data that contributes to the research project without creating a Profile.&nbsp;</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">No other personally identifiable information is requested or processed by NYU. The browser language, which is recorded by the Application for the purposes of correctly parsing the ads, is also included in the Profile. The Application does not undertake any “profiling” or “automated decision-making” as defined by the GDPR.&nbsp;</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">If the user has elected to share their Profile, an instance identification number (“ID”) is created and stored locally by the Application. When an ad is seen by the Application, details of the ad together with the ID and the Profile data is transmitted to NYU. This data is then added to the Database, with the exception of the ID, which is not added to the Database. &nbsp; &nbsp;</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">If the user has decided not to create or share a Profile, only the data related to the ads is transmitted to and included in the Database. All users can view the data related to the ads that has been processed by the Application at any time by clicking on the Ad Observer icon and navigating to ‘My Archive’.&nbsp;</span></p>
<p style="line-height: 1;">
  <br>
</p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Legal basis for processing</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">NYU processes data for the above purposes on the basis of consent. By installing the Application, users consent to the processing of their data for the purposes described above. Individuals may withdraw their consent at any time by uninstalling the Application.&nbsp;</span><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">
    <br>
  </span><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">As noted above, data retained in the Database is anonymized, meaning that a user’s withdrawal of consent will not mean the deletion of the data related to the ads that the Application has collected.&nbsp;</span></p>
<p style="line-height: 1;">
  <br>
</p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">“Sensitive data”&nbsp;</span><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">
    <br>
  </span><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">As noted above, individuals may elect to provide information about their ethnicity when they install the Application. This data, which may fall within the definition of “special category data” under the GDPR, is processed with consent. As noted above,&nbsp;</span><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">this data is not stored by NYU in a format that allows identification of the individual concerned</span><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">. No other sensitive data is requested or processed by NYU.&nbsp;</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;">
  <br>
</p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Information security</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">NYU takes reasonable steps to protect personal data against loss, misuse, and unauthorized access, alteration, disclosure or destruction. This includes the use of technical, organizational and legal measures to ensure the confidentiality, integrity and availability of personal data.&nbsp;</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Information transmitted across the internet remains vulnerable to unauthorised access. The transmission of such data is therefore at the individual’s own risk. See further&nbsp;</span>
  <a href="https://adobserver.org/terms-of-use/" rel="noopener noreferrer" target="_blank"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">here</span></a><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">.</span></p>
<p style="line-height: 1;">
  <br>
</p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Data retention&nbsp;</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">No personal data is retained by NYU. The only data that is retained has been fully and irreversibly anonymised. &nbsp;</span></p>
<p style="line-height: 1;">
  <br>
</p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Data Subjects Rights</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Individuals whose personal data is processed in accordance with the GDPR have the following rights:</span></p>
	<ul><li>The right to be informed as to whether NYU holds data about them</li><li>The right of access to that information</li><li>The right to have inaccurate data corrected</li><li>The right to have their data deleted</li><li>The right to opt-out of particular data processing operations</li><li>The right to receive their data in a form that makes it “portable”</li><li>The right to object to data processing</li><li>The right to receive an explanation about any automated decision making and/or profiling, and to challenge those decisions where appropriate</li></ul>
<p style="line-height: 1;">
  <br>
</p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Individuals wishing to exercise their rights in respect of the Application can do so by contacting NYU’s Data Protection Officer’s Office using the contact details provided above.&nbsp;</span></p>
<p style="line-height: 1;">
  <br>
</p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Data subjects covered by EU law may also be entitled to lodge complaints in regard to data processing or the handling of subject access requests with data protection supervisory authority in their country of residence. Relevant supervisory authority names and contact details are listed&nbsp;</span>
  <a href="https://ec.europa.eu/newsroom/article29/item-detail.cfm?item_id=612080" style="text-decoration:none;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#0000ff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">here</span></a><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#0000ff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">.&nbsp;</span></p>
<p style="line-height: 1;">
  <br>
</p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Changes and revisions</span></p>
<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Should NYU make changes to this Policy, the date and nature of the change will be indicated below.</span></p>`,
  apiUrl: 'https://observations.nyuapi.org',
  permissions: {
    SHOW_DEBUG_DATA: {
      label: 'Debug-Informationen anzeigen',
      hintText: 'Debug-Informationen werden angezeigt',
      defaultValue: isDebug
    },
    USER_SHARE_LANGUAGE: {
      label: 'Meine Sprache teilen',
      hintText: 'Sie teilen uns mit, welche Sprache Sie sprechen.',
      defaultValue: true
    },
    USER_SHARE_COUNTRY: {
      label: 'Mein Land teilen',
      hintText: 'Sie teilen uns mit, in welchem Land Sie leben.',
      defaultValue: true
    },
    USER_SHARE_GENDER: {
      label: 'Mein Geschlecht teilen',
      hintText: 'Sie teilen uns Ihr Geschlecht mit.',
      defaultValue: true
    },
    USER_SHARE_AGE: {
      label: 'Mein Alter teilen',
      hintText: 'Sie teilen uns Ihr Alter mit.',
      defaultValue: true
    },
    USER_SHARE_DIAGNOSTICS: {
      label: 'Diagnose-Daten teilen',
      hintText: 'Falls Fehler auftreten, können Sie uns zusätzliche Daten schicken, um uns beim Lösen des Problems zu helfen.',
      defaultValue: true
    },
    FB_SHARE_SPONSORED_POSTS: {
      label: 'Facebook-Werbungen teilen',
      hintText: 'Dies erlaubt dem Programm alle Werbungen zu sammeln, die Ihnen angezeigt werden.',
      defaultValue: true
    },
    FB_SHARE_AD_TARGETING: {
      label: 'Zielgruppendaten teilen',
      hintText:
        'Dies erlaubt uns, die „Warum wird mir das angezeigt“-Informationen von Facebook zu sammeln. Dies sind Informationen darüber, warum Ihnen bestimmte Werbung gezielt gezeigt wird.',
      defaultValue: true
    },
    FB_SHOW_COLLECTION_STATUS: {
      label: 'Sammlungsstatus anzeigen',
      hintText: 'Diese Option zeigt zu Ihren Facebook-Posts die jeweils gesammelten Informationen an.',
      defaultValue: isDebug // change this to `isDebug` if you want this only be on for debug users
    },
    YT_SHARE_WATCHED_VIDEOS: {
      label: 'Gesehene Videos teilen',
      hintText:
        'Dies ermöglicht dem Programm die von Ihnen angeschauten Videos auf Youtube zu sehen. Häufig sind zielgerichtete Werbungen mit bestimmten Videos oder Kanälen verbunden. Dies wäre also eine große Hilfe für dieses Forschungsprojekt',
      defaultValue: false
    },
    YT_SHARE_RECOMMENDED_VIDEOS: {
      label: 'Empfehlungen teilen',
      hintText:
        'Dies ermöglicht dem Programm zu sehen, welche Videos Ihnen empfohlen werden.',
      defaultValue: false
    },
    YT_SHARE_ADS: {
      label: 'Werbung teilen',
      hintText: 'Dies erlaubt Ad Observer das Teilen der verschiedenen Arten von Werbungen, die ihnen gezeigt werden.',
      defaultValue: true
    },
    YT_SHARE_AD_TARGETING: {
      label: 'Zielgruppeninformationen der Werbung teilen',
      hintText:
        'Dies erlaubt dem Programm die Erklärungen von YouTube zu sammeln, warum Sie eine Bestimmte Werbung sehen.',
      defaultValue: true
    }
  }
});
