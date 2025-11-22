const myModal = new bootstrap.Modal("#registerModal");

//CRIAR CONTA
document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;

    if(email.length < 5) {
        alert("Email invalido");
        return;
    }

    if(password.length < 4) {
        alert("Senha curta precisa ser 5 dígitos a mais");
        return;
    }

    saveAccount({
        login: email,
        password: password,
        transactions: []
    });

    myModal.hide();

    alert("Conta criada com sucesso");
});

function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify)
}