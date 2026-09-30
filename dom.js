
<p class="p1">Apple</p>
<p class="p1">Orange</p>
<p class="p1">Mango</p>

<p class="p2">Red</p>
<p class="p2">Blue</p>
<p class="p2">Green</p>

<button onclick="copyText()">Copy</button>
//Copy Text
function copyText() {

    const p1 = document.querySelectorAll(".p1");
    const p2 = document.querySelectorAll(".p2");

    p1.forEach((item, index) => {
        item.textContent = p2[index].textContent;
    });

}

/*Change Border*/
function changeBorder() {

    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {

        box.style.border = "5px solid red";
        box.style.borderRadius = "20px";

    });

}

/*Alternate Background*/
function change() {

    const items = document.querySelectorAll(".item");

    items.forEach((item, index) => {

        if (index % 2 === 0) {
            item.style.backgroundColor = "yellow";
        } else {
            item.style.backgroundColor = "pink";
        }

    });

}

/*Hide Every Second Element*/
function hide() {

    const titles = document.querySelectorAll(".title");

    titles.forEach((title, index) => {

        if (index % 2 !== 0) {
            title.style.display = "none";
        }

    });

}

/*Increase Font Size*/
function increase() {

    const text = document.querySelectorAll(".text");

    text.forEach((item) => {

        item.style.fontSize = "40px";
        item.style.fontWeight = "bold";

    });

}


/*Change Image*/
function changeImage() {

    const image = document.querySelector(".img");

    image.src = "dog.jpg";

}


/*Change Link*/
function changeLink() {

    const link = document.querySelector(".link");

    link.textContent = "YouTube";
    link.href = "https://youtube.com";

}

//Change Input Value

function change() {

    const input = document.querySelector(".name");

    input.value = "Developer";

}

//Create Colour Pattern
function colour() {

    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box, index) => {

        if (index % 3 === 0) {

            box.style.backgroundColor = "red";

        } else if (index % 3 === 1) {

            box.style.backgroundColor = "green";

        } else {

            box.style.backgroundColor = "blue";

        }

    });

}

//Card Styling
function design() {

    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {

        card.style.width = "200px";
        card.style.padding = "20px";
        card.style.border = "2px solid black";
        card.style.borderRadius = "15px";
        card.style.backgroundColor = "lightblue";
        card.style.color = "black";
        card.style.textAlign = "center";
        card.style.margin = "20px";

    });

}