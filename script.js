const form = document.getElementById(`form`)
const email = document.getElementById(`email`)
const errMessage = document.getElementById(`errmessage`)
const pattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/


form.addEventListener(`submit`, (e) => {   
    if(!email.value.match(pattern)) {
        e.preventDefault()
        errMessage.style.display = `inline-block`
        email.style.borderColor = `red`
        email.style.outlineColor = `red`
        email.style.backgroundColor = `pink`
        email.style.color = `red`
    }
})
