/* ========================================
   ABSTIMMUNGSSONNTAG 8. MÄRZ 2026
   Interaktive Lernkontrolle – Logic
   ======================================== */

// ============ DATA ============

const VORLAGEN = {
  // ---- BUND ----
  individualbesteuerung: {
    tab: 'bund',
    title: 'Individualbesteuerung',
    subtitle: 'Abschaffung der «Heiratsstrafe» – JA 54.3%',
    url: 'https://www.srf.ch/news/abstimmung-individualbesteuerung-vom-8-3-2026',
    result: 'JA 54.3%',
    activities: [
      {
        type: 'slider',
        label: 'Schätzfrage',
        question: 'Wie hoch war der Ja-Anteil bei der Individualbesteuerung?',
        min: 30, max: 80, step: 1, unit: '%',
        correct: 54, tolerance: 2,
        hint: 'Finde die genaue Zahl auf der SRF-Resultateseite.'
      },
      {
        type: 'match',
        label: 'Zuordnung',
        question: 'Ordne die Begriffe der Individualbesteuerung korrekt zu.',
        pairs: [
          { left: 'Indirekter Gegenvorschlag zu…', right: 'Steuergerechtigkeits-Initiative' },
          { left: 'Kantonsreferendum ergriffen von…', right: '10 Kantonen' },
          { left: 'Inkrafttreten spätestens…', right: '2032' },
        ]
      },
      {
        type: 'fill',
        label: 'Lückentext',
        question: 'Ergänze die Lücken basierend auf dem SRF-Artikel.',
        template: 'Mit der Individualbesteuerung wird jede Person ihr eigenes {0} und {1} versteuern. Das Gesetz ist ein indirekter {2} zur Steuergerechtigkeits-Initiative.',
        blanks: ['Einkommen', 'Vermögen', 'Gegenvorschlag'],
      },
      {
        type: 'drag',
        label: 'Drag & Drop',
        question: 'Welche Aussagen treffen auf die Individualbesteuerung zu?',
        correct: ['Jede Person versteuert ihr Einkommen einzeln', 'Die SVP ergriff das Referendum', 'Abgestimmt am Internationalen Frauentag'],
        distractors: ['Nur verheiratete Paare sind betroffen', 'Das Ständemehr war nötig', 'Die Vorlage wurde abgelehnt'],
      },
    ]
  },
  srg: {
    tab: 'bund',
    title: 'SRG-Initiative',
    subtitle: '«200 Franken sind genug!» – NEIN 61.9%',
    url: 'https://www.srf.ch/news/schweiz/abstimmungen-8-3-2026/abstimmungen-vom-8-maerz-srg-initiative-scheitert-am-volks-und-staendemehr',
    result: 'NEIN 61.9%',
    activities: [
      {
        type: 'drag',
        label: 'Drag & Drop',
        question: 'Welche Aussagen gehören zur SRG-Initiative? Ziehe die richtigen in die Box.',
        correct: ['Medienabgabe auf 200 Fr. senken', 'Unternehmen von Abgabe befreien', 'SRG auf Grundversorgung beschränken'],
        distractors: ['SRG komplett abschaffen', 'Medienabgabe verdoppeln', 'Neue TV-Sender gründen'],
      },
      {
        type: 'slider',
        label: 'Schätzfrage',
        question: 'Wie hoch war der Nein-Anteil bei der SRG-Initiative?',
        min: 40, max: 80, step: 1, unit: '%',
        correct: 62, tolerance: 2,
        hint: 'Schaue auf der SRF-Resultateseite nach.'
      },
      {
        type: 'timeline',
        label: 'Reihenfolge',
        question: 'Bringe die Ereignisse rund um die SRG-Debatte in die richtige Reihenfolge.',
        items: [
          'Lancierung der Initiative',
          'Sammlung der Unterschriften',
          'Bundesrat empfiehlt Ablehnung',
          'Abstimmung am 8. März 2026',
        ]
      },
      {
        type: 'fill',
        label: 'Lückentext',
        question: 'Ergänze die Lücken zum Ergebnis der SRG-Initiative.',
        template: 'Die SRG-Initiative wurde mit {0}% Nein abgelehnt. Kein einziger {1} stimmte zu. Es fehlte sowohl das {2} als auch das Ständemehr.',
        blanks: ['61.9', 'Kanton', 'Volksmehr'],
      },
    ]
  },
  klimafonds: {
    tab: 'bund',
    title: 'Klimafonds-Initiative',
    subtitle: 'Mehr Bundesmittel für Klimaschutz – NEIN 70.7%',
    url: 'https://www.srf.ch/news/schweiz/abstimmungen-8-3-2026/abstimmungen-vom-8-maerz-hochrechnung-71-nein-zur-klimafonds-initiative',
    result: 'NEIN 70.7%',
    activities: [
      {
        type: 'slider',
        label: 'Schätzfrage',
        question: 'Wie hoch war der Nein-Anteil bei der Klimafonds-Initiative?',
        min: 40, max: 90, step: 1, unit: '%',
        correct: 71, tolerance: 2,
        hint: 'Die Zahl findest du auf srf.ch.'
      },
      {
        type: 'fill',
        label: 'Lückentext',
        question: 'Ergänze die Lücken zur Klimafonds-Initiative.',
        template: 'Der Bund sollte jährlich {0} bis {1} Prozent des BIP in einen Klimafonds einzahlen. Die Initiative wurde mit {2}% Nein abgelehnt.',
        blanks: ['0.5', '1', '70.7'],
      },
      {
        type: 'match',
        label: 'Zuordnung',
        question: 'Ordne die definitiven Ergebnisse den Vorlagen zu.',
        pairs: [
          { left: 'Klimafonds', right: '70.7% Nein' },
          { left: 'SRG-Initiative', right: '61.9% Nein' },
          { left: 'Individualbesteuerung', right: '54.3% Ja' },
        ]
      },
      {
        type: 'drag',
        label: 'Drag & Drop',
        question: 'Welche Fakten stimmen zur Klimafonds-Initiative?',
        correct: ['Kein Kanton stimmte zu', 'Deutlichste Niederlage des Tages', '0 von 23 Ständen dafür'],
        distractors: ['Knapp abgelehnt', '5 Kantone stimmten zu', 'Nur am Ständemehr gescheitert'],
      },
    ]
  },
  bargeld: {
    tab: 'bund',
    title: 'Bargeld-Initiative & Gegenentwurf',
    subtitle: 'Verfassungsverankerung des Frankens – Gegenentwurf JA 73.4%',
    url: 'https://www.srf.ch/news/schweiz/abstimmungen-8-3-2026/abstimmungen-vom-8-maerz-hochrechnung-ja-zum-gegenentwurf-der-bargeld-initiative-1',
    result: 'Gegenentwurf JA 73.4%',
    activities: [
      {
        type: 'drag',
        label: 'Drag & Drop',
        question: 'Was trifft auf das Ergebnis der Bargeld-Abstimmung zu?',
        correct: ['Gegenentwurf mit 73.4% angenommen', 'Initiative mit 54.4% abgelehnt', 'Alle 23 Stände für den Gegenentwurf'],
        distractors: ['Initiative angenommen', 'Stichfrage war entscheidend', 'Gegenentwurf abgelehnt'],
      },
      {
        type: 'slider',
        label: 'Schätzfrage',
        question: 'Wie hoch war der Ja-Anteil zum Bargeld-Gegenentwurf?',
        min: 40, max: 90, step: 1, unit: '%',
        correct: 73, tolerance: 2,
        hint: 'Finde die definitive Zahl bei SRF.'
      },
      {
        type: 'fill',
        label: 'Lückentext',
        question: 'Ergänze: Erstmals seit {0} gab es eine Abstimmung mit Initiative, {1} und {2}. Die Stichfrage kam nicht zur Anwendung, da nur der {3} angenommen wurde.',
        template: 'Erstmals seit {0} gab es eine Abstimmung mit Initiative, {1} und {2}. Die Stichfrage kam nicht zur Anwendung, da nur der {3} angenommen wurde.',
        blanks: ['2010', 'Gegenentwurf', 'Stichfrage', 'Gegenentwurf'],
      },
      {
        type: 'match',
        label: 'Zuordnung',
        question: 'Ordne die Ergebnisse korrekt zu.',
        pairs: [
          { left: 'Bargeld-Initiative', right: '54.4% Nein' },
          { left: 'Bargeld-Gegenentwurf', right: '73.4% Ja' },
          { left: 'Stichfrage', right: 'Nicht anwendbar' },
        ]
      },
    ]
  },

  // ---- KANTONAL ----
  solothurn: {
    tab: 'kantonal',
    title: 'Solothurn: Familienzulagen',
    subtitle: 'Höhere Kinder- und Ausbildungszulagen – JA 59.1%',
    url: 'https://www.srf.ch/news/schweiz/abstimmungen-8-3-2026/abstimmung-kanton-solothurn-ja-zu-hoeheren-kinder-und-ausbildungszulagen',
    result: 'JA 59.1%',
    activities: [
      {
        type: 'slider',
        label: 'Schätzfrage',
        question: 'Wie hoch war der Ja-Anteil in Solothurn für höhere Familienzulagen?',
        min: 40, max: 80, step: 1, unit: '%',
        correct: 59, tolerance: 3,
        hint: 'SRF berichtete über das definitive Ergebnis.'
      },
      {
        type: 'drag',
        label: 'Drag & Drop',
        question: 'Was wurde in Solothurn angenommen, was abgelehnt? Ziehe nur die angenommenen Vorlagen.',
        correct: ['Höhere Familienzulagen'],
        distractors: ['Änderungen Sozialgesetz zulasten Gemeinden'],
      },
      {
        type: 'fill',
        label: 'Lückentext',
        question: 'Ergänze: Die Kinderzulagen steigen von CHF {0} auf CHF {1} pro Monat. Die Mehrkosten von knapp CHF {2} Mio. werden hauptsächlich durch die {3} finanziert.',
        template: 'Die Kinderzulagen steigen von CHF {0} auf CHF {1} pro Monat. Die Mehrkosten von knapp CHF {2} Mio. werden hauptsächlich durch die {3} finanziert.',
        blanks: ['215', '230', '8', 'Arbeitgeber'],
      },
    ]
  },
  aargau: {
    tab: 'kantonal',
    title: 'Aargau: Radaranlagen',
    subtitle: 'Bewilligungspflicht für stationäre Radar – JA 55.5%',
    url: 'https://www.srf.ch/news/schweiz/abstimmungen-8-3-2026/abstimmung-kanton-aargau-ein-nein-zu-fix-installierten-radargeraeten',
    result: 'JA 55.5%',
    activities: [
      {
        type: 'fill',
        label: 'Lückentext',
        question: 'Ergänze: Stationäre Radaranlagen brauchen neu eine Bewilligung des {0}. Diese wird nur erteilt bei einem erheblichen {1}. Semistationäre Anlagen dürfen max. {2} Stunden am selben Ort stehen.',
        template: 'Stationäre Radaranlagen brauchen neu eine Bewilligung des {0}. Diese wird nur erteilt bei einem erheblichen {1}. Semistationäre Anlagen dürfen max. {2} Stunden am selben Ort stehen.',
        blanks: ['Regierungsrats', 'Verkehrssicherheitsdefizit', '72'],
      },
      {
        type: 'match',
        label: 'Zuordnung',
        question: 'Welche kantonale Vorlage gehört zu welchem Kanton und Ergebnis?',
        pairs: [
          { left: 'Radaranlagen – JA 55.5%', right: 'Aargau' },
          { left: 'Familienzulagen – JA 59.1%', right: 'Solothurn' },
          { left: 'Tempo 30 – NEIN 61.5%', right: 'Basel-Landschaft' },
        ]
      },
      {
        type: 'slider',
        label: 'Schätzfrage',
        question: 'Wie hoch war der Ja-Anteil im Aargau für die Radar-Bewilligungspflicht?',
        min: 35, max: 75, step: 1, unit: '%',
        correct: 56, tolerance: 3,
        hint: 'Lies den SRF-Artikel zum Aargauer Ergebnis.'
      },
    ]
  },
  baselland: {
    tab: 'kantonal',
    title: 'Basel-Landschaft: Tempo 30',
    subtitle: 'Initiative und Gegenvorschlag abgelehnt',
    url: 'https://www.srf.ch/news/schweiz/abstimmungen-8-3-2026/abstimmung-kanton-baselland-knappes-nein-bei-praemienvorlage-klares-nein-bei-tempo-30',
    result: 'Initiative NEIN 61.5% / Gegenvorschlag NEIN 55.1%',
    activities: [
      {
        type: 'drag',
        label: 'Drag & Drop',
        question: 'Was stimmt zum Tempo-30-Ergebnis in Basel-Landschaft?',
        correct: ['Initiative mit 61.5% abgelehnt', 'Gegenvorschlag mit 55.1% abgelehnt', 'Beide Vorlagen verworfen'],
        distractors: ['Initiative angenommen', 'Gegenvorschlag angenommen', 'Stichfrage war entscheidend'],
      },
      {
        type: 'fill',
        label: 'Lückentext',
        question: 'Ergänze: Die Tempo-30-{0} wurde mit {1}% Nein abgelehnt. Der {2} scheiterte ebenfalls mit {3}% Nein.',
        template: 'Die Tempo-30-{0} wurde mit {1}% Nein abgelehnt. Der {2} scheiterte ebenfalls mit {3}% Nein.',
        blanks: ['Initiative', '61.5', 'Gegenvorschlag', '55.1'],
      },
      {
        type: 'slider',
        label: 'Schätzfrage',
        question: 'Wie hoch war der Nein-Anteil zur Tempo-30-Initiative in Basel-Landschaft?',
        min: 40, max: 80, step: 1, unit: '%',
        correct: 62, tolerance: 3,
        hint: 'Finde das definitive Ergebnis im SRF-Artikel.'
      },
    ]
  },

  // ---- KOMMUNAL ----
  schaffhausen: {
    tab: 'kommunal',
    title: 'Schaffhausen: ÖV-Finanzierung',
    subtitle: 'Kanton beteiligt sich stärker – JA 65.6%',
    url: 'https://www.srf.ch/news/schweiz/abstimmungen-8-3-2026/abstimmung-kanton-schaffhausen-klares-ja-zur-neuen-oev-finanzierung',
    result: 'JA 65.6%',
    activities: [
      {
        type: 'fill',
        label: 'Lückentext',
        question: 'Ergänze: Der Gemeindeanteil beim Regionalverkehr sinkt von {0}% auf {1}%. Die Obergrenze liegt bei CHF {2} Mio. jährlich.',
        template: 'Der Gemeindeanteil beim Regionalverkehr sinkt von {0}% auf {1}%. Die Obergrenze liegt bei CHF {2} Mio. jährlich.',
        blanks: ['25', '22.5', '4.5'],
      },
      {
        type: 'match',
        label: 'Zuordnung',
        question: 'Welches Thema gehört zu welchem Kanton?',
        pairs: [
          { left: 'ÖV-Finanzierung – JA 65.6%', right: 'Schaffhausen' },
          { left: 'Abwahlentschädigung – JA 66.6%', right: 'Uri' },
          { left: 'E-Voting-Panne', right: 'Basel-Stadt' },
        ]
      },
      {
        type: 'slider',
        label: 'Schätzfrage',
        question: 'Wie hoch war der Ja-Anteil in Schaffhausen für die ÖV-Finanzierung?',
        min: 40, max: 85, step: 1, unit: '%',
        correct: 66, tolerance: 3,
        hint: 'Die Stimmbeteiligung in Schaffhausen war bemerkenswert hoch: 71.9%.'
      },
    ]
  },
  uri: {
    tab: 'kommunal',
    title: 'Uri: Abwahlentschädigung',
    subtitle: 'Keine Abfindung mehr – JA 66.6%',
    url: 'https://www.srf.ch/news/schweiz/abstimmungen-8-3-2026/abstimmung-kanton-uri-volk-streicht-entschaedigung-fuer-abgewaehlte-regierungsmitglieder',
    result: 'JA 66.6%',
    activities: [
      {
        type: 'drag',
        label: 'Drag & Drop',
        question: 'Welche Fakten stimmen zur Uri-Abstimmung?',
        correct: ['Alle 19 Gemeinden stimmten Ja', 'Initiative der Jungen SVP', 'Entschädigung von ca. CHF 90000 gestrichen'],
        distractors: ['Regierung empfahl Annahme', 'Nur 5 Gemeinden dafür', 'Entschädigung wird erhöht'],
      },
      {
        type: 'fill',
        label: 'Lückentext',
        question: 'Ergänze: Die Initiative wurde in allen {0} Gemeinden angenommen. Die Regelung galt seit {1} und kam nur einmal zur Anwendung ({2}).',
        template: 'Die Initiative wurde in allen {0} Gemeinden angenommen. Die Regelung galt seit {1} und kam nur einmal zur Anwendung ({2}).',
        blanks: ['19', '2006', '2024'],
      },
      {
        type: 'slider',
        label: 'Schätzfrage',
        question: 'Wie hoch war der Ja-Anteil in Uri für die Abschaffung der Abwahlentschädigung?',
        min: 40, max: 85, step: 1, unit: '%',
        correct: 67, tolerance: 3,
        hint: 'Das Ergebnis war deutlich. Finde die Zahl auf SRF.'
      },
    ]
  },
  baselstadt: {
    tab: 'kommunal',
    title: 'Basel-Stadt: E-Voting-Panne',
    subtitle: '2048 Stimmen wegen USB-Sticks nicht zählbar',
    url: 'https://www.srf.ch/news/schweiz/abstimmungen-8-3-2026/abstimmung-vom-8-maerz-elektronische-stimmen-im-kanton-basel-stadt-wohl-nicht-zaehlbar',
    result: 'Technische Panne',
    activities: [
      {
        type: 'slider',
        label: 'Schätzfrage',
        question: 'Wie viele elektronisch abgegebene Stimmen konnten in Basel-Stadt nicht gezählt werden?',
        min: 500, max: 5000, step: 100, unit: ' Stimmen',
        correct: 2048, tolerance: 200,
        hint: 'Die genaue Zahl steht in den SRF-Berichten.'
      },
      {
        type: 'fill',
        label: 'Lückentext',
        question: 'Ergänze: {0} elektronische Stimmen konnten wegen defekter {1} nicht entschlüsselt werden. Das Problem lag bei einer externen {2} des Kantons, nicht beim System der {3}.',
        template: '{0} elektronische Stimmen konnten wegen defekter {1} nicht entschlüsselt werden. Das Problem lag bei einer externen {2} des Kantons, nicht beim System der {3}.',
        blanks: ['2048', 'USB-Sticks', 'Hardware-Komponente', 'Post'],
      },
      {
        type: 'drag',
        label: 'Drag & Drop',
        question: 'Was stimmt zur E-Voting-Panne? Ziehe die richtigen Aussagen.',
        correct: ['Defekte USB-Sticks zur Entschlüsselung', 'Betraf Auslandschweizer Stimmen', 'Bundeskanzlei bestätigt Verletzung politischer Rechte'],
        distractors: ['Hackerangriff auf das System', 'Alle Kantone betroffen', 'Stimmen konnten nachträglich gezählt werden'],
      },
    ]
  },

  // ---- WAHLEN ----
  zuerich: {
    tab: 'wahlen',
    title: 'Stadtratswahlen Zürich',
    subtitle: 'Grüne gewinnen, FDP verliert – 7 von 9 Sitzen links',
    url: 'https://www.srf.ch/news/schweiz/abstimmungen-8-3-2026/wahlen-zuerich-und-winterthur-zweiter-wahlgang-fuer-winterthurer-stadtpraesidium',
    result: 'SP 4, Grüne 3, FDP 1, GLP 1',
    activities: [
      {
        type: 'match',
        label: 'Zuordnung',
        question: 'Ordne die neu gewählten Stadträte ihren Parteien zu.',
        pairs: [
          { left: 'Balthasar Glättli (neu)', right: 'Grüne' },
          { left: 'Céline Widmer (neu)', right: 'SP' },
          { left: 'Tobias Langenegger (neu)', right: 'SP' },
        ]
      },
      {
        type: 'fill',
        label: 'Lückentext',
        question: 'Ergänze: Die Grünen halten erstmals {0} Sitze im Stadtrat. Die FDP verlor einen Sitz und hat nur noch {1}. Für das Stadtpräsidium braucht es einen {2}. Wahlgang am {3}. Mai.',
        template: 'Die Grünen halten erstmals {0} Sitze im Stadtrat. Die FDP verlor einen Sitz und hat nur noch {1}. Für das Stadtpräsidium braucht es einen {2}. Wahlgang am {3}. Mai.',
        blanks: ['3', '1', '2.', '10'],
      },
      {
        type: 'drag',
        label: 'Drag & Drop',
        question: 'Welche Aussagen treffen auf die Zürcher Stadtratswahl zu?',
        correct: ['Grüne gewinnen einen Sitz dazu', 'FDP verliert einen Sitz', '7 von 9 Sitzen sind links (SP+Grüne)'],
        distractors: ['SVP gewinnt einen Sitz', 'GLP verliert ihren Sitz', 'Raphael Golta wurde im 1. Wahlgang Stadtpräsident'],
      },
      {
        type: 'slider',
        label: 'Schätzfrage',
        question: 'Wie viele Stimmen erhielt der meistgewählte Stadtrat Raphael Golta (SP)?',
        min: 40000, max: 90000, step: 1000, unit: '',
        correct: 70478, tolerance: 3000,
        hint: 'Golta war klar der Stimmenkönig. Finde die Zahl im SRF-Artikel.'
      },
    ]
  },
  winterthur: {
    tab: 'wahlen',
    title: 'Stadtratswahlen Winterthur',
    subtitle: 'FDP gewinnt Sitz, GLP raus – 2. Wahlgang nötig',
    url: 'https://www.srf.ch/news/schweiz/abstimmungen-8-3-2026/wahlen-winterthur-winterthur-hat-noch-keinen-neuen-stadtpraesidenten',
    result: 'SP 3, FDP 2, Grüne 1, Mitte 1',
    activities: [
      {
        type: 'match',
        label: 'Zuordnung',
        question: 'Ordne die Kandidaten fürs Winterthurer Stadtpräsidium ihren Parteien zu.',
        pairs: [
          { left: 'Kaspar Bopp', right: 'SP' },
          { left: 'Stefan Fritschi', right: 'FDP' },
          { left: 'Michael Künzle (abtretend)', right: 'Die Mitte' },
        ]
      },
      {
        type: 'fill',
        label: 'Lückentext',
        question: 'Ergänze: {0} (SP) führt knapp mit {1} Stimmen vor {2} (FDP). Keiner erreichte das {3}. Der 2. Wahlgang ist am {4}. Mai.',
        template: '{0} (SP) führt knapp mit {1} Stimmen vor {2} (FDP). Keiner erreichte das {3}. Der 2. Wahlgang ist am {4}. Mai.',
        blanks: ['Kaspar Bopp', '15843', 'Stefan Fritschi', 'absolute Mehr', '10'],
      },
      {
        type: 'drag',
        label: 'Drag & Drop',
        question: 'Was stimmt zu den Winterthurer Wahlen?',
        correct: ['GLP verliert ihren Stadtratssitz', 'FDP gewinnt einen zweiten Sitz', 'Stadtrat verschiebt sich leicht nach rechts'],
        distractors: ['SP verliert einen Sitz', 'Grüne gewinnen einen Sitz', 'Stadtpräsident im 1. Wahlgang gewählt'],
      },
    ]
  },
};

