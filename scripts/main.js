// lancement des fonctions principales

// proposition de chatgpt pour améliorer mon code de formulaire avec fonctions etc
const form = document.querySelector("form");

function verifierChamp(champ, valeurDefaut, longueurMin, messageErreur) {
    if (champ.value === valeurDefaut) {
        return false;
    }

    if (champ.value.length < longueurMin) {
        champ.classList.add("txt-zone--error");
        champ.nextElementSibling.innerText = ` - ${messageErreur}`;
        return false;
    } else {
        champ.classList.remove("txt-zone--error");
        champ.nextElementSibling.innerText = "";
        return true;
    }
}

function verifierEmail(emailChamp) {
    let regexp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
    if (emailChamp.value === "monemail@domaine.com") {
        return false;
    }

    if (!regexp.test(emailChamp.value)) {
        emailChamp.classList.add("txt-zone--error");
        emailChamp.nextElementSibling.innerText = " - format non valide";
        return false;
    } else {
        emailChamp.classList.remove("txt-zone--error");
        emailChamp.nextElementSibling.innerText = "";
        return true;
    }
}

const champs = [
    { champ: document.querySelector(".name-input"), valeurDefaut: "tapez votre nom ici", longueurMin: 2, messageErreur: "le nom est trop court" },
    { champ: document.querySelector(".email-input"), valeurDefaut: "monemail@domaine.com", verifier: verifierEmail, messageErreur: "format non valide" },
    { champ: document.querySelector(".message-input"), valeurDefaut: "tapez votre message ici", longueurMin: 2, messageErreur: "le message est trop court" }
];

champs.forEach(({ champ, valeurDefaut, longueurMin, verifier, messageErreur }) => {
    champ.addEventListener("change", () => verifierChamp(champ, valeurDefaut, longueurMin, messageErreur));
    champ.addEventListener("keypress", () => verifierChamp(champ, valeurDefaut, longueurMin, messageErreur));
});

const [nomOk, emailOk, messageOk] = champs.map(({ champ, verifier }) => verifier ? verifier(champ) : verifierChamp(champ));

function envoyerEmail(nom, email, message) {
    let mailto = `mailto:${"contact@lesoreillesdejankev.com"}?subject=BOOKING Jankev.FR pour ${email} &body= "${message}", Signé ${nom}`;
    location.href = mailto;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (nomOk && emailOk && messageOk) {
        envoyerEmail(champs[0].champ.value, champs[1].champ.value, champs[2].champ.value);
    }
});