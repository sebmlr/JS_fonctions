var adresseMail = prompt("Entrez une adresse mail : ");
var verif = false;

function VerifMail(adresseMail){
    
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    
    // Le \w = [a-zA-Z0-9_]
    // regex de base         = \w+([\.-]?\w+) *@ \w+([\.-]?\w+) * ( \. \w{2,3})+$/;   
    // regex en plus lisible = [a-zA-Z0-9_] +@ [a-zA-Z0-9_] +\. [a-zA-Z] {2,3}

    if (adresseMail.match(regex)){
        verif = true
        return
    }
    else{
        verif = false
        return
    }
}

VerifMail(adresseMail)


if(verif == true){
    document.write("adresse mail ok ")
}else{
    document.write("pas ok")
}