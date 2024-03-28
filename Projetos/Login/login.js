document.getElementById('texto1').addEventListener('keydown', function(e) {
    if (e.key === ' ') {
        e.preventDefault();
    }
});

document.getElementById('texto2').addEventListener('keydown', function(e) {
    if (e.key === ' ') {
        e.preventDefault();
    }
});

document.getElementById('texto1').addEventListener('keypress', function(e) {
    var regex = new RegExp("^[a-zA-Z0-9._]*$");
    var char = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (!regex.test(char) || this.value.length >= 20) {
        e.preventDefault();
    }
});

document.getElementById('texto2').addEventListener('keypress', function(e) {
    var regex = new RegExp("^[a-zA-Z0-9.*]*$");
    var char = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (!regex.test(char) || this.value.length >= 30) {
        e.preventDefault();
    }
});

document.getElementById('texto1').addEventListener('paste', function(e) {
    var pasteData = e.clipboardData.getData('text');
    var regex = new RegExp("^[a-zA-Z0-9._]*$");
    if (!regex.test(pasteData) || this.value.length >= 20) {
        e.preventDefault();
    }
});

document.getElementById('texto2').addEventListener('paste', function(e) {
    var pasteData = e.clipboardData.getData('text');
    var regex = new RegExp("^[a-zA-Z0-9.*]*$");
    if (!regex.test(pasteData) || this.value.length >= 30) {
        e.preventDefault();
    }
});

function validateInput() {
    var input = document.getElementById('texto2').value;
    var simpleSequenceRegex = /(012|123|234|345|456|567|678|789|890)/;
    var repeatCharRegex = /(.)\1{4,}/;
    
    if(simpleSequenceRegex.test(input) || repeatCharRegex.test(input)) {
        alert("A senha não deve conter sequências numéricas simples nem repetir um caractere mais de 4 vezes seguidas.");
        return false;
    }
    return true;
}

document.getElementById('myForm').addEventListener('submit', function(e) {
e.preventDefault();
var texto1 = document.getElementById('texto1').value;
var texto2 = document.getElementById('texto2').value;
fetch('https://ka4gmdhxnh.execute-api.us-east-2.amazonaws.com/Teste/escrever', {
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
        document.getElementById('mensagem').style.display = 'inline-block';
        document.getElementById('mensagem').textContent = data.message;
    }
})
.catch((error) => {
  console.error('Error:', error);
});
});