                
                // in my project we have one place to take text and one 
                // button to add 

                // the mai work is when we click on add  button the data whatever we have write in it should be 
                // taken into a vriable 
                //for this we will use here DOM 

                // console.log("adding");
                // // TO take button 
                // // let  addUserBtn = document.getElementById("adduser");
                // // let r =  document.getElementsByClassName(".form-control")

                // let  addUserBtn = document.getElementById("uBtn");
                // let t = document.getElementById("Uinput").value;

                // console.log( document.getElementById("Uinput").value);
                // //let r =  document.getElementsByClassName(".form-control")

                // // to taje text fild 
                // //const UsernameTextField = document.getElementById("username");

                // // when someone clicks on add button we will add the username to the list of users
                // // for this we will add event  listeners ON Button

                // addUserBtn.addEventListener("click",function(e){
                //    const name =  UsernameTextField.value;
                //    console.log(name);
                // })
                // addUserBtn.onclick=()=>{
                //     console.log(t.value);
                //   // alert(name);
                // }
                // });
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------



let recordsDisplay = document.getElementById("records")
let userArray = [];
let objstr = localStorage.getItem('user');
if(objstr!=null){
    userArray = JSON.parse(objstr);
    
}

   DisplayInfo();
 function myClickFun(){
   
        //recordsDisplay = document.getElementById("records")
        const btn = document.getElementById("addUser");
        const textVal = document.getElementById("username");    

        console.log(textVal.value);
        // here we will push the name which is written by the user 
        // name will we store in array format 

        userArray.push({'name': textVal.value})
        
        // now one user is added to the array

        // to save the user into local storage WE will call saveInfo ( ) -> and pass the array name 
        saveInfo(userArray);
        textVal.value = '';
        DisplayInfo();
     
  }

  function saveInfo(userArray){

            // in save info function we have to store the user info into local storage 
            // to save it into local storage we need a comand name --> localStorage.setItem()
            // localStorage.setItem() - take argunment as a object 


            //----------------------------------------------------------------------------------------------------------
            //                                        MDN document
            //----------------------------------------------------------------------------------------------------------
            //     (method) Storage.setItem(key: string, value: string):
            //      void
            // Sets the value of the pair identified by key to value,
            // creating a new key/value pair if none existed for key previously.
            // Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set.
            // (Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.)

            // Dispatches a storage event on Window objects holding an equivalent Storage object.
            //------------------------------------------------------------------------------------------------------------------------

            
            // localStorage.setItem() --> it will take two argunment ->key and value and both shoud be in string 

            //localStorage.setItem('users' ,str )

            // one key i can make by myself but other is -->array to convert it into a string we can use JSON.stringify
            
        let str= JSON.stringify(userArray)

        localStorage.setItem('user' ,str )
  
  }
    

    function DisplayInfo(){
        
        let statement = '';
        userArray.forEach((user,i) =>{
            statement += `<tr>
            <th scope="row">${i++}</th>
            <td>${user.name}</td>
            <td> <i class="btn text-white fa fa-edit btn-info mx-2"> </i>
                 <i class="btn btn-danger text-white fa fa-trash"></i></td>
            <td></td>
          </tr>`
        });
        recordsDisplay.innerHTML = statement;
        
    }


    function DeleteInfo(){

    }   
    
    
// })