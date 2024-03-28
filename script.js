
document.getElementById('texto1').addEventListener('keydown', function(e) {
    if (e.key === ' ') {
        e.preventDefault();
    }
    checkInputs();
});

document.getElementById('texto2').addEventListener('keydown', function(e) {
    if (e.key === ' ') {
        e.preventDefault();
    }
    checkInputs();
});

function checkInputs() {
    var texto1 = document.getElementById('texto1').value;
    var texto2 = document.getElementById('texto2').value;

    if(texto1 === "" || texto2 === "") {
        alert("Por favor, preencha todos os campos.");
    } else if(texto1.length < 8 || texto1.length > 20 || texto2.length < 8 || texto2.length > 30) {
        alert("Por favor, verifique o comprimento dos seus textos.");
    } else {
        // Os inputs são válidos
    }
}


document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var texto1 = document.getElementById('texto1').value;
    var texto2 = document.getElementById('texto2').value;
    fetch('https://ka4gmdhxnh.execute-api.us-east-2.amazonaws.com/default/escrever', {
        method: 'POST',
        mode:'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({texto1: texto1, texto2: texto2})
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            document.getElementById('mensagem').textContent = data.message;
        }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});