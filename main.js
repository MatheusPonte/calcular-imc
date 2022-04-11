const form = document.querySelector('#formulario')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso')
    const inputAltura = event.target.querySelector('#altura')

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!altura) {
        setResultado('altura invalida', false)
        return;
    }

    if (!peso) {
        setResultado('peso invalido', false)
        return;
    }

    const imc = getImc(peso, altura);
    const levelImc = getNivelImc(imc);
    const mensagem = `seu IMC é ${imc} (${levelImc}).`;

    setResultado(mensagem, true);

});

function criaparagrafo() {
    const p = document.createElement('p');
    return p;
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function getNivelImc(imc) {
    const level = ['Obesidade grau 3', 'obesidade grau 2', 'obesidade grau 1', 'sobrepeso', 'peso normal', 'abaixo do peso'];

    if (imc > 39.9) return level[5]

    if (imc >= 34.9) return level[4]

    if (imc >= 29.9) return level[3]

    if (imc >= 24.9) return level[2]

    if (imc >= 18.5) return level[1]

    if (imc < 18.5) return level[0]
}

function setResultado(mensagem, valido) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const paragrafo = criaparagrafo();
    if (valido) {
        paragrafo.classList.add('paragrafo-resultado');

    } else {
        paragrafo.classList.add('bad');
    }

    paragrafo.innerHTML = mensagem;
    resultado.appendChild(paragrafo);

}