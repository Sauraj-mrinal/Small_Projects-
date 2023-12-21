
//DOM element 
// here we will access the student DIV form acess using DOM
const studentForm = document.getElementById("studentForm");
// this the div where we will show the stored data 
const studentsContainer = document.querySelector(".students")


// when we load the students form then we need to load each and every 
// input data one by one to inside the students form we have name age and roll 
// to access the students form NAMR we can write like that

// to access the child elements of the parents element

const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const rollInput = studentForm["roll"];


// now we are thinking to store all the students data in a array 
// we know that a array can have store multiple objects 
// 
// same we will store objext inside the array and its anme will be student 

// 
// my object formate will be 
// {
    //  name: " ",
    //  age: " ",
    //  rollment: " "
// }
// lets create an empty array name student
// const students = []// gto push the element in the array
// --------------------------------------------------------------------
const students = JSON.parse(localStorage.getItem("student")) || [];
// to retrive the data from local storage 
// JSON.parse()--> using to convert string to array here --> localStorage.getItem("student") --> is a string but we neet to convert to array




// addStudent --> method it will take the name age and roll number 

const addStudent = function(name,age,roll)
{
   students.push({
    name: name,
    roll: roll,
    age: age
   })
   //----------
   // To store the data into my local  storage WE use this localStorage.setItem()-> now this setItem take two arguments
   // and both should be in string format so what we will do
   // one student -> which is any name i pass a a string but for next argument we have array 
   // if i write second argument in array format it will be automatically converted to string
   // but it is recomended to pass a string as the first argument as well as second 
   // to convert arry to or anything to arry we use--> JSON.stringify(-------pass here )
   //
   localStorage.setItem("student", JSON.stringify(students));// here student gets Added 
   // now go to the line 35 and red 
   return { name, age, roll };
};

// this is a simple function that will create the student element 

const createStudentElement  = ({name , age, roll})=>{ //{name , age, roll}--> dstructuring the element of object 

  // first we are creating a DIV  using DOM
    const studentDiv = document.createElement("div");// this will be the container for each student 
  
    // he Create another element  
    const studentName = document.createElement("h2");
    const studentAge = document.createElement("p");
    const studentRoll = document.createElement("p");
    

    // fill the container with the students Values which i just created
    // upr jo hm bnaye hai yaha pr usko innerText kr ke add kr rhe hai value 

    studentName.innerText = "Student Name : "+ name;
    studentAge.innerText =   "student Age : "+ age;
    studentRoll.innerText =  "student Roll : "+ roll;

    // now ab value add ho gya to kya krenge ?
    // jo hm DIV create kiye the us me appned kr diye  student ka properties ko
    studentDiv.append(studentName,studentAge,studentRoll);
    // same here 
    studentsContainer.appendChild(studentDiv);


    studentsContainer.style.display = students.length === 0 ? "none" : "flex";// ek bar value save ho jane ke baad hamara box ko cleare kene ke liye 

}

     studentsContainer.style.display = students.length === 0 ? "none" : "flex";  


students.forEach(createStudentElement);//  we have store all the value of student into the array
// so which array ? ->  so inside  student array and for every object we use here forEach loop


studentForm.onsubmit =e =>{
    e.preventDefault();// it will prevent the default nature of any form

    const newestStudent = addStudent( nameInput.value, ageInput.value, rollInput.value);// we are passing thr value into thr addStudent function 
    // whatever it return again we paas into the  createStudentElement()-> function 
    createStudentElement(newestStudent);

    nameInput.value = "";
    ageInput.value = "";
    rollInput.value ="";

    // once we use all this to store the value the aour privious value shoud be empty 
}
