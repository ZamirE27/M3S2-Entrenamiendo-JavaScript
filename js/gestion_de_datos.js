console.log("¡Data management using Objects, Sets and Maps")

// The Product class represents a product with an ID, name, and price
// It includes a method to display product information.
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    showInfo() {
        return `${this.name} cost $${this.price}`;
    }
}

// The ProductManager class is responsible for managing products
// It allows adding, retrieving, and deleting products.
class ProductManager {

    // Here we store the products using their IDs as keys
    constructor() {
        this.products = {};
    }


    // This method creates a new Product instance and adds it to the products object
    addProduct(id, name, price) {
        const newProduct = new Product(id, name, price);
        this.products[id] = newProduct;
    }

    // Get all products
    getProducts() {
        return this.products;
    }

    // Get a product by its ID
    getProduct(id) {
        return this.products[id] || null;
    }

    // Delete a product by its ID 
    deleteProduct(id) {
        delete this.products[id];
    }
};

// Initializing the ProductManager this will allow us to manage products
// and perform operations like adding, retrieving, and deleting products.
const manager = new ProductManager();

manager.addProduct(1, "Laptop", 1500);
manager.addProduct(2, "Fridge", 2500);
manager.addProduct(3, "sofa", 2000);

// Here we use a Set to store unique product names
const setProducts = new Set() // here we use Set to ensure uniqueness

setProducts.add(manager.getProduct(1).name); 
setProducts.add(manager.getProduct(2).name);
setProducts.add(manager.getProduct(3).name);

// Here we use a Map to associate categories with products
// This allows us to easily look up products by their category
const mapProducts = new Map([
    ["Technology", "laptop"],
    ["Appliances", "fridge"],
    ["Furniture", "sofa"]
]);


// here we use a for-in loop to iterate over the products
console.log("Products in Object:");
for (const id in manager.getProducts()  ) {
    console.log(`ID: ${id}, Product details: ${manager.getProduct(id).showInfo()}`)
};

// Here we use a for-of loop to iterate over the Set
console.log("Products in Set:");
for (const product of setProducts) {
    console.log(`Product in Set: ${product}`);
}

// Here we use a for-of loop to iterate over the Map
console.log("Products in Map:");
mapProducts.forEach((product, categories) => {
    console.log(`Category: ${categories}, Product: ${product}`);
});

// Validations and testing
console.log("Complete testing of data management with Objects, Sets and Maps")
console.log("Product list using (Objects): ",manager);
console.log("Unique products (Set)", setProducts);
console.log("Producs and categories (Map)", mapProducts);

// Testing the showInfo method
console.log("Testing showInfo method for products:");
const everything = manager.getProducts();
console.log(everything[1].showInfo()); 
console.log(everything[2].showInfo());

