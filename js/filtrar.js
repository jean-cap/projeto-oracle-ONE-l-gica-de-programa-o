const input = document.getElementById('filtrar-tabela');

input.addEventListener('input', function (ev) {
    const pacientes = document.querySelectorAll('.paciente');

    let input = this.value;

    if (input.length > 0) {
        pacientes.forEach(function (paciente, index) {
            let nome = paciente.firstElementChild.textContent;

            if (nome !== input) {
                paciente.classList.add('invisivel');
            } else {
                paciente.classList.remove('invisivel');
            }
        });
    } else {
        pacientes.forEach(function (paciente, index) {
            paciente.classList.remove('invisivel');
        });
    }
});