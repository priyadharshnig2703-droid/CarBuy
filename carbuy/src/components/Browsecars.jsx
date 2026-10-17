
import { useState } from "react";
function BrowseCars() {
    const[showFilters, setShowFilters] = useState(false);

const [selectedMake, setSelectedMake] = useState("");
const [selectedModel, setSelectedModel] = useState("");
const [selectedBody, setSelectedBody] = useState("");


const cars = [
  {
    name: "Toyota Fortuner",
    make: "Toyota",
    model: "Fortuner",
    body: "SUV",
    price: 4200000,
    image: "/Toyota Fortuner.png"
  },
  {
    name: "Hyundai Creta",
    make: "Hyundai",
    model: "Creta",
    body: "SUV",
    price: 1850000,
    image: "/Hyundai Creta.png"
  },

{
  name: "Maruti Swift",
  make: "Maruti",
  model: "Swift",
  body: "Hatchback",
  price: 820000,
  image: "/Maruti Swift.png"
},
{
  name: "Honda City",
  make: "Honda",
  model: "City",
  body: "Sedan",
  price: 1450000,
  image: "/Honda City.png"
},

{
  name: "Tata Nexon",
  make: "Tata",
  model: "Nexon",
  body: "SUV",
  price: 900000,
  image: "Tata Nexon.png"
},
{
  name: "Kia Seltos",
  make: "Kia",
  model: "Seltos",
  body: "SUV",
  price: 1200000,
  image: "Kia Seltos.png"
},
{
  name: "Mahindra Thar",
  make: "Mahindra",
  model: "Thar",
  body: "SUV",
  price: 1200000,
  image: "/Mahendira Thar.png"
},
{
  name: "Tata Punch",
  make: "Tata",
  model: "Punch",
  body: "SUV",
  price: 600000,
  image: "Tata Punch.png"
}


];

const availableModels = cars.filter((car) => {
  return selectedMake === "" || car.make === selectedMake;
});


const filteredCars = cars.filter((car) => {
  return (
    (selectedMake === "" || car.make === selectedMake) &&
    (selectedModel === "" || car.model === selectedModel) &&
    (selectedBody === "" || car.body === selectedBody)
  );
});



return (
<section className ="browse-cars-page">
<div className="browse-hero">
<h1>Find Your Perfect Car</h1>
<p>Find the perfect car that suits your needs and budget.</p>
</div>
<img className="browse-hero-car" src="/thar.png" alt="Mahindra Thar" />
<div className="car-search-bar">
    

    
<select
  value={selectedMake}
  onChange={(e) => setSelectedMake(e.target.value)}
>
    <option value="">Make</option>
<option value="Toyota">Toyota</option>
<option value="Hyundai">Hyundai</option>
<option value="Maruti">Maruti</option>
<option value="Honda">Honda</option>
<option value="Tata">Tata</option>
<option value="Kia">Kia</option>
<option value="Mahindra">Mahindra</option>

</select>
<select value={selectedModel}
  onChange={(e) => setSelectedModel(e.target.value)}
>
  
    <option value="">Models</option>
    {availableModels.map((car) => (
    <option value={car.model} key={car.model}>
        {car.model}
    </option>
    ))}
    
    </select>
 <select
  value={selectedBody}
  onChange={(e) => setSelectedBody(e.target.value)}
> 
<option value="">Body</option>
<option value="SUV">SUV</option>
<option value="Hatchback">Hatchback</option>
<option value="Sedan">Sedan</option>


</select>
<button className="filter-btn" onClick={()=>setShowFilters(!showFilters)}>☷</button>
<button className="search-btn">Search</button>
</div>
{showFilters && (
<div className="extra-filters">
<h3>Additional Filters</h3>
<select>
<option value="">Fuel Type</option>
<option value="petrol">Petrol</option>
<option value="diesel">Diesel</option>
<option value="electric">Electric</option>
</select>
<select>
<option value="">Transmission</option>
<option value="manual">Manual</option>
<option value="automatic">Automatic</option>
</select>
<select>
  <option value="">Year</option>
  <option value="2025">2025</option>
  <option value="2024">2024</option>
  <option value="2023">2023</option>
</select>
<input
  type="number"
  placeholder="e.g. 500000"
/>

<input
  type="number"
  placeholder="e.g. 2000000"
/>
</div>

)}
<section className="car-listings">
  <h2>Listings</h2>
  <p> Available Cars</p>

<div className = "listing-container">


{filteredCars.length > 0 ? (
  filteredCars.map((car) => (
    <div className="listing-card" key={car.name}>
      <img src={car.image} alt={car.name} />

      <div className="listing-details">
        <h3>{car.name}</h3>
        <p>₹{car.price.toLocaleString("en-IN")}</p>
        <button>View Car</button>
      </div>
    </div>
  ))
) : (
  <p className="no-cars-message">
    Sorry, no cars found. Please try another option.
  </p>
)}


</div>
  

</section>
</section>
);
}

export default BrowseCars;
