// fonctions
function bonjour(prenom)
{
    document.write("Bonjour, comment vas-tu "+prenom+" ?<br/>");
}

function volumeSphere(rayon)
{
    return 4/3*Math.PI*Math.pow(rayon,3);
}

function calculerPrix(prixUnitaire, nbArticles)
{
    return prixUnitaire*nbArticles;
}

// appel des fonctions
bonjour("Toto");

var montant=calculerPrix(150,4);

document.write("Tu dois payer "+montant+" euros.<br/>");

document.write("Sais-tu que le volume de la sphère de rayon unité est "+volumeSphere(1)," ?<br/>");