// déclaration et initialisation de la constante PI
const PI=3.1415;

// définition des fonctions
// perimetreCercle
function perimetreCercle()
{
    var rayon=parseFloat(prompt("Entrez la valeur du rayon :"));
    var perimetre=rayon*2*PI;
    document.write("Le périmètre du cercle de rayon : "+rayon+" vaut : "+perimetre+"<br/>");
}

perimetreCercle();

// surfaceCercle
function surfaceCercle()
{
    var rayon=parseFloat(prompt("Entrez la valeur du rayon :"));
    var surface=PI*rayon*rayon;
    document.write("La surface du cercle de rayon : "+rayon+" vaut : "+surface);
}

// appel de la fonction
perimetreCercle();
document.write("<br/>");
surfaceCercle();