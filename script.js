 /*  for(i=0;i<7;i++)
 {
 let star=""
 for(j=0;j=i+1;j++){
    star +="*"
 }

   }*/
   let drink=3;
   switch(drink)
   {
   case 1:
   console.log("coffee");
   break;
   case 2:
   console.log("Expresso");
   break;
   case 3:
   console.log("mocha");
   break;
   }

let number = 3;
let i= 1; 
if (number % i ) {
    console.log("Prime Number");
} else {
    console.log("Not Prime Number");

const multiply = (...num)=>{
    
        let total=1
        for(let n of num)
        {
            total *=n
        }
        return total
    }
console.log(multiply(2,2,2));

let student  = {
  name: "Alex",
  age: 28,
  isStudent= True
}

const mob = {
    brand: "Samsung",
    model: "Galaxy S24",
    color: "Red",
    price: 75000,

    greet: function() {
        console.log("50% Offer");
}
}
console.log(mob.brand)
console.log(mob["brand"])

const student = {

  id: 101,

  name: "Madhan",

  age: 22,

  course: "Full Stack Development",

  isPlaced: false,



  address: {

    city: "Chennai",

    state: "Tamil Nadu",

    pincode: 600001

  },



  skills: [

    "HTML",

    "CSS",

    "JavaScript",

    "React",

    "Node.js"

  ],



  marks: [

    { subject: "HTML", score: 92 },

    { subject: "CSS", score: 88 },

    { subject: "JavaScript", score: 96 },

    { subject: "React", score: 90 }

  ],



  projects: [

    {

      id: 1,

      title: "Portfolio",

      completed: true

    },

    {

      id: 2,

      title: "Todo App",

      completed: false

    },

    {

      id: 3,

      title: "E-Commerce",

      completed: true

    }

  ]

};
// Destructure name, age, and course.
// Destructure city and state from address.
// Rename name as studentName using destructuring.
// Give a default value to phone while destructuring.
// Destructure the first two skills.


// Destructure name, age, and course.
const{name,age,course} =student
console.log(name)
console.log(age)
console.log(course)


 //Rename name as studentName using destructuring.

 const{ name : studentName} = student 
 console.log(studentName)

 // Give a default value to phone while destructuring.

 const student = {id : 101 }
 const {name ="guest"} = student
 console.log(name)

 // Destructure city and state from address.
 const {address:{city,state}} = studentName 
 console.log(city)
 console.log(state)

 // Give a default value to phone while destructuring.
 const {phone="+91xxxxxxxxxx"}=student 
 console.log(phone)







 const university = {
name: "Tech University",
location: "Chennai",

departments: [
{
id: 1,
name: "Computer Science",
hod: {
id: 100,
name: "Dr. Rajesh",
experience: 18
},

students: [
{
id: 101,
name: "Madhan",
age: 22,
gender: "Male",

address: {
city: "Chennai",
state: "Tamil Nadu",
pincode: 600001
},

skills: [
"HTML",
"CSS",
"JavaScript",
"React",
"Node.js"
],

marks: [
{ subject: "HTML", score: 92 },
{ subject: "CSS", score: 89 },
{ subject: "JavaScript", score: 97 },
{ subject: "React", score: 91 }
],

attendance: {
totalDays: 120,
present: 112,
absent: 8
},

projects: [
{
id: 1,
title: "Portfolio",
completed: true,
technologies: ["HTML", "CSS", "JavaScript"]
},
{
id: 2,
title: "E-Commerce",
completed: false,
technologies: ["React", "Node.js", "MongoDB"]
}
]
},

{
id: 102,
name: "Priya",
age: 21,
gender: "Female",

address: {
city: "Madurai",
state: "Tamil Nadu",
pincode: 625001
},

skills: [
"Python",
"Django",
"SQL",
"JavaScript"
],

marks: [
{ subject: "Python", score: 94 },
{ subject: "SQL", score: 96 },
{ subject: "JavaScript", score: 90 }
],

attendance: {
totalDays: 120,
present: 118,
absent: 2
},

projects: [
{
id: 3,
title: "Hospital Management",
completed: true,
technologies: ["Python", "Django", "SQLite"]
}
]
}
]
},

{
id: 2,
name: "Mechanical",

hod: {
id: 200,
name: "Dr. Kumar",
experience: 15
},

students: [
{
id: 201,
name: "Rahul",
age: 23,
gender: "Male",

address: {
city: "Coimbatore",
state: "Tamil Nadu",
pincode: 641001
},

skills: [
"AutoCAD",
"SolidWorks",
"CNC"
],

marks: [
{ subject: "Mechanics", score: 91 },
{ subject: "Thermodynamics", score: 87 }
],

attendance: {
totalDays: 120,
present: 110,
absent: 10
},

projects: [
{
id: 4,
title: "Engine Design",
completed: true,
technologies: ["SolidWorks"]
}
]
}
]
}
]
};

/*Destructure the university name and location. 
Destructure the first department's HOD name. 
Destructure the second student's city. 
Rename experience to yearsOfExperience. 
Destructure the first project title of the first student.

Use with reduce() 
Calculate the total number of students. 
Calculate the total number of projects. 

Use with find() 
Find the student named "Priya". 
Find the project named "Engine Design". 

Use with filter()
Find students whose age is greater than 21. 
Find students who know JavaScript.*/

/*Destructure the university name and location. */
const{name,location} = university
console.log(name)
console.log(location)


/*Destructure the first department's HOD name.*/
const{hod:{name}}=university
console.log(name)

/*Destructure the second student's city. */

const{department:{student :{address:{city}}}}= university

/*Rename experience to yearsOfExperience. */

const{experience:yearsOfExperience}=university
console.log(yearsOfExperience)


/* Destructure the first project title of the first student.*/
const{department:{students:{projects:{title}}}}=university



/*Use with reduce() 
Calculate the total number of students. 
Calculate the total number of projects. */

const totalStudents = university.departments.reduce(
  (total, current) => {
    return total + current.students.length;
  },
  0
);
console.log(totalStudents);

/*Use with find() 
Find the student named "Priya". 
Find the project named "Engine Design".*/

/*Find the student named "Priya".*/

const result = university.find()
const student = university.departments.students.find(
  (current) => current.name === "Priya"
);


/*Find the project named "Engine Design".*/

console.log(student);

const project = university.departments.students.projects.find(
  (current) => current.title === "Engine Design"
);

console.log(project);

/*Use with filter()
Find students whose age is greater than 21. 
Find students who know JavaScript.*/

/*Find students whose age is greater than 21.*/
const age21 = university.departments.students.filter()






























