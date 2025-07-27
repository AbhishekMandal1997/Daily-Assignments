const checkout = {
    items: [],
    total: 0,

    addItem(item) {
        //By doing this I cam coerce item.price to a number
        const price = Number(item.price);

        if (isNaN(price) || price < 0) {
            console.log("Invalid price.");
            return;
        }

        this.items.push({ ...item, price }); 
        this.total += price;
    },

    getTotal() {
        return `Total: $${this.total.toFixed(2)}`; // Corrected template literal
    }
};

checkout.addItem({ name: "Item 1", price: "99.95" });  
checkout.addItem({ name: "Item 2", price: 3.50 });             
checkout.addItem({ name: "Item 3", price: "abc" });     

console.log(checkout.getTotal());
