function calculImpotsSociete(montantBenef)
{
    var impot=0;
    if (montantBenef<38120)
    {
        impot=montantBenef*0.15;
    }
    if (montantBenef>=38120 && montantBenef<500000)
    {
        impot=montantBenef*0.28;
    }
    if (montantBenef>=500000)
    {
        impot=montantBenef*0.31;
    }
    return impot;
}

var montantBenef=parseFloat(prompt("Saisir montant des bénéfices :"));

document.write("L'impot sur les sociétés pour un montant de "+montantBenef+" euros est de ",calculImpotsSociete(montantBenef)+" euros<br/>");