// ============ STATE ============

let state = {
  userName: '',
  selectedTopics: [],
  completedActivities: {},  // { topicKey: activityIndex }
  totalRequired: 0,
  totalCompleted: 0,
};

// ============ INIT ============

document.addEventListener('DOMContentLoaded', () => {
  initStartPhase();
  initTabs();
});

// ============ START PHASE ============

function initStartPhase() {
  const checkboxes = document.querySelectorAll('.topic-checkbox input');
  const btnStart = document.getElementById('btnStart');
  const nameInput = document.getElementById('userName');

  checkboxes.forEach(cb => cb.addEventListener('change', validateSelection));
  nameInput.addEventListener('input', validateSelection);

  btnStart.addEventListener('click', startLernkontrolle);
}

function validateSelection() {
  const bundChecked = document.querySelectorAll('input[name="bund"]:checked').length;
  const kantonalChecked = document.querySelectorAll('input[name="kantonal"]:checked').length;
  const kommunalChecked = document.querySelectorAll('input[name="kommunal"]:checked').length;
  const wahlenChecked = document.querySelectorAll('input[name="wahlen"]:checked').length;
  const nameVal = document.getElementById('userName').value.trim();

  const btnStart = document.getElementById('btnStart');
  const errorEl = document.getElementById('startError');

  const errors = [];
  if (!nameVal) errors.push('Bitte gib deinen Namen ein.');
  if (bundChecked < 2) errors.push(`Bund: mindestens 2 Vorlagen wählen (aktuell: ${bundChecked}).`);
  if (kantonalChecked < 1) errors.push(`Kantonal: mindestens 1 Vorlage wählen.`);
  if (kommunalChecked < 1) errors.push(`Kommunal: mindestens 1 Vorlage wählen.`);
  if (wahlenChecked < 1) errors.push(`Wahlen: Zürich oder Winterthur wählen.`);

  if (errors.length > 0) {
    btnStart.disabled = true;
    errorEl.textContent = errors[0];
    errorEl.classList.remove('hidden');
  } else {
    btnStart.disabled = false;
    errorEl.classList.add('hidden');
  }
}

