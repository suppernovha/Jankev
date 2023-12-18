// blocs de code

// FORMULAIRE

// lors de la saisie vérifier la validité des champs et  créer bordures rouges ou vertes en fonction de la validité du contenu
// récupérer les valeurs saisies pour créer un mail et envoyer les infos

const form = document.querySelector("form")

const baliseNom = document.querySelector(".name-input")
	const spanNom = document.querySelector(".name-label span")
const baliseMail = document.querySelector(".email-input")
	const spanMail = document.querySelector(".email-label span")
const baliseMessage = document.querySelector(".message-input")
	const spanMessage = document.querySelector(".message-label span")

// Verifier Nom 
function verifierNom(nomSaisi) {
	if (nomSaisi === "tapez votre nom ici") {
		return false
	}
	if (nomSaisi.length < 2) {
		baliseNom.classList.add("txt-zone--error");
		spanNom.innerText = " - le nom est trop court";
		return false;
	} else {
		baliseNom.classList.remove("txt-zone--error");
		spanNom.innerText = "";
		return true;
	}
}
baliseNom.addEventListener("change", () => {
	verifierNom(baliseNom.value);
})
baliseNom.addEventListener("keypress", () => {
	verifierNom(baliseNom.value);
})

// Vérifier email 
function verifierEmail(emailSaisi) {
	let regexp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
	if (emailSaisi === "monemail@domaine.com") {
		return false
	}
	if (!regexp.test(emailSaisi)) {
		baliseMail.classList.add("txt-zone--error");
		spanMail.innerText = " - format non valide";
		return false;
	} else {
		baliseMail.classList.remove("txt-zone--error");
		spanMail.innerText = "";
		return true;
	}
}
baliseMail.addEventListener("change", () => {
	verifierEmail(baliseMail.value)
})
baliseMail.addEventListener("keypress", () => {
	verifierEmail(baliseMail.value)
})

// Vérifier message
function verifierMessage(messageSaisi) {
	if (messageSaisi === "tapez votre message ici") {
		return false
	}
	if (messageSaisi.length < 2) {
		baliseMessage.classList.add("txt-zone--error");
		spanMessage.innerText = " - le message est trop court";
		return false;
	} else {
		baliseMessage.classList.remove("txt-zone--error");
		spanMessage.innerText = "";
		return true;
	}
}
baliseMessage.addEventListener("change", () => {
	verifierMessage(baliseMessage.value)
})
baliseMessage.addEventListener("keypress", () => {
	verifierMessage(baliseMessage.value)
})

// Envoyer mail si conditions remplies

const nomOk = verifierNom(baliseNom.value)
const emailOk = verifierEmail(baliseMail.value)
const messageOk = verifierMessage(baliseMessage.value)
function envoyerEmail(nom, email, message) {
	let mailto = `mailto:${"contact@lesoreillesdejankev.com"}?subject=BOOKING Jankev.FR pour ${email} &body= "${message}", Signé ${nom}`
	location.href = mailto
}

form.addEventListener("submit", (event) => {
	event.preventDefault();


const nomOk = verifierNom(baliseNom.value)
const emailOk = verifierEmail(baliseMail.value)
const messageOk = verifierMessage(baliseMessage.value)

	if (nomOk && emailOk && messageOk) {
		envoyerEmail(baliseNom.value, baliseMail.value, baliseMessage.value)
	}
})