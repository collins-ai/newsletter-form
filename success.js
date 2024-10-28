const validEmail = document.getElementById(`validemail`)

function getEmail(email) {
    const findEmail = new URLSearchParams(location.search)
    return findEmail.get(email)
}
const emailValue = getEmail(`email`)

validEmail.innerHTML = emailValue
