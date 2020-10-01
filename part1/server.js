const express = require("express");
const app = express();
const PORT = 8010;

app.get("/", (req, res) => {
    res.send("Enter text ...");
});

app.get('/:one', (req, res) => {
    res.send(req.params.one);
});

app.listen(PORT, () => {
    console.log("Server running at 8000");
})


