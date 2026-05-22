// NodeItem.js
class NodeItem {
    constructor(name, disc) {
        this.name = name;
        this.disc = disc;
        this.subEntries = []; // Every item can now hold its own child items
    }
}

module.exports = NodeItem;
