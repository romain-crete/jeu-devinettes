const min = 1;
const max = 100;


function genererNombre(min,max) {
   return Math.floor(Math.random()*(max-min+1)+min);
}

let nbreSecret= genererNombre(min,max);
console.log("nbresecret = "+nbreSecret)


const nbreJoueur =35;
let nbreTenatives=0;

function verifierTentative (nbreJoueur){

    if (nbreJoueur>nbreSecret){
        console.log("Trop Haut")
    }else if (nbreJoueur<nbreSecret){
        console.log("Trop bas")
    }else  console.log(`Bravo ! vous avez trouvé. `)
}

verifierTentative(nbreJoueur);

















