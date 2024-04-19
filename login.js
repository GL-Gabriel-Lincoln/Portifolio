document.getElementById("texto1").addEventListener("keydown", function (e) {
  if (e.key === " ") {
    e.preventDefault();
  }
});

document.getElementById("texto2").addEventListener("keydown", function (e) {
  if (e.key === " ") {
    e.preventDefault();
  }
});

document.getElementById("texto1").addEventListener("keypress", function (e) {
  var regex = new RegExp("^[a-z0-9._]*$");
  var char = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (!regex.test(char) || this.value.length >= 20) {
    e.preventDefault();
  }
});

document.getElementById("texto2").addEventListener("keypress", function (e) {
  var regex = new RegExp("^[a-zA-Z0-9.*]*$");
  var char = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (!regex.test(char) || this.value.length >= 30) {
    e.preventDefault();
  }
});

document.getElementById("texto1").addEventListener("paste", function (e) {
  var pasteData = e.clipboardData.getData("text");
  var regex = new RegExp("^[a-z0-9._]*$");
  if (!regex.test(pasteData) || this.value.length >= 20) {
    e.preventDefault();
  }
});

document.getElementById("texto2").addEventListener("paste", function (e) {
  var pasteData = e.clipboardData.getData("text");
  var regex = new RegExp("^[a-zA-Z0-9.*]*$");
  if (!regex.test(pasteData) || this.value.length >= 30) {
    e.preventDefault();
  }
});

function validateInput() {
  var input = document.getElementById("texto1").value;
  var input2 = document.getElementById("texto2").value;
  var repeatCharRegex = /(.)\1{4,}/;

  if (repeatCharRegex.test(input)) {
    alert("Um caractere de usuario não deve repetir mais de 4 vezes seguidas.");
    return false;
  }
  if (repeatCharRegex.test(input2) || hasSimpleSequence(input2)) {
    alert(
      "A senha não deve conter sequências numéricas simples nem repetir um caractere mais de 4 vezes seguidas."
    );
    return false;
  }
  return true;
}

function hasSimpleSequence(input) {
  for (var i = 0; i < input.length - 2; i++) {
    var first = input.charCodeAt(i);
    var second = input.charCodeAt(i + 1);
    var third = input.charCodeAt(i + 2);

    if (first + 1 === second && second + 1 === third) {
      return true;
    }
  }
  return false;
}

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("texto2");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("spinner").style.display = "block";
  document.getElementById("entrar").style.display = "none";
  var texto1 = document.getElementById("texto1").value;
  var texto2 = document.getElementById("texto2").value;
  fetch(
    "https://ka4gmdhxnh.execute-api.us-east-2.amazonaws.com/Teste/escrever",
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ texto1: texto1, texto2: texto2 }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.message) {
        document.getElementById("mensagem").style.display = "inline-block";
        document.getElementById("mensagem").textContent = data.message;
      }
      if (
        data.message === "Usuário autenticado com sucesso!" ||
        data.message === "Usúario criado com sucesso!"
      ) {
        window.location.href = "../Portifolio/Projetos/Programando/Programando.html";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
