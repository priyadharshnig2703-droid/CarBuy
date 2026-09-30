import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
const [products, setProducts] = useState([]);

useEffect(() => {
fetch("/product.json")
.then((response) => response.json())
.then((data) => {
setProducts(data);
});
}, []);
return (
<div>
{products.map((product) => (
<ProductCard
key={product.id} product={product}/>
))}
</div>
);
}

export default ProductList;