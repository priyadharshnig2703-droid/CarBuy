const allProducts = shoppingStore.categories.flatMap(
    category => category.products
);

const expensiveProducts = allProducts.filter(
    product => product.price > 30000
);

console.log(expensiveProducts);

/*Find the most expensive product using reduce().*/

const mostExpensiveProduct = allProducts.reduce((accumulator, currentValue) => {

    if (currentValue.price > accumulator.price) {
        return currentValue;
    } else {
        return accumulator;
    }

}, allProducts[0]);

console.log(mostExpensiveProduct);

/* Print the names of all products.*/

