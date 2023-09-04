function desvia(t) {
    var btn = t;
    btn.style.position = 'relative';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}

const logregBox = document.querySelector('.logreg-box')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active')
})

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active')
})

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "keths22.ky@gmail.com" && password === "ixe") {
            window.location.href = "cofre.html";
        } else {
            alert("Usuário ou senha incorretos. Tente novamente.");
        }
    });
});