function startLernkontrolle() {
  state.userName = document.getElementById('userName').value.trim();

  // Collect selected topics
  state.selectedTopics = [];
  document.querySelectorAll('.topic-checkbox input:checked').forEach(cb => {
    state.selectedTopics.push(cb.value);
  });

  // Count required activities (1 random per topic)
  state.totalRequired = state.selectedTopics.length;
  state.totalCompleted = 0;
  state.completedActivities = {};

  // Build vorlage cards
  buildVorlagenCards();

  // Update tab visibility
  updateTabVisibility();

  // Switch phase
  showPhase('phase-main');
  updateProgress();
}

// ============ TABS ============

function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
    });
  });
}

function updateTabVisibility() {
  const tabs = ['bund', 'kantonal', 'kommunal', 'wahlen'];
  tabs.forEach(tab => {
    const hasTopics = state.selectedTopics.some(t => VORLAGEN[t]?.tab === tab);
    const tabBtn = document.querySelector(`.tab-btn[data-tab="${tab}"]`);
    if (!hasTopics) {
      tabBtn.style.display = 'none';
    } else {
      tabBtn.style.display = '';
    }
  });

  // Activate first visible tab
  const firstVisible = document.querySelector('.tab-btn[style=""]') || document.querySelector('.tab-btn:not([style*="none"])');
  if (firstVisible) firstVisible.click();
}

