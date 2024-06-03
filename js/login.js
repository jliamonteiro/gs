
function entrar() {
    let email = document.querySelector('#email');
    let fraseEmail = document.querySelector('#fraseEmail'); 

    let senha = document.querySelector('#senha');
    let fraseSenha = document.querySelector('#fraseSenha'); 

    let textForm = document.querySelector('#textForm');

    let usuarioLista = JSON.parse(localStorage.getItem('usuarioLista')) || [];

    let usuarioValid = null;

    usuarioLista.forEach((item) => {
        if (email.value === item.emailCadastro && senha.value === item.senhaCadastro) {
            usuarioValid = {
                email: item.emailCadastro,
                senha: item.senhaCadastro
            };
        }
    });

    if (email.value === usuarioValid.email && senha.value === usuarioValid.senha) {
        window.location.href = '../páginas/sobre-nós.html';
    } else {
        textForm.textContent = 'Senha ou email incorretos, tente novamente';
    }
}
const btnLogin = document.querySelector('#btnLogin'); 

btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    entrar();
});