//--------------VARIABLES------------

// Configuration du jeu
const min = 1;
const max = 100;

// Statistique du jeu
const statistique = {
  tentative: 0,
  secret: genererNombre(min, max),
  historique: [],
  tempsDebut: 0,
  tempsFin: 0,
  duree: 0,
  aGagne: false,
};

//--------------FONCTIONS------------

// Génération du nombre secret
function genererNombre(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Vérification du nombre rentré par le joueur
function verifierTentative() {
  let demander = prompt(`Choisissez un nombre entre ${min} et ${max}`);

  if (demander === null) {
    return null;
  }

  if (demander === "") {
    console.log("veuillez rentrer un nombre");
    return false;
  }

  demander = Number(demander);

  if (isNaN(demander)) {
    console.log("N'est pas un nombre !");
    return false;
  }

  if (demander > max || demander < min) {
    console.log("Rentrer un nombre compris ds la plage ");
    return false;
  }

  return demander;
}

// Boucle principale du jeu
function demanderTentative() {
  while (statistique.tentative !== statistique.secret) {
    statistique.tentative = verifierTentative();

    if (statistique.tentative === null) {
      break;
    } else if (statistique.tentative === false) {
      console.log("Réessayer");
    } else {
      statistique.historique.push(statistique.tentative);

      if (statistique.tentative < statistique.secret) {
        console.log("Trop Bas");
      } else if (statistique.tentative > statistique.secret) {
        console.log("Trop Haut");
      } else {
        statistique.aGagne = true;
        console.log("bravo");
      }
    }
  }
}

// Affichage des statistiques du jeu
function afficherResultat() {
  if (statistique.aGagne) {
    for (let i = 0; i < statistique.historique.length; i++) {
      console.log(`essai ${i + 1} = ${statistique.historique[i]}`);
    }
    console.log(
      `Bravo ! Vous avez réussi en ${statistique.historique.length} tentatives et ${statistique.duree} secondes !`,
    );
  }
}

// Lancement du jeu
function jouer() {
  statistique.tempsDebut = Date.now();
  demanderTentative();
  statistique.tempsFin = Date.now();
  statistique.duree = Math.floor(
    (statistique.tempsFin - statistique.tempsDebut) / 1000,
  );

  afficherResultat();
}

//--------------TEST------------

//nombre secret affiché pour les test
console.log("testDevNbresecret = " + statistique.secret);

//Lancement du jeu
jouer();

//test Etat de la partie
console.log("partie gagnée : " + statistique.aGagne);