// ============ BUILD VORLAGE CARDS ============

function buildVorlagenCards() {
  // Clear all vorlage lists
  ['bund', 'kantonal', 'kommunal', 'wahlen'].forEach(tab => {
    document.getElementById(`vorlagen-${tab}`).innerHTML = '';
  });

  state.selectedTopics.forEach(topicKey => {
    const vorlage = VORLAGEN[topicKey];
    if (!vorlage) return;

    // Pick a random activity
    const activityIndex = Math.floor(Math.random() * vorlage.activities.length);
    const activity = vorlage.activities[activityIndex];

    const card = document.createElement('div');
    card.className = 'vorlage-card';
    card.id = `card-${topicKey}`;
    card.innerHTML = `
      <div class="vorlage-card-header">
        <div>
          <div class="vorlage-title">${vorlage.title}</div>
          <div class="vorlage-subtitle">${vorlage.subtitle}</div>
        </div>
        <span class="vorlage-status pending" id="status-${topicKey}">Offen</span>
      </div>
      <a href="${vorlage.url}" target="_blank" rel="noopener" class="vorlage-link">
        SRF-Seite öffnen und Artikel lesen
      </a>
      <div class="activity-area" id="activity-${topicKey}">
        ${renderActivity(activity, topicKey)}
      </div>
    `;

    document.getElementById(`vorlagen-${vorlage.tab}`).appendChild(card);
  });
}

