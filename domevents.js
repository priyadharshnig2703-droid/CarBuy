
// TASK 1 - BLUR EVENT


let fullName = document.querySelector("#fullName");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");

let nameMessage = document.querySelector("#nameMessage");
let emailMessage = document.querySelector("#emailMessage");
let phoneMessage = document.querySelector("#phoneMessage");
let successMessage = document.querySelector("#successMessage");


fullName.addEventListener("blur", function() {

    if (fullName.value == "") {

        nameMessage.textContent = "Name is required.";

    }
    else {

        nameMessage.textContent = fullName.value;

    }

});


email.addEventListener("blur", function() {

    if (email.value.includes("@") == false) {

        emailMessage.textContent = "Invalid email.";

    }
    else {

        emailMessage.textContent = email.value;

    }

});


phone.addEventListener("blur", function() {

    if (phone.value.length != 10) {

        phoneMessage.textContent = "Phone number must contain 10 digits.";

    }
    else {

        phoneMessage.textContent = phone.value;

    }

});


// Check all fields

function checkForm() {

    if (
        fullName.value != "" &&
        email.value.includes("@") &&
        phone.value.length == 10
    ) {

        successMessage.textContent = "All fields are valid!";

    }
    else {

        successMessage.textContent = "";

    }

}


fullName.addEventListener("blur", checkForm);
email.addEventListener("blur", checkForm);
phone.addEventListener("blur", checkForm);



// TASK 2 - MOUSEOVER


let products = document.querySelectorAll(".product");

for (let i = 0; i < products.length; i++) {

    products[i].addEventListener("mouseover", function() {

        products[i].style.transform = "scale(1.1)";
        products[i].style.backgroundColor = "lightblue";
        products[i].style.boxShadow = "0 0 20px gray";

        products[i].querySelector(".description").style.display = "block";

        products[i].querySelector(".price").style.display = "block";

    });


    products[i].addEventListener("mouseout", function() {

        products[i].style.transform = "scale(1)";
        products[i].style.backgroundColor = "lightgray";
        products[i].style.boxShadow = "none";

        products[i].querySelector(".description").style.display = "none";

        products[i].querySelector(".price").style.display = "none";

    });

}



// TASK 3 - GALLERY


let galleryItems = document.querySelectorAll(".gallery-item");

for (let i = 0; i < galleryItems.length; i++) {

    galleryItems[i].addEventListener("mouseover", function() {

        galleryItems[i].querySelector("img").style.transform = "scale(1.2)";

        galleryItems[i].querySelector(".image-title").style.display = "block";

    });


    galleryItems[i].addEventListener("mouseout", function() {

        galleryItems[i].querySelector("img").style.transform = "scale(1)";

        galleryItems[i].querySelector(".image-title").style.display = "none";

    });

}



// TASK 4 - EVENT OBJECT

let clickArea = document.querySelector("#clickArea");

clickArea.addEventListener("click", function(event) {

    document.querySelector("#eventType").textContent = event.type;

    document.querySelector("#mouseX").textContent = event.clientX;

    document.querySelector("#mouseY").textContent = event.clientY;

    document.querySelector("#target").textContent = event.target.id;

    document.querySelector("#currentTarget").textContent =
        event.currentTarget.id;

    document.querySelector("#timeStamp").textContent =
        event.timeStamp;

});



// TASK 5 - MOUSE POSITION


let mouseBox = document.querySelector("#mouseBox");

let xPosition = document.querySelector("#xPosition");
let yPosition = document.querySelector("#yPosition");
let movementCount = document.querySelector("#movementCount");

let count = 0;


mouseBox.addEventListener("mousemove", function(event) {

    xPosition.textContent = event.clientX;

    yPosition.textContent = event.clientY;

    count++;

    movementCount.textContent = count;

});


document.querySelector("#resetMouse").addEventListener("click", function() {

    count = 0;

    xPosition.textContent = 0;

    yPosition.textContent = 0;

    movementCount.textContent = 0;

});


// TASK 6 - EVENT BUBBLING


let grandparent = document.querySelector("#grandparent");
let parent = document.querySelector("#parent");
let child = document.querySelector("#child");

let bubbleButton = document.querySelector("#bubbleButton");

let bubbleResult = document.querySelector("#bubbleResult");


grandparent.addEventListener("click", function() {

    bubbleResult.textContent += " Grandparent Clicked";

});


parent.addEventListener("click", function() {

    bubbleResult.textContent += " Parent Clicked";

});


child.addEventListener("click", function() {

    bubbleResult.textContent += " Child Clicked";

});



// TASK 7 - STOP PROPAGATION
bubbleButton.addEventListener("click", function(event) {

    event.stopPropagation();

    bubbleResult.textContent = "Only Child Button Clicked";

});


// =====================================
// TASK 8 - TARGET VS CURRENT TARGET
// =====================================

let buttonContainer = document.querySelector("#buttonContainer");

let targetResult = document.querySelector("#targetResult");


buttonContainer.addEventListener("click", function(event) {

    targetResult.textContent =
        "Button Text: " + event.target.textContent +
        " | Event Target: " + event.target.tagName +
        " | Current Target: " + event.currentTarget.id;

});



// TASK 9 - MOUSEOVER MENU


let menuItems = document.querySelectorAll(".menu-item");

for (let i = 0; i < menuItems.length; i++) {

    menuItems[i].addEventListener("mouseover", function() {

        menuItems[i].style.backgroundColor = "blue";

        menuItems[i].querySelector(".submenu").style.display = "block";

    });


    menuItems[i].addEventListener("mouseout", function() {

        menuItems[i].style.backgroundColor = "black";

        menuItems[i].querySelector(".submenu").style.display = "none";

    });

}



// TASK 10 - EVENT DELEGATION


let addBox = document.querySelector("#addBox");

let boxContainer = document.querySelector("#boxContainer");

let boxNumber = 0;


// ADD BOX

addBox.addEventListener("click", function() {

    boxNumber++;

    let box = document.createElement("div");

    box.className = "color-box";

    box.innerHTML =
        "<h3>Box " + boxNumber + "</h3>" +
        "<button class='green'>Green</button>" +
        "<button class='red'>Red</button>" +
        "<button class='remove'>Remove</button>";

    boxContainer.append(box);

});


// ONE EVENT LISTENER

boxContainer.addEventListener("click", function(event) {

    let clickedButton = event.target;

    let box = clickedButton.parentElement;


    if (clickedButton.classList.contains("green")) {

        box.style.backgroundColor = "green";

    }


    if (clickedButton.classList.contains("red")) {

        box.style.backgroundColor = "red";

    }


    if (clickedButton.classList.contains("remove")) {

        box.remove();

    }

});