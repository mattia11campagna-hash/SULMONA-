/* ==========================================================
   Sulmona – contenuti della pagina
   Per modificare i testi basta intervenire su questo oggetto.
   ========================================================== */
const CONTENUTI = {
  intestazione: {
    sopratitolo: "Abruzzo · Provincia dell'Aquila · Valle Peligna",
    titolo: "Sulmona",
    benvenuto:
      "Benvenuti a Sulmona, la città di Ovidio e dei confetti, adagiata nel cuore della Valle Peligna, tra la Maiella e il Morrone.",
    foto: {
      file: "panorama-sulmona.jpg",
      didascalia:
        "Veduta di Sulmona nella Valle Peligna, con il Morrone sullo sfondo"
    }
  },

  introduzione:
    "Sulmona è un'affascinante città nel cuore dell'Abruzzo, in provincia dell'Aquila, a ridosso del Parco Nazionale della Maiella. Sorge al centro della Valle Peligna, tra il torrente Vella e il fiume Gizio, ed è sovrastata dalle imponenti montagne della Maiella e del Morrone. Celebre nel mondo per aver dato i natali al poeta latino Ovidio e per la sua secolare tradizione nella produzione dei confetti, è anche sede vescovile della diocesi di Sulmona-Valva.",

  inBreve: [
    { etichetta: "Dove", valore: "Valle Peligna, tra il torrente Vella e il fiume Gizio" },
    { etichetta: "Montagne", valore: "Maiella e Morrone" },
    { etichetta: "Famosa per", valore: "Ovidio e i confetti" },
    { etichetta: "Natura", valore: "Sede amministrativa del Parco Nazionale della Maiella" }
  ],

  storia: [
    {
      data: "III sec. a.C.",
      titolo: "Capitale dei Peligni",
      testo:
        "Sulmona era la capitale fortificata dei Peligni italici, situata in origine sulle alture del monte Mitra; si spostò nell'attuale posizione in età romana."
    },
    {
      data: "81 a.C.",
      titolo: "Distrutta da Silla",
      testo:
        "Con il nome di Sulmo era uno dei tre municipi peligni. Venne distrutta da Silla dopo una ribellione per l'applicazione della Lex Cornelia de Suffragiis."
    },
    {
      data: "43 a.C.",
      titolo: "Nasce Ovidio",
      testo: "Nel municipio romano di Sulmo nasce il poeta latino Publio Ovidio Nasone."
    },
    {
      data: "1233",
      titolo: "Capitale con Federico II",
      testo:
        "In età sveva Federico II la nomina capitale del Giustizierato d'Abruzzo (1233-1273): la crescita demografica ed economica fa nascere nuovi borghi fuori dalle antiche mura, insieme a zecca e oreficeria."
    },
    {
      data: "1302",
      titolo: "Le nuove mura",
      testo:
        "Viene completato il nuovo perimetro murario settentrionale, con nuove porte: la città assume il caratteristico aspetto fusiforme che conserva ancora oggi."
    },
    {
      data: "1443",
      titolo: "I torrioni aragonesi",
      testo:
        "Sotto Alfonso I d'Aragona vengono edificati torrioni angolari con muratura a scarpa. Oggi resta visibile la torre presso Porta Iapasseri."
    },
    {
      data: "1610 – 1656",
      titolo: "I Borghese e la peste",
      testo:
        "Dopo il dominio cinquecentesco dei De Lannoy, la città passa con titolo principesco ai Borghese (1610). Nel 1656 una terribile peste e la mancanza di cavalieri portano alla sospensione dell'antica giostra cavalleresca."
    },
    {
      data: "1706",
      titolo: "Il terremoto",
      testo:
        "Un disastroso terremoto provoca la caduta di alcune porte cittadine. Le ricostruzioni successive inglobano tratti delle antiche mura nelle abitazioni."
    },
    {
      data: "XX secolo",
      titolo: "Medaglia d'Argento",
      testo:
        "Per la lotta partigiana nella Seconda Guerra Mondiale, Sulmona è decorata con la Medaglia d'Argento al Valor Militare."
    },
    {
      data: "1995",
      titolo: "Rinasce la Giostra",
      testo:
        "Dopo la sospensione seicentesca, torna la Giostra Cavalleresca di Sulmona."
    }
  ],

  confetto: {
    titolo: "Il confetto",
    paragrafi: [
      "La tradizione confettiera di Sulmona ha origini secolari. È legata alle monache clarisse, alle quali si devono raffinate composizioni decorative come fiori, spighe e grappoli, e ad antiche dinastie di maestri confettieri: Panfilo La Civita, attestato già nel 1698, e lo stabilimento della famiglia Pelino, documentato dal 1783.",
      "Oggi il confetto sulmonese è un'eccellenza dell'artigianato locale, da ammirare attraverso dimostrazioni pratiche e degustazioni. È il simbolo per eccellenza delle celebrazioni della vita: dai battesimi ai matrimoni, fino a ogni grande ricorrenza."
    ],
    punti: [
      { numero: "1698", testo: "Panfilo La Civita, maestro confettiere" },
      { numero: "1783", testo: "Lo stabilimento della famiglia Pelino" }
    ],
    foto: {
      file: "confetti-fiori.jpg",
      didascalia: "Composizioni artistiche di confetti a forma di fiori"
    }
  },

  cosaVedere: {
    intro: "Sette tappe per conoscere Sulmona alla prima visita.",
    tappe: [
      {
        nome: "Statua di Ovidio",
        luogo: "Piazza XX Settembre",
        testo:
          "Inaugurata nel 1925 su progetto dello scultore Ettore Ferrari, raffigura in bronzo il celebre poeta latino nato a Sulmona, nell'atto pensoso di meditare.",
        file: "statua-ovidio.jpg",
        didascalia: "La statua in bronzo di Ovidio in Piazza XX Settembre"
      },
      {
        nome: "Cattedrale di San Panfilo",
        luogo: "Sede vescovile",
        testo:
          "È il principale luogo di culto della città e sede vescovile della diocesi di Sulmona-Valva. Custodisce un prezioso fonte battesimale marmoreo del XVIII secolo.",
        didascalia: "La Cattedrale di San Panfilo"
      },
      {
        nome: "Complesso della Santissima Annunziata",
        luogo: "Musei civici",
        testo:
          "Fondato nel 1320 come ospedale per pellegrini, unisce la chiesa barocca al palazzo gotico-rinascimentale, sede dei musei civici, affiancato dal campanile più alto della città.",
        file: "annunziata.jpg",
        didascalia: "La facciata della chiesa barocca e del palazzo gotico-rinascimentale della Santissima Annunziata"
      },
      {
        nome: "Piazza Garibaldi",
        luogo: "Già “piazza del Mercato”",
        testo:
          "Chiamata “piazza del Mercato” fino al 1880, è la piazza principale di Sulmona, incorniciata dall'acquedotto medievale e teatro delle più importanti manifestazioni cittadine.",
        file: "acquedotto-piazza-garibaldi.jpg",
        didascalia: "Gli archi dell'acquedotto medievale in Piazza Garibaldi"
      },
      {
        nome: "Monastero di Santa Chiara",
        luogo: "Museo Diocesano",
        testo:
          "Risalente al 1269 e legato alla tradizione artistica dei confetti delle monache di clausura, ospita oggi il Museo Diocesano e il Polo Culturale Civico Diocesano.",
        didascalia: "L'ex Monastero di Santa Chiara"
      },
      {
        nome: "Antica Confetteria Del Corso",
        luogo: "Bottega storica",
        testo:
          "Custode di una storia artigianale tramandata da oltre trecento anni a partire dal confettaro Panfilo La Civita, offre esperienze dedicate alla storia e alla lavorazione dei confetti e delle composizioni artistiche.",
        file: "confetti-lavorazione.jpg",
        didascalia: "La lavorazione a mano di un fiore di confetti"
      },
      {
        nome: "Cimitero Monumentale",
        luogo: "Luogo della memoria",
        testo:
          "Luogo simbolico della memoria collettiva cittadina, raccoglie monumenti funerari e architetture che raccontano la storia delle famiglie e della comunità sulmonese.",
        didascalia: "Monumenti funerari del Cimitero Monumentale"
      }
    ],
    ancheInCitta: [
      "Chiesa di Santa Maria della Tomba",
      "Teatro Comunale Maria Caniglia",
      "Le storiche confetterie"
    ],
    neiDintorni: [
      "Eremo di Sant'Onofrio al Morrone",
      "Badia Morronese",
      "Santuario di Ercole Curino"
    ]
  },

  sapori: {
    intro:
      "Il protagonista indiscusso è il confetto di Sulmona, in molte tipologie, composizioni artistiche (come fiori e bouquet) e lavorazioni artigianali. Ma la tavola sulmonese ha molto altro da offrire.",
    gruppi: [
      {
        titolo: "In tavola",
        voci: [
          "Maccheroni alla chitarra con sugo d'agnello",
          "Sagne e fagioli",
          "Arrosticini"
        ]
      },
      {
        titolo: "Dolci della tradizione",
        voci: [
          "Torroni artigianali",
          "Scarponi e ceci ripieni, tipici di Natale",
          "Fiadoni al pecorino, immancabili a Pasqua",
          "Cassata sulmonese: pan di Spagna, creme e croccante"
        ]
      },
      {
        titolo: "Prodotti del territorio",
        voci: ["Aglio rosso di Sulmona", "Vini DOC della Valle Peligna"]
      }
    ],
    evidenza: {
      titolo: "La regina dei dolci",
      testo:
        "La cassata sulmonese è considerata la regina dei dolci locali, grazie al suo goloso incontro di pan di Spagna, creme e croccante."
    },
    foto: {
      file: "confetti-composizione.jpg",
      didascalia: "Un fiore di confetti con petali e foglie, composto a mano"
    }
  },

  eventi: {
    intro: "Un calendario di appuntamenti storici e tradizionali che animano la città.",
    elenco: [
      {
        quando: "Settimana Santa",
        nome: "Processione del Venerdì Santo e La Madonna che scappa",
        testo:
          "Le tradizioni pasquali culminano con la suggestiva Processione del Venerdì Santo e il celebre rito de La Madonna che scappa in piazza."
      },
      {
        quando: "Inizio giugno",
        nome: "La Cordesca",
        testo:
          "È la “Giostra” dedicata ai bambini, protagonisti assoluti di sfilate e gare: il futuro della tradizione cavalleresca cittadina."
      },
      {
        quando: "Estate (fine luglio – inizio agosto)",
        nome: "Giostra Cavalleresca di Sulmona",
        testo:
          "Rinata nel 1995 dopo la sospensione seicentesca, è una spettacolare sfilata storica seguita da un'emozionante gara tra cavalieri."
      }
    ],
    foto: {
      file: "",
      didascalia: "Cavalieri in costume durante la Giostra Cavalleresca in Piazza Garibaldi"
    }
  },

  faq: [
    {
      domanda: "Dove si trova Sulmona e qual è il suo contesto naturale?",
      risposta:
        "Sulmona sorge nel cuore dell'Abruzzo, al centro della Valle Peligna tra il torrente Vella e il fiume Gizio, ed è sovrastata dalle montagne della Maiella e del Morrone. È inoltre sede amministrativa del Parco Nazionale della Maiella, che offre numerose opportunità per l'escursionismo."
    },
    {
      domanda: "Perché Sulmona è così famosa nel mondo?",
      risposta:
        "Soprattutto per aver dato i natali, nel 43 a.C., al poeta latino Publio Ovidio Nasone e per la sua secolare tradizione nella produzione artigianale dei confetti, legata sia al sapere delle monache clarisse nelle composizioni decorative sia alle storiche confetterie locali."
    },
    {
      domanda: "Quali sono i principali monumenti da visitare?",
      risposta:
        "Nel centro storico spiccano la Cattedrale di San Panfilo, la Chiesa di Santa Maria della Tomba e il Complesso della Santissima Annunziata, che ospita i musei civici. Meritano una visita anche Piazza Garibaldi, la Statua di Ovidio, l'ex Monastero di Santa Chiara e il Teatro Comunale Maria Caniglia. Nei dintorni: la Badia Morronese, l'Eremo di Sant'Onofrio e il Santuario di Ercole Curino."
    },
    {
      domanda: "Quali sono le tradizioni e gli eventi più importanti dell'anno?",
      risposta:
        "Le celebrazioni della Settimana Santa, con la Processione del Venerdì Santo e il rito de La Madonna che scappa in piazza. In estate la Giostra Cavalleresca di Sulmona, preceduta a giugno da La Cordesca dedicata ai bambini."
    },
    {
      domanda: "Cosa assaggiare oltre ai confetti?",
      risposta:
        "Maccheroni alla chitarra con sugo d'agnello, sagne e fagioli e arrosticini, con l'aglio rosso di Sulmona e i vini DOC della Valle Peligna. Tra i dolci: torroni artigianali, scarponi, ceci ripieni, fiadoni pasquali e la celebre cassata sulmonese."
    },
    {
      domanda: "Dove trovo orari e biglietti?",
      risposta: "Orari e biglietti sono disponibili sul sito ufficiale:",
      link: true
    }
  ],

  orariBiglietti: {
    etichetta: "Orari e biglietti",
    url: "https://www.fortezzacivitella.it"
  }
};

