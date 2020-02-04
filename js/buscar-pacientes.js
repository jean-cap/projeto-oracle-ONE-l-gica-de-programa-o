const api = 'https://api-pacientes.herokuapp.com/pacientes';
let dadosPacientes;

const botaoBuscarPacientes = document.getElementById('buscar-pacientes');

botaoBuscarPacientes.addEventListener('click', function (event) {
    const xhr = new XMLHttpRequest();

    xhr.open('get', api);
    xhr.addEventListener('load', function (event) {
        if (xhr.status === 200) {
            const tabela = document.querySelector('#tabela-pacientes');

            dadosPacientes = JSON.parse(xhr.responseText);
            dadosPacientes.forEach(function (paciente) {
                const pacienteTr = montaTr(paciente);
                tabela.appendChild(pacienteTr);
            });
        } else {
            console.log(xhr.status, xhr.statusText);
        }
    });
    xhr.send(null);
});