
import {useState} from "react";
import ProductCard from "./component/ProductCard";
import Header from "./component/Header";
import product1 from "./assets/product1.png";
import product2 from "./assets/product2.png";
import product3 from "./assets/product3.png";
import product4 from "./assets/product4.png";
import product5 from "./assets/product5.png";
import product6 from "./assets/product6.png";
import PRODUCT7 from "./assets/PRODUCT7.png";
import product8 from "./assets/product8.png";
import product9 from "./assets/product9.png";
import product10 from "./assets/product10.png";
function App(){
const[searchText,setSearchText] = useState("");
  
const products = [
  {
    brand: "Nike",
    name: "T-Shirt",
    price: 799,
    originalPrice: 899,
    rating: 4.3,
    reviews: "3.5k",
    discount: "10% OFF",
    image: product1
  },
  {
    brand: "Puma",
    name: "Tees",
    price: 1299,
    originalPrice: 1599,
    rating: 4.5,
    reviews: "2.1k",
    discount: "18% OFF",
    image: product2
  },
  {
    brand: "Levis",
    name: "Casual T-Shirt",
    price: 999,
    originalPrice: 1299,
    rating: 4.2,
    reviews: "1.8k",
    discount: "23% OFF",
    image: product3
  },
  {
    brand: "Roadster",
    name: "Printed T-Shirt",
    price: 699,
    originalPrice: 999,
    rating: 4.1,
    reviews: "4.2k",
    discount: "30% OFF",
    image: product4
  },
  {
    brand: "HRX",
    name: "Sports T-Shirt",
    price: 849,
    originalPrice: 1099,
    rating: 4.4,
    reviews: "5.6k",
    discount: "22% OFF",
    image: product5
  },
  {
    brand: "Wrogn",
    name: "Oversized T-Shirt",
    price: 1099,
    originalPrice: 1499,
    rating: 4.3,
    reviews: "3.9k",
    discount: "26% OFF",
    image: product6
  },
  {
    brand: "H&M",
    name: "Cotton Tee",
    price: 899,
    originalPrice: 1199,
    rating: 4.0,
    reviews: "2.7k",
    discount: "25% OFF",
    image: PRODUCT7
  },
  {
    brand: "U.S. Polo",
    name: "Solid T-Shirt",
    price: 1199,
    originalPrice: 1599,
    rating: 4.6,
    reviews: "6.1k",
    discount: "25% OFF",
    image: product8
  },
  {
    brand: "Allen Solly",
    name: "Regular Fit Tee",
    price: 949,
    originalPrice: 1299,
    rating: 4.2,
    reviews: "2.9k",
    discount: "27% OFF",
    image: product9
  },
  {
    brand: "Jack & Jones",
    name: "T-Shirt",
    price: 1399,
    originalPrice: 1799,
    rating: 4.5,
    reviews: "7.2k",
    discount: "22% OFF",
    image: product10
  }
];

let filteredProducts;

if (searchText === "") {
filteredProducts = products;
} 
else {

filteredProducts = products.filter((product) => {
return searchText === product.brand;
});
}
return (
  
<>
<Header/>
<div className = " px-4 pxy-4 text-sm">
Home / Clothing / <span className= "font-bold">Men T-Shirts</span>
</div>
<div className= "px-8 py-4">
  <h2>Men's T-Shirt
    <span className = " font-normal">386992 items</span>
  </h2>
</div>
<div className="border-t border-b px-8 py-4 flex justify-between items-center">

<div className="flex gap-8">
  <p className="font-bold">FILTERS</p>
<p>Bundles</p>
<p>Country of Origin⌄</p>
<p>Size</p>
</div>
<div className="border rounded px-5 py-3">
Sort by: <span className="font-bold">Recommended</span>
</div>
</div>
<div className="flex">

</div>|
<aside className="w-64 border-r">
<div className="p-6">
<h3 className="font-bold mb-5">CATEGORIES</h3>
<p className="mb-3">□ Tshirts</p>
<p className="mb-3">□ Lounge Tshirts</p>
<p>□ Tshirts Smart</p>
</div>
<div className="border-t p-6">
<h3 className="font-bold mb-5">BRAND</h3>
<p className="mb-3">□ Seekbuy love</p>
<p className="mb-3">□ WOOSTRO</p>
<p className="mb-3">□ UDNAG</p>
<p className="mb-3">□ Aseria</p>
<p className="mb-3">□ Caseria</p>
<p className="mb-3">□ Moda Rapido</p>
<p>Roadster</p>
<p className="text-pink-500 mt-4">+ 2260 more</p>
</div>
<div className="border-t p-6">
<h3 className="font-bold mb-5">PRICE</h3>
<div className="border-t-4 mt-6"></div>
<p className="mt-5">₹100 - ₹10,100+</p>
 </div>
 </aside>
 <main className="flex-1 p-6">
<div className="grid grid-cols-3 gap-6">
{products.map((product) => (
<ProductCard
key={product.brand}
brand={product.brand}
name={product.name}
price={product.price}
originalPrice={product.originalPrice}
discount={product.discount}
image={product.image}
/>
 ))}
</div>
</main>
</>
  );
}

export default App;



/*import './App.css'
import { use } from "react";

/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p>count:{count}</p>
    <button onClick ={() => {

      setCount(count+1)
    }}>+</button>

      <button onClick ={() => {

      setCount(count-1)
    }}>-</button>

    </>
  )
}

export default App*/




  

