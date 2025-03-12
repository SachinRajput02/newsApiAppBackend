const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const API_KEY = "YOUR_NEWAPI_KEY";

app.get("/news", async (req, res) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching news" });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
