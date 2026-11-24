const min = 1;
const max = 100;
let nbreEssais = 0;
let tentative = 0;

function genererNombre(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let secret = genererNombre(min, max);
console.log("nbresecret = " + secret);

function demanderTentative() {
  let demander = prompt("Choisissez un nombre entre 1 et 100");

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

function afficherResultat() {
  while (tentative !== secret) {
    tentative = demanderTentative();

    if (tentative === null) {
      break;
    } else if (tentative === false) {
      console.log("Réessayer");
    } else {
      nbreEssais++;

      if (tentative < secret) {
        console.log("Trop Bas");
      } else if (tentative > secret) {
        console.log("Trop Haut");
      } else {
        console.log("bravo");
      }
    }
  }
}

afficherResultat();