// ============ RENDER ACTIVITIES ============

function renderActivity(activity, topicKey) {
  let html = '';
  const typeLabels = {
    drag: 'Drag & Drop', slider: 'Schätzfrage', fill: 'Lückentext',
    match: 'Zuordnung', timeline: 'Reihenfolge'
  };
  const typeClass = `type-${activity.type}`;

  html += `<span class="activity-type-label ${typeClass}">${typeLabels[activity.type]}</span>`;
  html += `<h4>${activity.question}</h4>`;

  switch (activity.type) {
    case 'slider':
      html += renderSlider(activity, topicKey);
      break;
    case 'drag':
      html += renderDrag(activity, topicKey);
      break;
    case 'fill':
      html += renderFill(activity, topicKey);
      break;
    case 'match':
      html += renderMatch(activity, topicKey);
      break;
    case 'timeline':
      html += renderTimeline(activity, topicKey);
      break;
  }

  html += `<div class="activity-feedback" id="feedback-${topicKey}"></div>`;
  return html;
}

// --- Slider ---
function renderSlider(activity, topicKey) {
  const mid = Math.round((activity.min + activity.max) / 2);
  return `
    <div class="slider-activity">
      <div class="slider-value" id="sliderVal-${topicKey}">${mid}${activity.unit}</div>
      <input type="range" min="${activity.min}" max="${activity.max}" step="${activity.step}" value="${mid}"
        oninput="document.getElementById('sliderVal-${topicKey}').textContent = this.value + '${activity.unit}'">
      <div class="slider-labels">
        <span>${activity.min}${activity.unit}</span>
        <span>${activity.max}${activity.unit}</span>
      </div>
      ${activity.hint ? `<p style="font-size:0.8rem;color:var(--gray-500);margin-top:0.5rem;">${activity.hint}</p>` : ''}
      <button class="btn-check" onclick="checkSlider('${topicKey}', ${activity.correct}, ${activity.tolerance}, '${activity.unit}')">Überprüfen</button>
    </div>
  `;
}