/* ==========================================================
   Costruzione della pagina
   ========================================================== */
(function () {
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Foto: se "file" è valorizzato mostra l'immagine, altrimenti un riquadro segnaposto
  function foto(f, classe = "") {
    if (f.file) {
      return `<figure class="foto ${classe}"><img src="${esc(f.file)}" alt="${esc(f.didascalia)}" loading="lazy"><figcaption>${esc(f.didascalia)}</figcaption></figure>`;
    }
    return `<figure class="foto segnaposto ${classe}" role="img" aria-label="Segnaposto foto: ${esc(f.didascalia)}">
      <div class="segnaposto-area"><span class="segnaposto-icona" aria-hidden="true"></span><span class="segnaposto-etichetta">Foto</span></div>
      <figcaption>${esc(f.didascalia)}</figcaption></figure>`;
  }

  const C = CONTENUTI;
  const ob = C.orariBiglietti;

  // Intestazione
  $("#sopratitolo").textContent = C.intestazione.sopratitolo;
  $("#titolo").textContent = C.intestazione.titolo;
  $("#benvenuto").textContent = C.intestazione.benvenuto;
  $("#foto-hero").innerHTML = foto(C.intestazione.foto, "foto-hero");
  document.querySelectorAll(".link-orari").forEach((a) => (a.href = ob.url));

  // Introduzione
  $("#intro-testo").textContent = C.introduzione;
  $("#in-breve").innerHTML = C.inBreve
    .map((i) => `<div><dt>${esc(i.etichetta)}</dt><dd>${esc(i.valore)}</dd></div>`)
    .join("");

  // Storia
  $("#timeline").innerHTML = C.storia
    .map(
      (t) => `<li class="tappa-storia">
        <span class="data">${esc(t.data)}</span>
        <div class="contenuto"><h3>${esc(t.titolo)}</h3><p>${esc(t.testo)}</p></div>
      </li>`
    )
    .join("");

  // Confetto
  $("#confetto-testo").innerHTML = C.confetto.paragrafi.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#confetto-punti").innerHTML = C.confetto.punti
    .map((p) => `<li><strong>${esc(p.numero)}</strong><span>${esc(p.testo)}</span></li>`)
    .join("");
  $("#confetto-foto").innerHTML = foto(C.confetto.foto);

  // Cosa vedere
  $("#vedere-intro").textContent = C.cosaVedere.intro;
  $("#tappe").innerHTML = C.cosaVedere.tappe
    .map(
      (t, i) => `<article class="card-tappa">
        ${foto({ file: t.file || "", didascalia: t.didascalia })}
        <div class="card-corpo">
          <span class="numero">${String(i + 1).padStart(2, "0")}</span>
          <h3>${esc(t.nome)}</h3>
          <p class="luogo">${esc(t.luogo)}</p>
          <p>${esc(t.testo)}</p>
        </div>
      </article>`
    )
    .join("");
  $("#anche-citta").innerHTML = C.cosaVedere.ancheInCitta.map((x) => `<li>${esc(x)}</li>`).join("");
  $("#dintorni").innerHTML = C.cosaVedere.neiDintorni.map((x) => `<li>${esc(x)}</li>`).join("");

  // Sapori
  $("#sapori-intro").textContent = C.sapori.intro;
  $("#sapori-gruppi").innerHTML = C.sapori.gruppi
    .map((g) => `<div class="gruppo"><h3>${esc(g.titolo)}</h3><ul>${g.voci.map((v) => `<li>${esc(v)}</li>`).join("")}</ul></div>`)
    .join("");
  $("#sapori-evidenza").innerHTML = `<h3>${esc(C.sapori.evidenza.titolo)}</h3><p>${esc(C.sapori.evidenza.testo)}</p>`;
  $("#sapori-foto").innerHTML = foto(C.sapori.foto);

  // Eventi
  $("#eventi-intro").textContent = C.eventi.intro;
  $("#eventi-elenco").innerHTML = C.eventi.elenco
    .map(
      (e) => `<article class="evento"><p class="quando">${esc(e.quando)}</p><h3>${esc(e.nome)}</h3><p>${esc(e.testo)}</p></article>`
    )
    .join("");
  $("#eventi-foto").innerHTML = foto(C.eventi.foto);

  // FAQ
  $("#faq-elenco").innerHTML = C.faq
    .map(
      (f) => `<details><summary>${esc(f.domanda)}</summary><div class="risposta"><p>${esc(f.risposta)}${
        f.link ? ` <a href="${esc(ob.url)}" target="_blank" rel="noopener">${esc(ob.url.replace(/^https?:\/\//, ""))}</a>` : ""
      }</p></div></details>`
    )
    .join("");

  // Anno nel piè di pagina
  $("#anno").textContent = new Date().getFullYear();

  // Menu mobile
  const btn = $("#menu-btn");
  const nav = $("#nav");
  btn.addEventListener("click", () => {
    const aperto = nav.classList.toggle("aperto");
    btn.setAttribute("aria-expanded", aperto);
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("aperto");
      btn.setAttribute("aria-expanded", "false");
    })
  );
})();
