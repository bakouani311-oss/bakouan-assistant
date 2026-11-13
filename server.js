
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bakouan Assistant est en ligne !");
});

app.post("/message", (req, res) => {
  const message = req.body.message;

  if (!message) {
    return res.status(400).json({
      error: "Message manquant"
    });
  }

  res.json({
    reply: "Bonjour ! Je suis Bakouan Assistant. Ton message est : " + message
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Bakouan Assistant démarre sur le port " + PORT);
});
