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

<p dir="ltr" style="line-height: 1; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">If the user has elected to share their Profile, an instance identification number (“ID”) is created and stored locally by the Application. When an ad is seen by the Application, details of the ad together with the ID and the Profile data is transmitted to NYU. This data is then added to the Database, with the exception of the ID, which is not added to the Database. &nbsp; &nbsp;</span></p>
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
