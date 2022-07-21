// Exercício 2

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

productsWithIds = [];

const setId = () => {
    let i = 1;
    productsWithIds = products.map(item => ({id: i++, ...item}));
    console.log('Exercício 1', productsWithIds);
}

const printProduct = () => {
    console.log('Exercício 2', productsWithIds.map(item => item.name));
}

const printProduct3 = () => {
    console.log('Exercício 3', productsWithIds.filter(item => item.id === 3));
}

const printBlackProducts = () => {
    const blackProducts = productsWithIds.filter(item => item.colors.includes('black'));
    console.log('Exercício 4', blackProducts);
}

const printProductsWithoutColor = () => {
    const productsWithoutColor = productsWithIds.filter(item => item.colors.length === 0);
    console.log('Exercício 5', productsWithoutColor);
}

setId();
printProduct();
printProduct3();
printBlackProducts();
printProductsWithoutColor();