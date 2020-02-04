function calculaImc(peso, altura) {
    if (!peso || peso <= 0 || peso >= 1000) {
        return 'Peso inválido.';
    }

    if (!altura || altura <= 0 || altura >= 3.00) {
        return 'Altura inválida.';
    }

    return peso / (altura * altura);
}

const pacientes = document.querySelectorAll('.paciente');

for (let index = 0; index < pacientes.length; index++) {
    const element = pacientes[index];

    let peso = Number.parseFloat(element.children.item(1).textContent);
    let altura = Number.parseFloat(element.children.item(2).textContent);

    let imc = calculaImc(peso, altura);

    if (typeof imc !== 'number') {
        element.classList.add('paciente-invalido');
    } else {
        imc = imc.toFixed(2);
    }

    element.children.item(4).textContent = imc;
}