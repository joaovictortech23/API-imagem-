import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/gerar", async (req, res) => {
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.API_KEY}`
    },
    body: JSON.stringify({
      prompt: req.body.prompt,
      size: "512x512"
    })
  });

  const data = await response.json();
  res.json(data);
});

app.listen(3000);
