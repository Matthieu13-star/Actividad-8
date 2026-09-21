document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form");
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    forms.forEach(function (form) {
        form.addEventListener("submit", function (e) {
            const nombreInput = document.getElementById("nombre");
            const correoInput = document.getElementById("correo");
            const passwordInput = document.getElementById("password");

            const nombre = nombreInput ? nombreInput.value.trim() : "";
            const correo = correoInput ? correoInput.value.trim() : "";
            const password = passwordInput ? passwordInput.value.trim() : "";

            if (nombreInput) {
                if (nombre === "" || correo === "" || password === "") {
                    alert("Todos los campos son obligatorios");
                    e.preventDefault();
                    return;
                }
            } else {
                if (correo === "" || password === "") {
                    alert("Todos los campos son obligatorios");
                    e.preventDefault();
                    return;
                }
            }

            if (correo !== "" && !regexCorreo.test(correo)) {
                alert("Ingrese un correo electrónico válido");
                e.preventDefault();
                return;
            }

            if (password !== "" && password.length < 6) {
                alert("La contraseña debe tener mínimo 6 caracteres");
                e.preventDefault();
                return;
            }

            if (nombreInput) {
                alert("Registro validado correctamente");
            } else {
                alert("Inicio de sesión validado correctamente");
            }
        });
    });
});
