function estBissextile(annee) {
    var testEstBissextile;

    if ((anneeNaissance % 4 == 0) && ((anneeNaissance % 100 != 0)  (anneeNaissance % 400 == 0))) {
        testEstBissextile = 1;
    } else {
        testEstBissextile = 0;
    }

    return testEstBissextile;
}

var anneeNaissance = parseInt(prompt("Entrez votre année de naissance : "));
var anneeActuelle = new Date();

for (anneeNaissance; anneeNaissance <= anneeActuelle.getFullYear(); anneeNaissance++) {

    if ((anneeNaissance % 4 == 0) && (anneeNaissance % 100 != 0)  (anneeNaissance % 400 == 0)) {
        document.write(anneeNaissance + " - ");
    }


}