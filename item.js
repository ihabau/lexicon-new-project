class Item {
    constructor(name, disc) {
        this.name = name;
        this.disc = disc; // Description
        this.createdAt = new Date().toISOString(); // Optional: handy for data tracking
    }

    // Converts the class instance into a clean JSON-ready object
    toObject() {
        return {
            name: this.name,
            disc: this.disc,
            createdAt: this.createdAt
        };
    }
}

module.exports = Item;
