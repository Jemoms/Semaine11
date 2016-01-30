/*****************************Mo + ou Mo -************************************/



var randomBtn = document.querySelector("#randomBtn"),
  resultat = document.querySelector("#resultat"),
  tester = document.querySelector("#tester"),
	tentative2 = document.querySelector("#tentative2"),
  number2, compteur = 0,test;

// On renvoie un entier aléatoire entre une valeur min et max (incluses)
function getNumber2(min, max) {
  number2 = Math.floor(Math.random() * (max - min + 1)) + min;
  return number2;
}

function afficherRandom() {
  randomBtn.innerHTML = "Un nombre entre 1 et 100 a été sélectionné au hasard : <br> <br> <strong>Relancer le Dé !<strong>";
  resultat.innerHTML = "Appuyer sur « Tester » pour tenter votre chance !";
}

//Number.isInteger(valeurÀTester) renvoie false si undefined||NaN||NaInteger

function testerNumber() {

test=tentative2.value;
compteur ++;

if (1<=test && test<=100) {
    if (test > number2){
      resultat.innerHTML = "C'est moins que cela, retentez votre chance en appuyant sur « Tester »";
			}

    if (test < number2){
      resultat.innerHTML = "C'est plus que cela, retentez votre chance en appuyant sur « Tester »";
			}

   if (test == number2){
      resultat.innerHTML = "Bien joué, le nombre était bien :" + number2 +" <br>Vous avez trouvé en : "+compteur+" fois !<br>Vous pouvez relancer le dé pour recommencer une partie";
			}
		}
	else {
				resultat.innerHTML ="Veuillez entrer un nombre entier entre 1 et 100 si vous voulez avoir une chance de gagner..."
		}
}


randomBtn.addEventListener('click', function() {getNumber2(1, 100);afficherRandom();compteur =0;}, false);
tester.addEventListener('click', testerNumber, false);




/****************************JEU DU SHIFUMo'***********************************************/


var goBtn = document.querySelector("#goBtn"),
		resetScore = document.querySelector("#resetScore"),
		elements = document.querySelector("#shifumi"),
		affichageIa = document.querySelector("#affichageIa"),
		affichageUser = document.querySelector("#affichageUser"),
		affichageResultat = document.querySelector("#affichageResultat"),
		affichageScore = document.querySelector("#affichageScore"),
		number, userChoice, iaChoice, win=0, loses=0, draw=0, pourcentageWin=0;
		
// On renvoie un entier aléatoire entre une valeur min et max (incluses)
function getNumber(min, max) {
  number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
}

function afficherElement() {
	iaChoice = elements[number].value; //valeur pour l'index number (choix aléatoire) dans le tableau elements
	userChoice = elements.options[elements.selectedIndex].innerHTML; // valeur d'option, de l'element sélectionné dans la liste déroulante !
	affichageIa.innerHTML = "<br>L'ordinateur a choisi : " + iaChoice;
	affichageUser.innerHTML = "<br>Vous avez choisi : " + userChoice;
}

function afficherScore() {
	affichageScore.innerHTML = "<br>Votre score : " + win + " victoires | "+ loses + " défaites | " + draw + " égalités<br>Vous avez " + pourcentageWin +"% de victoires !";
}

function tentative() {
	userChoice = elements.options[elements.selectedIndex].innerHTML; // valeur d'option, de l'element sélectionné dans la liste déroulante !
	affichageUser.innerHTML = "<br>Vous avez choisi : " + userChoice;
	
	switch(iaChoice) {
	
		case "Pierre" : 
			switch(userChoice) {
	
		case "Pierre" : 
		affichageResultat.innerHTML ="<br> <strong>Egalité !</strong>";
		draw++;
		break;
		 
		case "Feuille" : 
		affichageResultat.innerHTML ="<br> <strong>Victoire !</strong>";
		win++;
		break;
		
		case "Ciseaux" : 
		affichageResultat.innerHTML ="<br> <strong>Défaite !</strong>";
		loses++;
		break;
		
		default : 
		alert("Problème !");
		
	};
		break;
		 
		case "Feuille" : 
			switch(userChoice) {
	
		case "Pierre" : 
		affichageResultat.innerHTML ="<br> <strong>Défaite !</strong>";
		loses++;
		break;
		 
		case "Feuille" : 
		affichageResultat.innerHTML ="<br> <strong>Egalité !</strong>";
		draw++;
		break;
		
		case "Ciseaux" : 
		affichageResultat.innerHTML ="<br> <strong>Victoire !</strong>";
		win++;
		break;
		
		default : 
		alert("Problème !");
		
	};
		break;
		
		case "Ciseaux" : 
			switch(userChoice) {
	
		case "Pierre" : 
		affichageResultat.innerHTML ="<br> <strong>Victoire !</strong>";
		win++;
		break;
		 
		case "Feuille" : 
		affichageResultat.innerHTML ="<br> <strong>Défaite !</strong>";
		loses++;
		break;
		
		case "Ciseaux" : 
		affichageResultat.innerHTML ="<br><strong> Egalité !</strong>";
		draw++;
		break;
		
		default : 
		alert("Problème !");
		
	};
		break;
		
		default : 
		alert("Problème !");
		
	}
	pourcentageWin=Math.round(win*100/(win+loses+draw));
}

goBtn.addEventListener('click', function() {getNumber(0, 2);afficherElement();tentative();afficherScore();}, false); //sur le clic ça choisi un chiffre de 0 à 2, et en fonction de ça, c'est un des 3 éléments qui est sélectionné par l'ordinateur
resetScore.addEventListener('click', function() {win=0;loses=0;draw=0;pourcentageWin=0;afficherScore();}, false);