function gaussJordan() {
    let matrix = [
        [parseFloat(document.getElementById('l1c1').value), parseFloat(document.getElementById('l1c2').value), parseFloat(document.getElementById('l1c3').value), parseFloat(document.getElementById('l1c4').value)],
        [parseFloat(document.getElementById('l2c1').value), parseFloat(document.getElementById('l2c2').value), parseFloat(document.getElementById('l2c3').value), parseFloat(document.getElementById('l2c4').value)],
        [parseFloat(document.getElementById('l3c1').value), parseFloat(document.getElementById('l3c2').value), parseFloat(document.getElementById('l3c3').value), parseFloat(document.getElementById('l3c4').value)]
    ];

    let steps = [];

    // Implementação da eliminação de Gauss-Jordan
    for (let i = 0; i < matrix.length; i++) {
        let pivot = matrix[i][i];
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] /= pivot;
        }
        steps.push(JSON.parse(JSON.stringify(matrix)));

        for (let k = 0; k < matrix.length; k++) {
            if (k != i) {
                let factor = matrix[k][i];
                for (let l = 0; l < matrix[k].length; l++) {
                    matrix[k][l] -= factor * matrix[i][l];
                }
            }
        }
        steps.push(JSON.parse(JSON.stringify(matrix)));
    }

    // Exibindo a matriz na tela
    document.getElementById('matrix').style.display = 'inline-block';
    let matrixDiv = document.getElementById('matrix');
    matrixDiv.innerHTML = '';
    for (let s = 0; s < steps.length; s++) {
        matrixDiv.innerHTML += 'Passo ' + (s + 1) + ':<br>';
        for (let i = 0; i < steps[s].length; i++) {
            for (let j = 0; j < steps[s][i].length; j++) {
                matrixDiv.innerHTML += steps[s][i][j].toFixed(2) + ' ';
            }
            matrixDiv.innerHTML += '<br>';
        }
        matrixDiv.innerHTML += '<br>';
    }

    document.getElementById('l1c1').value = ''; 
    document.getElementById('l1c2').value = ''; 
    document.getElementById('l1c3').value = ''; 
    document.getElementById('l1c4').value = '';
    document.getElementById('l2c1').value = ''; 
    document.getElementById('l2c2').value = ''; 
    document.getElementById('l2c3').value = ''; 
    document.getElementById('l2c4').value = '';
    document.getElementById('l3c1').value = ''; 
    document.getElementById('l3c2').value = ''; 
    document.getElementById('l3c3').value = ''; 
    document.getElementById('l3c4').value = '';
}