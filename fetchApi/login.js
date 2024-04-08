

const submit = document.getElementById("submit");
submit.addEventListener("click",()=>{
    dataBase();
})

function loginUser(){

    const newPerson = {
        name:null,
        pass:null
    }
   
const userName = document.getElementById("username").value;
 const userPass = document.getElementById("password").value;



    try{
        if(userName == "" && userPass == ""){
            console.log("filds must be done");
        }else{
            newPerson.name = userName;
            newPerson.pass = userPass
        }
    }catch(err){
        console.log(err);
    }
    
    return newPerson;
    
}



function dataBase(){
const newUser = loginUser();
console.log(newUser);


    const person = localStorage.getItem("user");
    const newobj = JSON.parse(person);
    const objects = newobj.users;    
    for (var i = 0 ; i <objects.length ; i++){

        console.log(objects[i]);
    
    }

}
