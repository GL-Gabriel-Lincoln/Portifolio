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

document.getElementById('texto1').addEventListener('blur', function(e) {
    if (this.value.length < 3) {
        alert("O campo deve conter no mínimo 3 letras.");
        this.focus();
    }
});

document.getElementById('texto1').addEventListener('keypress', function(e) {
    var regex = new RegExp("^[a-z0-9._]*$");
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
    var regex = new RegExp("^[a-z0-9._]*$");
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
    var input2 = document.createElement("texto1").value;
    var input = document.getElementById('texto2').value;
    var repeatCharRegex = /([a-z])\1{4,}/;
    
    if(repeatCharRegex.test(input) || hasSimpleSequence(input)) {
        alert("A senha não deve conter sequências numéricas simples nem repetir um caractere mais de 4 vezes seguidas.");
        return false;
    }
    if(repeatCharRegex.test(input2)) {
        alert("A senha não deve repetir um caractere mais de 4 vezes seguidas.");
        return false;
    }
    return true;
}

function hasSimpleSequence(input) {
    for(var i = 0; i < input.length - 2; i++) {
        var first = input.charCodeAt(i);
        var second = input.charCodeAt(i + 1);
        var third = input.charCodeAt(i + 2);
        
        if(first + 1 === second && second + 1 === third) {
            return true;
        }
    }
    return false;
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