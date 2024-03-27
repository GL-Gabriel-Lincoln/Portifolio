let userInput = document.getElementById('myInput').value;

fetch('https://eldgrqwo3cbxq4wadgwepkc36u0qdqpz.lambda-url.us-east-2.on.aws/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({text: userInput}),
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => console.error('Error:', error));
