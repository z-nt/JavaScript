
class User{
    constructor(fristname,lastName,email,work){
        this.fristname = fristname;
        this.lastName = lastName;
        this.email = email;
        this.work = work;
    }
}


const PROGRAMER = "programer";
const DESIGNER = "designer";
const submit = document.getElementById("submit");
const inputName= document.getElementById("name")
const lastName= document.getElementById("lastname")
const email= document.getElementById("Email")
const work= document.getElementById("work")

//let newUser = new User(inputName,lastName,email,work);

const programers = [];
const designers = [];
submit.addEventListener("click",(e)=>{

    let designer = document.getElementById("DesignerList");
    let programmer = document.getElementById("ProgramerList");
    
    e.preventDefault();  

    let newUser = new User;
    
    newUser.fristname = inputName.value;
    newUser.lastName = lastName.value;
    newUser.email = email.value;
    newUser.work = work.value;
    
    if(newUser.work == PROGRAMER){
        programers.push(newUser);     
        createitemsprogramer(newUser,programmer);   
        
    }else if(newUser.work == DESIGNER){
        designers.push(newUser);
        createitemsdisigner(newUser,designer);
    }

    if(newUser){
        document.querySelectorAll(".input").forEach(input=>{
            input.value = " ";
        })
    }
})



function createitemsprogramer (user,parent){
    let li = document.createElement("li");
    li.innerHTML =`${user.fristname}`
    parent.appendChild(li);
}


function createitemsdisigner (user,parent){
    let li = document.createElement("li");
    li.innerHTML =`${user.fristname}`
    parent.appendChild(li);
}


