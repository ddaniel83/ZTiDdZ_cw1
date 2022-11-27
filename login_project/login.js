const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value; //zapisanie wpisanych wartości do zmiennych (działanie po kliknięciu w button)

    if (username === "" && password === "") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1; //warunek, aby logowanie było prawidłowe login i hasło musi być puste, inaczej wyświetli się error
    }
})