function checkSlider(topicKey, correct, tolerance, unit) {
  const slider = document.querySelector(`#activity-${topicKey} input[type="range"]`);
  const val = parseInt(slider.value);
  const diff = Math.abs(val - correct);
  const feedback = document.getElementById(`feedback-${topicKey}`);

  if (diff <= tolerance) {
    feedback.className = 'activity-feedback show success';
    feedback.textContent = `Richtig! Der korrekte Wert ist ${correct}${unit}. Deine Schätzung: ${val}${unit}.`;
    markCompleted(topicKey);
  } else if (diff <= tolerance * 2) {
    feedback.className = 'activity-feedback show partial';
    feedback.textContent = `Knapp daneben! Der korrekte Wert ist ${correct}${unit}. Deine Schätzung: ${val}${unit}. Versuche es nochmals oder lies den SRF-Artikel.`;
  } else {
    feedback.className = 'activity-feedback show retry';
    feedback.textContent = `Nicht ganz – lies den SRF-Artikel genauer und versuche es nochmals. Deine Schätzung: ${val}${unit}.`;
  }
}

// --- Drag & Drop ---
function renderDrag(activity, topicKey) {
  const allItems = shuffle([...activity.correct, ...activity.distractors]);
  let html = `
    <div class="drag-zone" id="dropzone-${topicKey}"
      ondragover="event.preventDefault(); this.classList.add('drop-target')"
      ondragleave="this.classList.remove('drop-target')"
      ondrop="handleDrop(event, '${topicKey}')">
      <span style="color:var(--gray-500);font-size:0.85rem;">Ziehe die richtigen Antworten hierher</span>
    </div>
    <div class="drag-zone" id="source-${topicKey}" style="border-style:solid;border-color:var(--gray-200);">
  `;
  allItems.forEach((item, i) => {
    html += `<div class="drag-item" draggable="true" data-value="${item}" data-topic="${topicKey}"
      ondragstart="event.dataTransfer.setData('text/plain', '${i}-${topicKey}'); event.dataTransfer.setData('value', '${item.replace(/'/g, "\\'")}')">${item}</div>`;
  });
  html += `</div>`;
  html += `<button class="btn-check" onclick="checkDrag('${topicKey}')">Überprüfen</button>`;

  // Store correct answers
  setTimeout(() => {
    const el = document.getElementById(`dropzone-${topicKey}`);
    if (el) el.dataset.correct = JSON.stringify(activity.correct);
  }, 0);

  return html;
}

function handleDrop(event, topicKey) {
  event.preventDefault();
  const dropzone = document.getElementById(`dropzone-${topicKey}`);
  dropzone.classList.remove('drop-target');

  const value = event.dataTransfer.getData('value');
  // Remove placeholder text
  const placeholder = dropzone.querySelector('span');
  if (placeholder) placeholder.remove();

  // Move the dragged item
  const allItems = document.querySelectorAll(`[data-topic="${topicKey}"]`);
  allItems.forEach(item => {
    if (item.dataset.value === value && item.parentElement.id !== `dropzone-${topicKey}`) {
      dropzone.appendChild(item);
    }
  });
}

function checkDrag(topicKey) {
  const dropzone = document.getElementById(`dropzone-${topicKey}`);
  const correct = JSON.parse(dropzone.dataset.correct || '[]');
  const dropped = [...dropzone.querySelectorAll('.drag-item')].map(el => el.dataset.value);

  let correctCount = 0;
  dropped.forEach(val => {
    const item = dropzone.querySelector(`.drag-item[data-value="${val}"]`);
    if (correct.includes(val)) {
      item.classList.add('correct');
      item.classList.remove('incorrect');
      correctCount++;
    } else {
      item.classList.add('incorrect');
      item.classList.remove('correct');
    }
  });

  const feedback = document.getElementById(`feedback-${topicKey}`);
  if (correctCount === correct.length && dropped.length === correct.length) {
    feedback.className = 'activity-feedback show success';
    feedback.textContent = `Perfekt! Alle ${correctCount} richtigen Antworten korrekt zugeordnet.`;
    markCompleted(topicKey);
  } else if (correctCount > 0) {
    feedback.className = 'activity-feedback show partial';
    feedback.textContent = `${correctCount} von ${correct.length} richtig. Überprüfe die rot markierten Einträge.`;
  } else {
    feedback.className = 'activity-feedback show retry';
    feedback.textContent = `Noch keine richtige Zuordnung. Lies den SRF-Artikel und versuche es nochmals.`;
  }
}

