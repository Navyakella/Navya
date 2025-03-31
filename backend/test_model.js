const axios = require("axios");

const GEMINI_API_KEY = "AIzaSyDMEOKtLEbdQ46LqAHPrRMHVYwocqkRzMg"; // Replace with your actual key

axios.get(`https://generativelanguage.googleapis.com/v1/models?key=${GEMINI_API_KEY}`)
    .then(response => {
        console.log("Available Models:", response.data);
    })
    .catch(error => {
        console.error("Error:", error.response?.data || error.message);
    });
