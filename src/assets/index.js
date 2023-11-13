const questions = [
  {
    text: "I nemici principali incontrati da Paperinik sono criminali comuni, la Banda Bassotti, o qualche volte anche l'avidità del suo stesso parente, Zio Paperone. Ma il vendicatore mascherato ha anche incontrato minacce più grandi, come un'invasione aliena.",
    answer:
      "Paperinik non ha mai incontrato gli alieni, è la sua versione alternativa, PK, che ci si scontra su base regolare",
    categories: ["comics"],
  },
  {
    text: "Paperino è uno dei personaggi Disney di cui vediamo più alter ego eroici. Tra questi abbiamo: il vendicatore mascherato Paperinik, il protettore della Terra PK, il simil-Batman Darkwing Duck, il simil-007 DoubleDuck, e l'agente segreto al servizio di Paperone Qu-Qu 7",
    answer:
      "Darkwing Duck è un personaggio distinto e non un alter ego di Paperino",
    categories: ["comics"],
  },
  {
    text: "L'alter ego supereroistico di Paperino, Paperinik, nasce perché il povero papero riceve in un insperato colpo di fortuna l'atto di proprietà di una villa come premio per una lotteria. La vincita si rivelerà essere la diroccata e fatiscente Villa Rosa, dove però Paperino troverà il diario di Fantomius, il ladro gentiluomo, e tutto il suo arsenale necessario per la nascita del vendicatore mascherato Disney.",
    answer:
      "Paperino ha fortuna insperata ma non vince un bel niente: per un errore del postino, riceve l'atto di proprietà che era in realtà stato vinto dal cugino Gastone, che quindi senza questo scambio sarebbe potuto diventare lui l'eroe mascherato di Paperopoli",
    categories: ["comics", "luck"],
  },
  {
    text: "A differenza di Rey (per sua fortuna), i protagonisti delle altre due trilogie, Anakin e Luke Skywalker, sono accomunati dall'aver entrambi perso la mano destra, tagliata dalla spada laser di un avversario a loro caro",
    answer:
      "Anakin perde sì la mano destra, contro il Conte Dooku, ma perde anche i suoi altri tre arti nello scontro finale con Obi-Wan Kenobi, prima di venire ricostruito come Darth Vader",
    categories: ["cinema", "sci_fi"],
  },
  {
    text: "Nel trono di Spade, Daenerys Nata dalla Tempesta, della casa Targaryen, Prima del suo nome, la Non bruciata, Regina di Mareen, Regina degli Andali, dei Rhoynar e dei Primi Uomini, Khaleesi del Grande Mare d'Erba, Distruttrice di Catene e Madre dei Draghi ha tre draghi di nome Drogon, Rhaegal e Meraxes ",
    answer: "Il terzo drago si chiama Viserion, non Meraxes",
    categories: ["tv", "fantasy"],
  },
  {
    text: "Ne Il Ritorno dello Jedi, i ribelli attaccano e distruggono il generatore dello scudo della NUova Morte Nera sul pianeta di Endor con l'aiuto di pelose creature chiamate Ewoks",
    answer:
      "Endor è una luna, non un pianeta, e gli Ewoks sono gli abitanti di Endor, non il nome di una specie",
    categories: ["cinema", "sci_fi"],
  },
  {
    text: "Eevee, il pokemon numbero 133, può evolvere in Vaporeon, Electreon, Flareon, Espeon, Umbreon, Leafeon, Glaceon and Sylveon",
    answer: "Eevee può evolvere in tutte le forme elencate, tranne Electreon",
    categories: ["anime", "videogames"],
  },
  {
    text: "Lo scudo di Capitan america è così forte perchè fatto in Adamntium, lo stesso materiale degli artigli di Wolverine",
    answer: "Lo scudo di Capitan America è fatto di Vibranium, non Adamantium",
    categories: ["cinema", "comics"],
  },
  {
    text: "Nel Trono di Spade il genitori di Hodor lo chiamano così in onore di un famoso Maestro del Nord",
    answer:
      "Hodor è il nome che Hodor pronuncia per tutta la sua vita, ma il suo vero nome è Walder",
    categories: ["tv", "fantasy"],
  },
  {
    text: "Ne La Compagnia dell'Anello di J.R,R Tolkien la compagnia da cui prende nome il libro è composta da nove membri rappresentativi delle quattro specie libere: hobbit, umani, nani ed elfi",
    answer:
      "Gabdalf è un Istari, non un umano, e quindi non rappresenta la specie umana",
    categories: ["fantasy", "cinema"],
  },
  {
    text: "La serie La Ruota del Tempo inizia la sua pubblicazione con l'Occhio del Mondo nel 1990 e si è conclusa 23 anni quando Robert Jordan ha concluso l'ultimo libro: Memoria di Luce",
    answer:
      "Robert Jordan è morto prima di concludere la serie che è stata portata a termine da Brandon Sanderson",
    categories: ["fantasy", "books"],
  },
  {
    text: "In Start Wars, Qui-Gon Jinn usa i suoi poteri di manipolazione mentale per convincere il Toydoriano Watto a accettare crediti della Repubblica come pagamento per il suo T-14 Hyperdrive Generator",
    answer: "I poteri mentali dei Jedi non funzionano sui Toydoriani",
    categories: ["cinema", "sci_fi"],
  },
  {
    text: "Nel gioco Pokemon, puoi usare la pietra di luna per far evolvere il tuo Clefairy in Clefable, il tuo Jigglypuff in Pigglytuff, il tuo Nidorino in Nidoking e il tuo Nidorina in Nidoqueen",
    answer: "Jigglypuff evolve in Wigglytuff, non Pigglytuff",
    categories: ["anime", "videogames"],
  },
  {
    text: "Nel Mago di Oz, dopo aver visitato la città di Smeraldo, Dorothy e i suoi amici attraversano la terra dei Munchkin per raggiungere il castello della strega cattiva dell'ovest. Attraversano la foresta armati di una rete, uno spray per insetti e una pistola",
    answer: "Loro attraversano la terra dei Gialloni (Winkyland)",
    categories: ["fantasy", "books", "cinema"],
  },
  {
    text: "Nell'originale Crash Bandicoot per playstaton 1, Crash ottiene una nuova vita ogni volta che raccoglie 100 frutti Wumpa o rompendo una cassa 1-Up",
    answer: "Prende una vita dopo 100 frutti",
    categories: ["videogames"],
  },
  {
    text: "Nel fantasy esistono numerosi mostri creati unendo due creature reali in una e Dungeons and Dragons ne fa largo uso. Nel suo manuale dei mostri si possono trovare Orsogufi, Puzzomucche e conigli unicorno",
    answer: "Non ci sono puzzomucche",
    categories: ["gdr", "boardgames", "fantasy"],
  },
  {
    text: "I giochi del franchise Final Fantasy tendonoa d essere dei giochi standalone, ognuno che sviluppa un suo gruppo di ambientazione e personaggi. Ciononostante alcuni ritornano più volte attraverso la serie. Fin da Final Fantasi II ogni gioco ha sempre incluso i chocobo, i moguri e un personaggio chiamato Cid",
    answer:
      "I moguri appaiono per la prima volta in Final Fantasi III e non sono presenti nel IV",
    categories: ["videogames"],
  },
  {
    text: "Alcuni personaggi molto famosi non sono noti per i loro nomi: Pipino del Signore degli Anelli si chiama in realtà Peregrino, Voldemort si chiama Tom, Turanga Leela di Furutama usa princiaplemnte il suo cognome e Hodor del Trono di Spade si chiama in realtà Walder",
    answer: "Turanga è il cognome di Leela, non il nome",
    categories: ["fantasy", "tv", "books", "sci_fi"],
  },
  {
    text: "Super Mario Kart è un gioco di gare di Kart lanciato nel 1992 per la Super Nintendo. I giocatori possono gareggiare con personaggi quali Mario, Principessa Peach, Donkey Kong e Toad su percorsi come il famoso Rainbow Road",
    answer: "Donkey Kong non era giocabile, ma lo era Donkey Kong Jr",
    categories: ["videogames"],
  },
  {
    text: "Nel libro di L. Frank Baum 'Il Meraviglioso Mago di Oz', Dorothy ottinee due scarpette di rosso rubino dopo aver ucciso accidentalmente la malvagia strega dell'est. Le scarpette saranno alla fine il modo con cui ritorna in Kansas",
    answer:
      "Nel libro le scarpette sono d'argento. Nel film con Judy Garland si faranno rosse per sfruttre la nuova invenzione dell'epoca: il technicolor",
    categories: ["film", "books", "fantasy"],
  },
  {
    text: "I Draghi sono stati rappresentati di ogni forma e dimensione e le sottocategorie possono essere identificate attraverso piccole differenze. Per esempio le viverne hanno solo due gambe, i Wyrm sono enormi serpenti senza ali e gambe e i draghi Giapponesi sono lunghi, volanti, con quattro gambe e quattro dita per piede",
    answer:
      "Quelli giapponesi anno solo tre dita. Quelli cinesi quattro e quelli imperiali cinque. [Bonus] secondo il Signore degli Anelli ci sono wyrm alati",
    categories: ["fantasy", "books"],
  },
  {
    text: "In 'Star Trek: The Next Generation' l'equipaggio dell'USS Enterprise è un gruppo inclusivo di umani e non umani. Inoltre quelli della Terra sono di culture diverse. Il capitano Picard è Inglese, Will Riker è cresciuto in Alaska e Geordi La Forge è nato in Somalia",
    answer: "Picard è francese, non inglese",
    categories: ["tv", "sci_fi"],
  },
  {
    text: "Ad oggi la versione di Dracula più rappresentata è quella di Bela Lugosi: un uomo elegante, pallido, coi capelli lisciati all'indietro canini appuntiti e mantello rosso. Tuttavia, nel libro originale di Bram Stocker Dracula è descritto molto più simile a Nosferatu: un uomo brutto, con i denti da ratto, lunghe dita e orecchie a punta",
    answer: "Nel libro è descritto come un uomo alto e vecchio. Ben lavato e sbarbato salvo lunghi baffi bianchi e un vestito toalmente nero senza altri colori",
    categories: ["books", "film", "fantasy"],
  },
  {
    text: "",
    answer: "",
    categories: [""],
  },
  {
    text: "",
    answer: "",
    categories: [""],
  },
  {
    text: "",
    answer: "",
    categories: [""],
  },
  {
    text: "",
    answer: "",
    categories: [""],
  },
];

export default questions;
