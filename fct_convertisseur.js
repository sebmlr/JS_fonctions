// déclaration et initialisation des const et var
const EuFr=6.5596;

var montantE=parseFloat(prompt("Saisir le montant en E :"));
var montantF=parseFloat(prompt("Saisir le montant en F :"));

// définition des fonctions
function conversionEurosFrancs(montantE)
{
    return montantE*EuFr;
}

function conversionFrancsEuros(montantF)
{
    return montantF/EuFr;
    
}

// appel des fonctions
var resultatF=conversionEurosFrancs(montantE);
var resultatE=conversionFrancsEuros(montantF);
document.write(montantE+" euros = "+resultatF.toFixed(2)+" francs<br/>");
document.write(montantF+" francs = "+resultatE.toFixed(2)+" euros");