function validaNumero(numero) {
    if (numero === undefined || numero === null || numero === '') {
        return false;
    }
    if (typeof numero !== 'number') {
        return false;
    }
    return true;
}

function validaPeso(peso) {
    if (validaNumero(peso) && peso >= 0 && peso <= 1000) {
        return true;
    }
    return false;
}

function validaAltura(altura) {
    if (validaNumero(altura) && altura >= 0 && altura <= 3.0) {
        return true;
    }
    return false;
}

function validaPaciente(paciente) {
    let peso = Number(paciente.peso);
    let altura = Number(paciente.altura);

    return validaPeso(peso) && validaAltura(altura);
}

function pegaInfoFormPaciente(form) {
    return Object.values(form).reduce((obj, field) => {
        if (field.type === 'submit') {
            return obj;
        }

        obj[field.name] = field.value;
        return obj;
    }, {});
}

function montaTd(nome, dado) {
    const td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(`info-${nome}`);
    return td;
}

function montaTr(dados) {
    const pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    const dadosTabela = {
        nome: montaTd('nome', dados.nome),
        peso: montaTd('peso', dados.peso),
        altura: montaTd('altura', dados.altura),
        gordura: montaTd('gordura', dados.gordura),
        imc: montaTd('imc', dados.imc)
    };

    for (dado in dadosTabela) {
        pacienteTr.appendChild(dadosTabela[dado]);
    }

    return pacienteTr;
}

const botaoEnvia = document.querySelector('#adicionar-paciente');

botaoEnvia.addEventListener('click', function (event) {
    event.preventDefault();

    const form = document.querySelector('form');
    const tabela = document.querySelector('#tabela-pacientes');

    const infoFormPaciente = pegaInfoFormPaciente(form);

    if (!validaPaciente(infoFormPaciente)) {
        alert('Informações erradas.');
        return;
    }

    infoFormPaciente.imc = calculaImc(infoFormPaciente.peso, infoFormPaciente.altura).toFixed(2);

    const pacienteTr = montaTr(infoFormPaciente);
    tabela.appendChild(pacienteTr);

    form.reset();
});