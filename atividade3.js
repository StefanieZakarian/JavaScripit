// Exercício 3

let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
]

const addProduct = (name, price, quantity, colors) => {
    products.push({ name: name, price: price, quantity: quantity, colors: colors });
};

const removeProductsOutOfStock = () => {
    const productsInStock = products.filter(item => item.quantity > 0);
};

const printAllStock = () => {
    const allStock = products.reduce((previousValue, item) => {
        return item.quantity + previousValue
    }, 0)
    console.log('Estoque:', allStock);
} 

const printByPrice = () => {
    const price = 199;
    const filteredByPrice = products.filter(item => item.price > price);
    console.log('Produtos acima de R$ 199,00:', filteredByPrice);
}

const printProductsWithLetterO = () => {
    const productsWithLetterO = products.filter( item => item.name.includes('o'));
    console.log('Produtos que contém a letra o:', productsWithLetterO);
}

addProduct('Kindle', 700, 25, ['black', 'white']);
removeProductsOutOfStock();
printAllStock();
printByPrice();
printProductsWithLetterO();