const axios = require("axios");

const ***REMOVED*** = "AIzaSyDMEOKtLEbdQ46LqAHPrRMHVYwocqkRzMg"; // Replace with your actual key

axios.get(`https://generativelanguage.googleapis.com/v1/models?key=${***REMOVED***}`)
    .then(response => {
        console.log("Available Models:", response.data);
    })
    .catch(error => {
        console.error("Error:", error.response?.data || error.message);
    });