// --- Fill / Lückentext ---
function renderFill(activity, topicKey) {
  let html = '<div class="fill-text">';
  const parts = activity.template.split(/\{(\d+)\}/);
  let blankIdx = 0;

  parts.forEach((part, i) => {
    if (i % 2 === 0) {
      html += part;
    } else {
      const idx = parseInt(part);
      html += `<input class="fill-input" type="text" data-answer="${activity.blanks[idx]}" data-topic="${topicKey}" placeholder="???" size="${Math.max(activity.blanks[idx].length + 2, 8)}">`;
    }
  });

  html += '</div>';
  html += `<button class="btn-check" onclick="checkFill('${topicKey}')">Überprüfen</button>`;
  return html;
}

function checkFill(topicKey) {
  const inputs = document.querySelectorAll(`.fill-input[data-topic="${topicKey}"]`);
  let correct = 0;
  let total = inputs.length;

  inputs.forEach(input => {
    const answer = input.dataset.answer.toLowerCase().trim();
    const userVal = input.value.toLowerCase().trim();
    if (userVal === answer || levenshtein(userVal, answer) <= 2) {
      input.style.borderBottomColor = 'var(--green)';
      input.style.color = 'var(--green)';
      correct++;
    } else {
      input.style.borderBottomColor = 'var(--red)';
      input.style.color = 'var(--red)';
    }
  });

  const feedback = document.getElementById(`feedback-${topicKey}`);
  if (correct === total) {
    feedback.className = 'activity-feedback show success';
    feedback.textContent = `Alle ${total} Lücken korrekt ausgefüllt!`;
    markCompleted(topicKey);
  } else {
    feedback.className = 'activity-feedback show partial';
    feedback.textContent = `${correct} von ${total} richtig. Rot markierte Felder überprüfen.`;
  }
}

// --- Match ---
function renderMatch(activity, topicKey) {
  const shuffledRight = shuffle([...activity.pairs.map(p => p.right)]);
  let html = '<div class="match-grid">';
  activity.pairs.forEach((pair, i) => {
    html += `
      <div class="match-left" data-topic="${topicKey}" data-pair="${i}" data-side="left" onclick="selectMatch(this, '${topicKey}')">${pair.left}</div>
      <div class="match-connector">&#x2194;</div>
      <div class="match-right" data-topic="${topicKey}" data-pair-right="${activity.pairs.findIndex(p => p.right === shuffledRight[i])}" data-value="${shuffledRight[i]}" data-side="right" onclick="selectMatch(this, '${topicKey}')">${shuffledRight[i]}</div>
    `;
  });
  html += '</div>';
  html += `<button class="btn-check" onclick="checkMatch('${topicKey}')">Überprüfen</button>`;

  // Store pairs for checking
  setTimeout(() => {
    const el = document.getElementById(`activity-${topicKey}`);
    if (el) el.dataset.matchPairs = JSON.stringify(activity.pairs);
  }, 0);

  return html;
}

let matchSelection = {};

function selectMatch(el, topicKey) {
  if (el.classList.contains('matched')) return;
  const side = el.dataset.side;

  // Deselect same side
  document.querySelectorAll(`.match-${side}[data-topic="${topicKey}"]`).forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');

  if (!matchSelection[topicKey]) matchSelection[topicKey] = {};
  matchSelection[topicKey][side] = el;
}

function checkMatch(topicKey) {
  const area = document.getElementById(`activity-${topicKey}`);
  const pairs = JSON.parse(area.dataset.matchPairs || '[]');
  const lefts = area.querySelectorAll('.match-left');
  const rights = area.querySelectorAll('.match-right');

  // Simple check: for each left, find the right in the same row and check if it matches
  let correct = 0;
  lefts.forEach((leftEl, i) => {
    const pairIdx = parseInt(leftEl.dataset.pair);
    const rightEl = rights[i];
    const rightVal = rightEl.dataset.value;

    if (pairs[pairIdx].right === rightVal) {
      leftEl.classList.add('matched');
      rightEl.classList.add('matched');
      correct++;
    } else {
      leftEl.style.borderColor = 'var(--red)';
      rightEl.style.borderColor = 'var(--red)';
      setTimeout(() => {
        leftEl.style.borderColor = '';
        rightEl.style.borderColor = '';
      }, 1500);
    }
  });

  const feedback = document.getElementById(`feedback-${topicKey}`);
  if (correct === pairs.length) {
    feedback.className = 'activity-feedback show success';
    feedback.textContent = `Alle ${pairs.length} Zuordnungen korrekt!`;
    markCompleted(topicKey);
  } else {
    feedback.className = 'activity-feedback show partial';
    feedback.textContent = `${correct} von ${pairs.length} richtig. Die Reihenfolge rechts stimmt noch nicht ganz.`;
  }
}

// --- Timeline ---
function renderTimeline(activity, topicKey) {
  const shuffled = shuffle([...activity.items]);
  let html = `<ul class="timeline-list" id="timeline-${topicKey}">`;
  shuffled.forEach((item, i) => {
    html += `<li class="timeline-item" draggable="true" data-original="${activity.items.indexOf(item)}" data-topic="${topicKey}">${item}</li>`;
  });
  html += '</ul>';
  html += `<p style="font-size:0.8rem;color:var(--gray-500);">Ziehe die Einträge in die richtige Reihenfolge.</p>`;
  html += `<button class="btn-check" onclick="checkTimeline('${topicKey}')">Überprüfen</button>`;

  // Init drag on timeline
  setTimeout(() => initTimelineDrag(topicKey), 100);

  return html;
}

function initTimelineDrag(topicKey) {
  const list = document.getElementById(`timeline-${topicKey}`);
  if (!list) return;

  let dragItem = null;

  list.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('dragstart', () => {
      dragItem = item;
      setTimeout(() => item.style.opacity = '0.4', 0);
    });
    item.addEventListener('dragend', () => {
      item.style.opacity = '1';
      dragItem = null;
    });
    item.addEventListener('dragover', e => {
      e.preventDefault();
      const rect = item.getBoundingClientRect();
      const midY = rect.top + rect.height / 2;
      if (e.clientY < midY) {
        list.insertBefore(dragItem, item);
      } else {
        list.insertBefore(dragItem, item.nextSibling);
      }
    });
  });
}

