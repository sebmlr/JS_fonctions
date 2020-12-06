function calculPoidsIdeal(genre,taille,poids)
{
   
    if (genre=homme)
    {
        var poidsLorentz=taille-100-((taille-150)/4);
        var poidsDevine=50+2.3*(taille*39,3700787);
    }

    if (genre=femme)
    {
        var poidsLorentz=taille-100-((taille-150)/2.5);
        var poidsDevine=45.5+2.3*(taille*39,3700787);
    }
    return poidsIdeal=(poidsDevine+poidsLorentz)/2;

}

function calculIMC(taille,poids)
{
    return IMC=poids/(taille*taille)
}