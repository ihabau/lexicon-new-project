console.log("hello node!!")

const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;


const fs = require('fs');
const path = require('path');
const Item = require('./Item');
const FILE_PATH = path.join(__dirname, './database.json');


// Deep search helper function
function findItemDeeply(array, targetName) {
    for (const item of array) {
        if (item.name.toLowerCase() === targetName.toLowerCase()) {
            return item; // Found it!
        }
        // If this item has children, search inside them recursively
        if (item.subEntries && item.subEntries.length > 0) {
            const foundChild = findItemDeeply(item.subEntries, targetName);
            if (foundChild) return foundChild;
        }
    }
    return null; // Not found in this branch
}

// Usage in your backend logic:
function addDeepNestedItem(parentName, name, disc) {
    const dataset = readDataset(); // reads dataset.json
    
    // Search through the entire nested tree structure
    const targetParent = findItemDeeply(dataset, parentName);
    
    if (!targetParent) {
        throw new Error(`Could not find parent entry "${parentName}" anywhere in the dataset.`);
    }
    
    // Add the new item right into that deep nested target
    targetParent.subEntries.push({
        name: name,
        disc: disc,
        subEntries: []
    });
    
    saveDataset(dataset); // saves back to dataset.json
}











// Start the server and listen for connections
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
