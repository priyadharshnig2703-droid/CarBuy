function showName(){

let name = document.querySelector("#name").value;

document.querySelector("#nameOutput").textContent = name;

document.querySelector("#nameCount").textContent =
"Characters : " + name.length;

if(name==""){

document.querySelector("#nameOutput").textContent =
"Name is required";

}
}


function showEmail(){

let email = document.querySelector("#email").value;

document.querySelector("#emailOutput").textContent =
email.toLowerCase();

}
function showAge(){

let age = document.querySelector("#age").value;

if(age<18){

document.querySelector("#ageOutput").textContent =
"Minor";

}

else{

document.querySelector("#ageOutput").textContent =
"Adult";

}

}
function showGender(){

let gender =
document.querySelector('input[name="gender"]:checked');

document.querySelector("#genderOutput").textContent =
"Selected Gender : " + gender.value;

}
function showCourse(){

let course=document.querySelector("#course").value;

document.querySelector("#courseOutput").textContent=
course;

}
function showSkills(){

let skills=document.querySelectorAll('input[type="checkbox"]');

let result="";

for(let i=0;i<skills.length;i++){

if(skills[i].checked){

result=result+skills[i].value+" ";

}

}

document.querySelector("#skillsOutput").textContent=result;

}
function showDob(){

document.querySelector("#dobOutput").textContent=
document.querySelector("#dob").value;

}
function showFile(){

let file=document.querySelector("#file");

document.querySelector("#fileOutput").textContent=
file.files[0].name;

}
function showAbout(){

let text=document.querySelector("#about").value;

document.querySelector("#charCount").textContent=
"Characters : "+text.length;

let words=text.split(" ");

document.querySelector("#wordCount").textContent=
"Words : "+words.length;

}
function showTerms(){

if(document.querySelector("#terms").checked){

document.querySelector("#termsOutput").textContent=
"Terms Accepted";

}

else{

document.querySelector("#termsOutput").textContent=
"Please accept the terms.";

}

}
function submitForm(event){

event.preventDefault();

let summary="";

summary+="Name : "+document.querySelector("#name").value+"<br>";

summary+="Email : "+document.querySelector("#email").value+"<br>";

summary+="Age : "+document.querySelector("#age").value+"<br>";

summary+="Course : "+document.querySelector("#course").value+"<br>";

summary+="About : "+document.querySelector("#about").value+"<br>";

document.querySelector("#summary").innerHTML=summary;

}

