const express = require("express");
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const password = 'password';
const PORT = 8000;

app.get("/", (req, res) => {
    res.send("Enter a word for encryption and decryption...");
});

app.get('/encode/:password', (req, res) => {
    res.send(Vigenere.Cipher(password).crypt(req.params.password));
});

app.get('/decode/:password', (req, res) => {
    res.send(Vigenere.Decipher(password).crypt(req.params.password));
});

app.listen(PORT, () => {
    console.log("Server running at 8000");
})


