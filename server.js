const express = require("express"),
    app = express(),
    PORT = process.env.PORT || 3000;

app.disable('x-powered-by')
    .listen(PORT, function() {
        console.log(`Server running on port ${PORT}!`);
    });