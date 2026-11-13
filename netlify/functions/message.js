exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Méthode non autorisée" })
    };
  }

  try {
    const data = JSON.parse(event.body || "{}");
    const message = data.message;

    if (!message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Message manquant" })
      };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        reply: "Bonjour ! Je suis Bakouan Assistant. Tu m'as écrit : " + message
      })
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Message invalide" })
    };
  }
};