function checkTimeline(topicKey) {
  const list = document.getElementById(`timeline-${topicKey}`);
  const items = [...list.querySelectorAll('.timeline-item')];
  let correct = true;

  items.forEach((item, i) => {
    if (parseInt(item.dataset.original) === i) {
      item.classList.add('correct');
    } else {
      item.classList.remove('correct');
      correct = false;
    }
  });

  const feedback = document.getElementById(`feedback-${topicKey}`);
  if (correct) {
    feedback.className = 'activity-feedback show success';
    feedback.textContent = `Perfekte Reihenfolge!`;
    markCompleted(topicKey);
  } else {
    const correctCount = items.filter((it, i) => parseInt(it.dataset.original) === i).length;
    feedback.className = 'activity-feedback show partial';
    feedback.textContent = `${correctCount} von ${items.length} an der richtigen Position. Verschiebe die Einträge.`;
  }
}

// ============ COMPLETION ============

function markCompleted(topicKey) {
  if (state.completedActivities[topicKey]) return;
  state.completedActivities[topicKey] = true;
  state.totalCompleted++;

  // Update card UI
  const card = document.getElementById(`card-${topicKey}`);
  if (card) card.classList.add('completed');

  const status = document.getElementById(`status-${topicKey}`);
  if (status) {
    status.className = 'vorlage-status done';
    status.textContent = 'Erledigt';
  }

  // Update tab badges
  updateTabBadges();
  updateProgress();

  // Check if all done
  if (state.totalCompleted >= state.totalRequired) {
    document.getElementById('finishArea').classList.remove('hidden');
    document.getElementById('btnFinish').addEventListener('click', showCertificate);
  }
}

function updateTabBadges() {
  ['bund', 'kantonal', 'kommunal', 'wahlen'].forEach(tab => {
    const topics = state.selectedTopics.filter(t => VORLAGEN[t]?.tab === tab);
    const completed = topics.filter(t => state.completedActivities[t]);
    const tabBtn = document.querySelector(`.tab-btn[data-tab="${tab}"]`);

    if (topics.length > 0 && completed.length === topics.length) {
      tabBtn.classList.add('completed');
    }
  });
}

function updateProgress() {
  const pct = state.totalRequired > 0 ? (state.totalCompleted / state.totalRequired) * 100 : 0;
  const bar = document.getElementById('progressBar');
  const text = document.getElementById('progressText');
  bar.style.width = Math.max(pct, 15) + '%';
  text.textContent = `${state.totalCompleted} / ${state.totalRequired} Lernbestätigungen`;
}

// ============ CERTIFICATE ============

function showCertificate() {
  const code = generateCode();
  const now = new Date();

  document.getElementById('certName').textContent = state.userName;
  document.getElementById('certCode').textContent = code;
  document.getElementById('certDate').textContent = now.toLocaleDateString('de-CH', { day: '2-digit', month: 'long', year: 'numeric' });
  document.getElementById('certNameInput').value = state.userName;

  // Stats
  const categoriesUsed = new Set(state.selectedTopics.map(t => VORLAGEN[t]?.tab)).size;
  document.getElementById('certStats').innerHTML = `
    <div class="cert-stat">
      <span class="cert-stat-num">${state.totalCompleted}</span>
      <span class="cert-stat-label">Lernbestätigungen</span>
    </div>
    <div class="cert-stat">
      <span class="cert-stat-num">${state.selectedTopics.length}</span>
      <span class="cert-stat-label">Vorlagen bearbeitet</span>
    </div>
    <div class="cert-stat">
      <span class="cert-stat-num">${categoriesUsed}</span>
      <span class="cert-stat-label">Kategorien</span>
    </div>
  `;

  // Details
  const groups = { bund: 'Bund', kantonal: 'Kantonal', kommunal: 'Kommunal', wahlen: 'Wahlen ZH/WI' };
  let detailsHtml = '';
  Object.entries(groups).forEach(([tab, label]) => {
    const topics = state.selectedTopics.filter(t => VORLAGEN[t]?.tab === tab);
    if (topics.length > 0) {
      detailsHtml += `<div class="cert-detail-group"><h4>${label}</h4><ul class="cert-detail-list">`;
      topics.forEach(t => {
        detailsHtml += `<li>${VORLAGEN[t].title}</li>`;
      });
      detailsHtml += '</ul></div>';
    }
  });
  document.getElementById('certDetails').innerHTML = detailsHtml;

  // Name update
  document.getElementById('btnUpdateName').addEventListener('click', () => {
    const newName = document.getElementById('certNameInput').value.trim();
    if (newName) {
      document.getElementById('certName').textContent = newName;
      state.userName = newName;
    }
  });

  // Print
  document.getElementById('btnPrint').addEventListener('click', () => window.print());

  // Restart
  document.getElementById('btnRestart').addEventListener('click', () => {
    state = { userName: '', selectedTopics: [], completedActivities: {}, totalRequired: 0, totalCompleted: 0 };
    matchSelection = {};
    showPhase('phase-start');
    document.getElementById('userName').value = '';
    document.querySelectorAll('.topic-checkbox input').forEach(cb => cb.checked = false);
    document.getElementById('btnStart').disabled = true;
  });

  showPhase('phase-certificate');
}

function generateCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const timestamp = Date.now().toString(36).toUpperCase();
  let random = '';
  for (let i = 0; i < 4; i++) {
    random += chars[Math.floor(Math.random() * chars.length)];
  }
  // Create unique-looking code: AB-1234-XY
  const parts = (timestamp + random).slice(-8);
  return `${parts.slice(0,2)}-${parts.slice(2,6)}-${parts.slice(6,8)}`;
}

// ============ HELPERS ============

function showPhase(phaseId) {
  document.querySelectorAll('.phase').forEach(p => p.classList.remove('active'));
  document.getElementById(phaseId).classList.add('active');
  window.scrollTo(0, 0);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function levenshtein(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b[i - 1] === a[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}
