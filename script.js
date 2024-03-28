document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var texto = document.getElementById('texto').value;
    fetch('https://ka4gmdhxnh.execute-api.us-east-2.amazonaws.com/default/escrever', {
        method: 'POST',
        mode:'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({texto: texto})
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
});
