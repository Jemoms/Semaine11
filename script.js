var randomBtn = document.querySelector("#randomBtn"),
  resultat = document.querySelector("#resultat"),
  tester = document.querySelector("#tester"),
	tentative = document.querySelector("#tentative"),
  number, compteur = 0,test;

// On renvoie un entier aléatoire entre une valeur min et max (incluses)
function getNumber(min, max) {
  number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
}

function afficherRandom() {
  randomBtn.innerHTML = "Un nombre entre 1 et 100 a été sélectionné au hasard : <br> <br> <strong>Relancer le Dé !<strong>";
  resultat.innerHTML = "Appuyer sur « Tester » pour tenter votre chance !";
}

//Number.isInteger(valeurÀTester) renvoie false si undefined||NaN||NaInteger

function testerNumber() {

test=tentative.value;
compteur ++;

if (1<=test && test<=100) {
    if (test > number){
      resultat.innerHTML = "C'est moins que cela, retentez votre chance en appuyant sur « Tester »";
			}

    if (test < number){
      resultat.innerHTML = "C'est plus que cela, retentez votre chance en appuyant sur « Tester »";
			}

   if (test == number){
      resultat.innerHTML = "Bien joué, le nombre était bien :" + number +" <br>Vous avez trouvé en : "+compteur+" fois !<br>Vous pouvez relancer le dé pour recommencer une partie";
			}
		}
	else {
				resultat.innerHTML ="Veuillez entrer un nombre entier entre 1 et 100 si vous voulez avoir une chance de gagner..."
		}
}


randomBtn.addEventListener('click', function() {getNumber(1, 100);afficherRandom();compteur =0;}, false);
tester.addEventListener('click', testerNumber, false);
