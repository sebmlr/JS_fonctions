

// fonction
function calculSalaireNet(salaireBrut,tauxPlv,cotisationMutuelle,cotisationRetraite)
{
    return salaireBrut-(salaireBrut*((tauxPlv+cotisationMutuelle+cotisationRetraite)/100))
}

// appel des fonctions
var salaireNet=calculSalaireNet(1600,14,2.7,8);
document.write("Salaire Net : "+salaireNet+"<br/>");