// Desenvolva o código em JavaScript de um programa que soma números inteiros informados 
// pelo usuário até que um número negativo seja informado e então imprime o resultado da 
// soma na tela.

function clearResult() {
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').style.display = 'none';
}

function calculateSum() {
    
    let x = 0;
    let sum = 0;
    
    while (x >= 0) {

        x = prompt("Digite o(s) valor(es) que somar com outro(s) valor(es): ")

        x = parseInt(x);

        if(x < 0){
            break;
        }

        sum += x;
    }

    // Em HTML, usamos o método innerHTML para exibir a saída
    document.getElementById('result').innerHTML = "O resultado da soma é " + sum;
    document.getElementById('result').style.display = 'block';
}
