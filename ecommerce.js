

const app = document.querySelector("#app"); // empty box,query selector to find

    function showLoginPage()//login page
    {
       //innerhtml 
       app.innerHTML =`<h1>Ecommerce</h1>
       <form id ="loginForm">
       <label>Email</label>
       <input type = "text"  id="email">

    <label >Password</label>
    <input type = "password" id="password">
    <input type ="checkbox" id="showPassword">

   <button >Login</button>

   <p id = "emailError"></p>
    <p id="passwordError"></p>

  </form>
       `;
       const loginForm = document.querySelector("#loginForm");
       const email = document.querySelector("#email");
const password = document.querySelector("#password");
const showPassword = document.querySelector("#showPassword");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

showPassword.addEventListener("change", function () { // event
    if (showPassword.checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }
});


// Login

loginForm.addEventListener("submit", function (e) { // event
    e.preventDefault();
    const userEmail = email.value; // get input from user
    const userPassword = password.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    // Email validation
    if (userEmail === "") {
        emailError.textContent = "Email is required";
        return;

    } 
    else if (!emailPattern.test(userEmail)) { //regexp Check email format
        emailError.textContent = "Invalid email";
        return;
    }


    // Password validation
    if (userPassword === "") {
        passwordError.textContent = "Password is required";
        return;

    } else if (userPassword.length < 6) {
          passwordError.textContent =
            "Password must contain at least 6 characters";

        return;



    }
    localStorage.setItem("isLoggedIn", "true");
    showHomePage()
      
    });
}
function showHomePage()
{
    app.innerHTML = `

    <h1>E-SHOP</h1>
    <input type = "text" id ="searchInput">
    <button id="cartButton">Cart</button>
    <a href="#">Home</a>
    <a href="#">Categories</a>
    <a href="#">Offers</a>
    <div id="productContainer"></div>

     
    
    `;
    const productContainer = document.querySelector("#productContainer");
    products.map(product => {
       
        const card =` <h2>${product.name}</h2>

        <p>Price: ₹${product.price}</p>
         <p>Offer: ${product.offer} % OFF</p>
          <p>Rating: *${product.rating}</p>
          <img src="${product.image}">
          <p>Stock: ${product.stock}</p>
          <button data-id="${product.id}">Add to Cart</button>



        `;
           productContainer.innerHTML += card;


});

    
}
const products = [
    {
        id: 1,
        name: "Classic Black",
        category: "Watches",
        price: 50000,
        offer: 20,
        rating: 4.5,
        stock: 10,
        image: "watch1.jpg"
    },
    {
        id: 2,
        name: "Silver Steel",
        category: "Watches",
        price: 10000,
        offer: 20,
        rating: 3.5,
        stock: 12,
        image: "watch2.jpg"
    },
    {
        id: 3,
        name: "Golden Edge",
        category: "Watches",
        price: 25000,
        offer: 15,
        rating: 4.7,
        stock: 8,
        image: "watch3.jpg"
    },
    {
        id: 4,
        name: "Leather Brown",
        category: "Watches",
        price: 7500,
        offer: 10,
        rating: 4.2,
        stock: 15,
        image: "watch4.jpg"
    },
    {
        id: 5,
        name: "Royal Blue",
        category: "Watches",
        price: 12000,
        offer: 25,
        rating: 4.6,
        stock: 7,
        image: "watch5.jpg"
    },
    {
        id: 6,
        name: "Sport Black",
        category: "Watches",
        price: 8500,
        offer: 18,
        rating: 4.1,
        stock: 20,
        image: "watch6.jpg"
    },
    {
        id: 7,
        name: "Luxury Gold",
        category: "Watches",
        price: 45000,
        offer: 30,
        rating: 4.8,
        stock: 5,
        image: "watch7.jpg"
    },
    {
        id: 8,
        name: "Minimal White",
        category: "Watches",
        price: 6500,
        offer: 12,
        rating: 4.0,
        stock: 18,
        image: "watch8.jpg"
    },
    {
        id: 9,
        name: "Chrono Silver",
        category: "Watches",
        price: 18000,
        offer: 20,
        rating: 4.4,
        stock: 9,
        image: "watch9.jpg"
    },
    {
        id: 10,
        name: "Classic Brown",
        category: "Watches",
        price: 9000,
        offer: 15,
        rating: 4.3,
        stock: 14,
        image: "watch10.jpg"
    },
    {
        id: 11,
        name: "Smart Fit",
        category: "Smart Watches",
        price: 15000,
        offer: 20,
        rating: 4.5,
        stock: 11,
        image: "watch11.jpg"
    },
    {
        id: 12,
        name: "Smart Pro",
        category: "Smart Watches",
        price: 22000,
        offer: 25,
        rating: 4.7,
        stock: 6,
        image: "watch12.jpg"
    },
    {
        id: 13,
        name: "Active Sport",
        category: "Smart Watches",
        price: 13000,
        offer: 15,
        rating: 4.2,
        stock: 16,
        image: "watch13.jpg"
    },
    {
        id: 14,
        name: "Fitness Plus",
        category: "Smart Watches",
        price: 11000,
        offer: 10,
        rating: 4.1,
        stock: 13,
        image: "watch14.jpg"
    },
    {
        id: 15,
        name: "Smart Elite",
        category: "Smart Watches",
        price: 28000,
        offer: 30,
        rating: 4.8,
        stock: 4,
        image: "watch15.jpg"
    },
    {
        id: 16,
        name: "Midnight Black",
        category: "Watches",
        price: 16000,
        offer: 20,
        rating: 4.4,
        stock: 10,
        image: "watch16.jpg"
    },
    {
        id: 17,
        name: "Silver Classic",
        category: "Watches",
        price: 14000,
        offer: 18,
        rating: 4.3,
        stock: 17,
        image: "watch17.jpg"
    },
    {
        id: 18,
        name: "Premium Leather",
        category: "Watches",
        price: 20000,
        offer: 22,
        rating: 4.6,
        stock: 8,
        image: "watch18.jpg"
    },
    {
        id: 19,
        name: "Executive Gold",
        category: "Watches",
        price: 35000,
        offer: 25,
        rating: 4.7,
        stock: 6,
        image: "watch19.jpg"
    },
    {
        id: 20,
        name: "Modern Steel",
        category: "Watches",
        price: 12500,
        offer: 15,
        rating: 4.2,
        stock: 12,
        image: "watch20.jpg"
    }
];
showLoginPage();
addToCartButtons.forEach(button => {

    button.addEventListener("click", function () {

    });

});




