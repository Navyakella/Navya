const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const ***REMOVED*** = process.env.***REMOVED***;
const GEMINI_MODEL = "models/gemini-1.5-flash"; // ✅ Recommended model

if (!***REMOVED***) {
    console.error("❌ ERROR: Missing Gemini API Key. Check your .env file!");
    process.exit(1);
}

app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;

        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/${GEMINI_MODEL}:generateContent?key=${***REMOVED***}`,
            {
                contents: [{ parts: [{ text: message }] }]
            }
        );

        const reply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
        res.json({ response: reply });
    } catch (error) {
        console.error("❌ Gemini API Error:", error.response?.data || error.message);
        res.status(500).json({ error: "API request failed. Check logs." });
    }
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));
