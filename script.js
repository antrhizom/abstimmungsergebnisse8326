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
    subtitle: 'Abschaffung der «Heiratsstrafe»',
    url: 'https://www.srf.ch/news/abstimmung-individualbesteuerung-vom-8-3-2026',
    result: 'JA ~56%',
    activities: [
      {
        type: 'slider',
        label: 'Schätzfrage',
        question: 'Wie hoch war der Ja-Anteil bei der Individualbesteuerung laut erster Hochrechnung?',
        min: 30, max: 80, step: 1, unit: '%',
        correct: 56, tolerance: 3,
        hint: 'Finde die Hochrechnungszahl auf der SRF-Seite.'
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
        template: 'Mit der Individualbesteuerung wird jede Person ihr eigenes {0} und {1} versteuern. Für alle gilt derselbe {2}.',
        blanks: ['Einkommen', 'Vermögen', 'Steuertarif'],
      },
    ]
  },
  srg: {
    tab: 'bund',
    title: 'SRG-Initiative',
    subtitle: '«200 Franken sind genug!»',
    url: 'https://www.srf.ch/news/schweiz/abstimmungen-8-3-2026/abstimmungen-vom-8-maerz-1-hochrechnung-62-nein-fuer-srg-initiative',
    result: 'NEIN ~62%',
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
        correct: 62, tolerance: 3,
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
    ]
  },
  klimafonds: {
    tab: 'bund',
    title: 'Klimafonds-Initiative',
    subtitle: 'Mehr Bundesmittel für Klimaschutz',
    url: 'https://www.srf.ch/news/abstimmungen-vom-8-3-2026',
    result: 'NEIN ~71%',
    activities: [
      {
        type: 'slider',
        label: 'Schätzfrage',
        question: 'Wie hoch war der Nein-Anteil bei der Klimafonds-Initiative?',
        min: 40, max: 90, step: 1, unit: '%',
        correct: 71, tolerance: 3,
        hint: 'Die Hochrechnung findest du auf srf.ch.'
      },
      {
        type: 'fill',
        label: 'Lückentext',
        question: 'Ergänze die Lücken zur Klimafonds-Initiative.',
        template: 'Der Bund soll einen {0} einrichten und jährlich {1} bis {2} Prozent des BIP einzahlen.',
        blanks: ['Fonds', '0.5', '1'],
      },
      {
        type: 'match',
        label: 'Zuordnung',
        question: 'Ordne die Ergebnisse den Vorlagen zu.',
        pairs: [
          { left: 'Klimafonds', right: '~71% Nein' },
          { left: 'SRG-Initiative', right: '~62% Nein' },
          { left: 'Individualbesteuerung', right: '~56% Ja' },
        ]
      },
    ]
  },
  bargeld: {
    tab: 'bund',
    title: 'Bargeld-Initiative & Gegenentwurf',
    subtitle: 'Verfassungsverankerung des Frankens',
    url: 'https://www.srf.ch/news/schweiz/abstimmungen-8-3-2026/abstimmungen-vom-8-maerz-hochrechnung-ja-zum-gegenentwurf-der-bargeld-initiative-1',
    result: 'Gegenentwurf JA ~73%',
    activities: [
      {
        type: 'drag',
        label: 'Drag & Drop',
        question: 'Was verlangt die Bargeld-Initiative? Ziehe die korrekten Forderungen in die Box.',
        correct: ['Bargeld in Verfassung verankern', 'Genügend Münzen und Noten sicherstellen', 'Währungsersatz nur mit Volksabstimmung'],
        distractors: ['Bargeld komplett abschaffen', 'Digitale Währung einführen', 'Goldstandard wieder einführen'],
      },
      {
        type: 'slider',
        label: 'Schätzfrage',
        question: 'Wie hoch war der Ja-Anteil zum Bargeld-Gegenentwurf?',
        min: 40, max: 90, step: 1, unit: '%',
        correct: 73, tolerance: 3,
        hint: 'Die GFS-Bern-Hochrechnung findest du bei SRF.'
      },
      {
        type: 'fill',
        label: 'Lückentext',
        question: 'Ergänze: Erstmals seit {0} gab es auf Bundesebene eine Abstimmung über Initiative, {1} und {2}.',
        template: 'Erstmals seit {0} gab es auf Bundesebene eine Abstimmung über Initiative, {1} und {2}.',
        blanks: ['2010', 'Gegenentwurf', 'Stichfrage'],
      },
    ]
  },

  // ---- KANTONAL ----
  solothurn: {
    tab: 'kantonal',
    title: 'Solothurn: Familienzulagen',
    subtitle: 'Höhere Kinder- und Ausbildungszulagen',
    url: 'https://www.srf.ch/news/schweiz/abstimmungen-8-3-2026/abstimmung-kanton-solothurn-ja-zu-hoeheren-kinder-und-ausbildungszulagen',
    result: 'JA 59%',
    activities: [
      {
        type: 'slider',
        label: 'Schätzfrage',
        question: 'Wie hoch war der Ja-Anteil in Solothurn für höhere Familienzulagen?',
        min: 40, max: 80, step: 1, unit: '%',
        correct: 59, tolerance: 4,
        hint: 'SRF berichtete über das Ergebnis.'
      },
      {
        type: 'drag',
        label: 'Drag & Drop',
        question: 'Was wurde in Solothurn angenommen, was abgelehnt?',
        correct: ['Höhere Familienzulagen'],
        distractors: ['Änderungen Sozialgesetz zulasten Gemeinden'],
      },
    ]
  },
  aargau: {
    tab: 'kantonal',
    title: 'Aargau: Radaranlagen',
    subtitle: 'Bewilligungspflicht für stationäre Radar',
    url: 'https://www.srf.ch/news/urnengaenge-im-kanton-aargau-08-03-2026',
    result: 'Ergebnis ausstehend',
    activities: [
      {
        type: 'fill',
        label: 'Lückentext',
        question: 'Ergänze: Im Aargau wird über eine {0} abgestimmt, die eine {1} für stationäre {2} verlangt.',
        template: 'Im Aargau wird über eine {0} abgestimmt, die eine {1} für stationäre {2} verlangt.',
        blanks: ['Initiative', 'Bewilligungspflicht', 'Radaranlagen'],
      },
      {
        type: 'match',
        label: 'Zuordnung',
        question: 'Welche Vorlage gehört zu welchem Kanton?',
        pairs: [
          { left: 'Radaranlagen', right: 'Aargau' },
          { left: 'Familienzulagen', right: 'Solothurn' },
          { left: 'Tempo 30', right: 'Basel-Landschaft' },
        ]
      },
    ]
  },
  baselland: {
    tab: 'kantonal',
    title: 'Basel-Landschaft: Tempo 30',
    subtitle: 'Volksabstimmung für Tempo-30-Zonen',
    url: 'https://www.srf.ch/news/kantonale-und-kommunale-abstimmungen-08-03-2026',
    result: 'Ergebnis ausstehend',
    activities: [
      {
        type: 'drag',
        label: 'Drag & Drop',
        question: 'Was verlangt die Vorlage in Basel-Landschaft?',
        correct: ['Einverständnis der Stimmberechtigten für Tempo-30 auf Hauptstrassen'],
        distractors: ['Generelles Tempolimit 30 im ganzen Kanton', 'Abschaffung aller Tempo-30-Zonen'],
      },
      {
        type: 'fill',
        label: 'Lückentext',
        question: 'Gemeinden sollen beim Kanton nur dann eine {0} auf einer {1} beantragen können, wenn das {2} der Stimmberechtigten vorliegt.',
        template: 'Gemeinden sollen beim Kanton nur dann eine {0} auf einer {1} beantragen können, wenn das {2} der Stimmberechtigten vorliegt.',
        blanks: ['Tempo-30-Zone', 'Hauptstrasse', 'Einverständnis'],
      },
    ]
  },

  // ---- KOMMUNAL ----
  schaffhausen: {
    tab: 'kommunal',
    title: 'Schaffhausen: ÖV-Finanzierung',
    subtitle: 'Kanton soll ÖV stärker mitfinanzieren',
    url: 'https://www.srf.ch/news/kantonale-und-kommunale-abstimmungen-08-03-2026',
    result: 'Ergebnis ausstehend',
    activities: [
      {
        type: 'fill',
        label: 'Lückentext',
        question: 'In Schaffhausen geht es um die Frage, ob der {0} den {1} stärker mitfinanzieren und damit die {2} entlasten soll.',
        template: 'In Schaffhausen geht es um die Frage, ob der {0} den {1} stärker mitfinanzieren und damit die {2} entlasten soll.',
        blanks: ['Kanton', 'ÖV', 'Gemeinden'],
      },
      {
        type: 'match',
        label: 'Zuordnung',
        question: 'Welches Thema gehört zu welcher Gemeinde/Region?',
        pairs: [
          { left: 'ÖV-Finanzierung', right: 'Schaffhausen' },
          { left: 'Abwahlentschädigung', right: 'Uri' },
          { left: 'E-Voting-Panne', right: 'Basel-Stadt' },
        ]
      },
    ]
  },
  uri: {
    tab: 'kommunal',
    title: 'Uri: Abwahlentschädigung',
    subtitle: 'Keine Abfindung für abgewählte Regierungsräte?',
    url: 'https://www.srf.ch/news/kantonale-und-kommunale-abstimmungen-08-03-2026',
    result: 'Ergebnis ausstehend',
    activities: [
      {
        type: 'drag',
        label: 'Drag & Drop',
        question: 'Was soll in Uri geändert werden?',
        correct: ['Abwahlentschädigung für Regierungsräte abschaffen'],
        distractors: ['Höhere Löhne für Regierungsräte', 'Neue Regierungsratssitze schaffen'],
      },
      {
        type: 'fill',
        label: 'Lückentext',
        question: 'Abgewählte {0} sollen in Zukunft keine {1} mehr erhalten.',
        template: 'Abgewählte {0} sollen in Zukunft keine {1} mehr erhalten.',
        blanks: ['Regierungsräte', 'Abwahlentschädigung'],
      },
    ]
  },
  baselstadt: {
    tab: 'kommunal',
    title: 'Basel-Stadt: E-Voting-Panne',
    subtitle: '2048 Stimmen wegen USB-Sticks ungültig',
    url: 'https://www.srf.ch/news/abstimmungen-vom-8-3-2026',
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
        question: 'In Basel-Stadt konnten {0} elektronisch abgegebene Stimmen wegen nicht verwendbarer {1} nicht gelesen werden.',
        template: 'In Basel-Stadt konnten {0} elektronisch abgegebene Stimmen wegen nicht verwendbarer {1} nicht gelesen werden.',
        blanks: ['2048', 'USB-Sticks'],
      },
    ]
  },

  // ---- WAHLEN ----
  zuerich: {
    tab: 'wahlen',
    title: 'Stadtratswahlen Zürich',
    subtitle: '9 Sitze – Enges Rennen',
    url: 'https://www.srf.ch/news/schweiz/wahlen-stadt-zuerich-enges-rennen-um-die-neun-stadtratssitze-in-zuerich',
    result: 'Ergebnisse laufend',
    activities: [
      {
        type: 'match',
        label: 'Zuordnung',
        question: 'Ordne die Kandidaten ihren Parteien zu.',
        pairs: [
          { left: 'Balthasar Glättli', right: 'Grüne' },
          { left: 'Ueli Bamert', right: 'SVP' },
          { left: 'Serap Kahriman', right: 'GLP' },
        ]
      },
      {
        type: 'fill',
        label: 'Lückentext',
        question: 'Die SVP ist seit {0} Jahren nicht mehr im Zürcher {1} vertreten. Balthasar Glättli sass {2} Jahre im Nationalrat.',
        template: 'Die SVP ist seit {0} Jahren nicht mehr im Zürcher {1} vertreten. Balthasar Glättli sass {2} Jahre im Nationalrat.',
        blanks: ['35', 'Stadtrat', '14'],
      },
    ]
  },
  winterthur: {
    tab: 'wahlen',
    title: 'Stadtratswahlen Winterthur',
    subtitle: 'Duell ums Stadtpräsidium',
    url: 'https://www.srf.ch/news/schweiz/wahlen-stadt-winterthur-winterthur-vor-richtungswahl-enges-duell-ums-stadtpraesidium',
    result: 'Ergebnisse laufend',
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
        question: 'Stadtpräsident {0} prägte Winterthur {1} Jahre. Um seine Nachfolge kämpfen {2} (SP) und {3} (FDP).',
        template: 'Stadtpräsident {0} prägte Winterthur {1} Jahre. Um seine Nachfolge kämpfen {2} (SP) und {3} (FDP).',
        blanks: ['Michael Künzle', '14', 'Kaspar Bopp', 'Stefan Fritschi'],
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
