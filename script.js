let userInput = document.getElementById('myInput').value;
    
    await fetch('https://nqi2zih7pd7woez6ah7fu2mjfe0mdfgu.lambda-url.us-east-2.on.aws/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({text: userInput}),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.error('Error:', error));

    await escreverNoArquivo(userInput);
