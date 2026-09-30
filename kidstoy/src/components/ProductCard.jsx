import { Link } from "react-router-dom";
function ProductCard({ product }) {
return (
<div>
<h2>{product.name}</h2>
<p>₹{product.price}</p>
<Link to={`/products/${product.id}`}>
View Details
</Link>
</div>
);
}

export default ProductCard;