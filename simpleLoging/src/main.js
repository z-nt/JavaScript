const submit = document.getElementById("submit");



const user_name = document.getElementById("user_name");
const password = document.getElementById("password");
const current_password = document.getElementById("current_password");


var user = {
    name:null,
    pass:null,
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();

     let newUser = user;
    newUser.name = user_name.value;
    newUser.pass = password.value;
    
    if(password.value !== current_password.value){
        console.log("its not");
        return false;
    }

    if(newUser){
        const http = new XMLHttpRequest();
        http.open("POST","http://localhost:8080",true);
        http.setRequestHeader(
            "Content-Type","application/json"
        )
        http.onreadystatechange = ()=>{
            if(http.readyState == XMLHttpRequest.DONE && http.status == 200){
                console.log(newUser);
            }    
        }
        http.send(JSON.stringify(newUser));
    }
})



