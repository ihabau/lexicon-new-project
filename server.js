console.log("hello node!!")

const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;


const fs = require('fs');
const path = require('path');
const Item = require('./Item');
const FILE_PATH = path.join(__dirname, './database.json');


function addItemToDataset(name, disc) {
    // 1. Create a new instance using your class
    const newItem = new Item(name, disc);

    let currentDataset = [];

    // 2. Read existing data if the file already exists
    if (fs.existsSync(FILE_PATH)) {
        try {
            const rawData = fs.readFileSync(FILE_PATH, 'utf8');
            currentDataset = JSON.parse(rawData);
            
            // Safety check: ensure the file data is an array
            if (!Array.isArray(currentDataset)) {
                currentDataset = [];
            }
        } catch (error) {
            console.error("Error reading or parsing dataset.json, resetting array:", error.message);
            currentDataset = [];
        }
    }

    // 3. Stack (append) the clean object onto the array
    currentDataset.push(newItem.toObject());

    // 4. Save the full stacked array back to disk with nice indentation formatting
    fs.writeFileSync(FILE_PATH, JSON.stringify(currentDataset, null, 2), 'utf8');
    
    console.log(`Successfully added "${name}" to dataset.json!`);
    return currentDataset;
}

module.exports = { addItemToDataset };


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
