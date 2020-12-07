
function Lorentz(taille, genre) {
    if (genre == "homme") {
        var poidLorentz = ((taille - 100) - ((taille - 150) / 4))
    } else {
        poidLorentz = (taille - 100) - ((taille - 150) / 2.5)
    }
    return poidLorentz
}

function Devine(taille, genre) {
    if (genre == "homme") {
        var poidDevine = 50 + 2.3 * ((taille / 2.54) - 60)
    } else {
        poidDevine = 45.5 + 2.3 * ((taille / 2.54) - 60)
    }
    return poidDevine
}

function IMC(taille, poid) {
    return poid / Math.pow(taille / 100, 2)
}

document.write("Poid lorentz : ", Lorentz(180, "homme").toFixed(2), "<br>");
document.write("Poid ldevine : ", Devine(180, "homme").toFixed(2), "<br>");
document.write("Poid idéal : ", ((Lorentz(180, "homme") + Devine(180, "homme")) / 2).toFixed(2), "<br>");
document.write("IMC : ", IMC(180, 85).toFixed(2));