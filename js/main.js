const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const operandoPeso = e.target.querySelector('#peso');
    const operandoAltura = e.target.querySelector('#altura');

    const peso = Number(operandoPeso.value);
    const altura = Number(operandoAltura.value);
    console.log(peso, altura);

    /* if (!peso) {
      seta_resultado("Peso inválido!", false);
      return;
    } else if(!altura) {
      seta_resultado("Altura inválido!", false);
      return;
    } */
    !peso ? seta_resultado("Peso inválido!", false): seta_resultado("Altura inválida!", false);
    

    const imc = getImc(peso, altura);
    console.log(getImc(peso, altura));
    
    const mensagem = `imc = ${imc}`;
    seta_resultado(mensagem, true);

});

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
  }
  
  function criaP () {
    const p = document.createElement('p');
    return p;
  }
  
  function seta_resultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
  
    const p = criaP();
  
    if (isValid) {
      p.classList.add('paragrafo_resultado');
    } else {
      p.classList.add('bad');
    }
  
    p.innerHTML = msg;
    resultado.appendChild(p);
  
  }



