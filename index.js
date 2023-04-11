class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    addProduct(title, description, price, thumbnail, stock) {
        const product = {
            id: this.#nuevoId() + 1,
            title,
            description,
            price,
            thumbnail,
            stock,
        }

        this.products.push(product);
    }

    #nuevoId() {
        let maxId = 0;
        this.products.map((product) => {
            if (product.id > maxId) maxId = product.id;
        });
        return maxId;
    }

    #getProduct(idProduct) {
        return this.products.find((product) => product.id === idProduct)
    }

    getProductById(idProduct) {
        const product = this.#getProduct(idProduct);
        if (product) {
            console.log(product)
        } else {
            console.log('Not Found!');
        }
    }

}

const productManager = new ProductManager();

console.log(productManager.getProducts())
productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 25)
console.log(productManager.getProducts())
productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 25)
console.log(productManager.getProducts())
console.log(productManager.getProductById(2))
console.log(productManager.getProductById(3))
