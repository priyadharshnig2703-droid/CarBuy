function ProductCard({brand,name,price,image,originalPrice,discount}){
    return(
    <div className = "border rounded-lg overflow-hidden">
        <img className = "w-full h-64 object-cover" src={image}></img>
 <div className = "p-4">
    <p className = "font-bold">{brand}</p>
<p className = "text-sm">{name}</p>
<div className ="flex gap-4">
<p className = "font-bold">{price}</p>
<p className = "line-through">{originalPrice}</p>
<p className = "text-sm">{discount}</p>

</div>

    </div>       


    </div>
    )
}
export default ProductCard