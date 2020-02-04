const tbPacientes = document.getElementById('tabela-pacientes');

tbPacientes.addEventListener('dblclick', function (event) {
    event.target.parentNode.remove();
});