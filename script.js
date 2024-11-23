form = document.getElementById('form-compara')

form.addEventListener('submit',function(e){
    e.preventDefault();

    let valorA = document.getElementById('valorA').value;
    let valorB = document.getElementById('valorB').value;
    
    valorA = parseInt(valorA);
    valorB = parseInt(valorB);

    let resultado = document.getElementById('resultado');
    
    if(valorB > valorA){
        resultado.innerHTML = `Parabéns, o valor ${valorB} é <b>maior</b> que o valor ${valorA}.`
    }else{
        resultado.innerHTML =  `Tente novamente, o valor ${valorB} é <b>menor</b> que o valor ${valorA}`
    }

    document.getElementById('valorA').value = '';
    document.getElementById('valorB').value = '';

})

console.log(form);