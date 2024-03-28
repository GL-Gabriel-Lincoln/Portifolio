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
            document.getElementById('mensagem').innerText = data.message;
        }
    })
    .catch((error) => {
        if (error.status === 409) {
            error.json().then(data => {
                document.getElementById('mensagem').innerText = data.message;
            });
        } else {
            console.error('Error:', error);
            document.getElementById('mensagem').innerText = 'Erro ao enviar os dados.';
        }
    });
});
