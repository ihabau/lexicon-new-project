console.log("hello node!!")

const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// A test route for the home URL
app.get('/', (req, res) => {
    res.json({ message: "Hello World from the Node backend!" });
});

// Start the server and listen for connections
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
