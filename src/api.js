const express = require("express");

// Create an Express application
const app = express();

// Define a route handler for the root URL
app.get("/", (req, res) => {
    res.send("Hello, API!");
});

// Define a route handler for a sample API endpoint
app.get("/api/users", (req, res) => {
    // Sample data (replace with real data from a database)
    const users = [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
    ];

    // Send the users data as JSON
    res.json(users);
});

// Start the server and listen on a port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
