function GetUsers(){
    const username = document.getElementById("username").value;
    const phonenumber = document.getElementById("phonenumber").value;
    const password = document.getElementById("password").value;

    const inputs = document.querySelectorAll(".inputs");
    inputs.forEach(item =>{
        if(item.value == ""){
            item.style.border = "1px solid red "
            return false;
        }else{
            item.style.border = "1px solid green";
            window.open("./singup.html"); 
        }
    })

    const user={
    name:username,
    phone:phonenumber,
    pass:password,
    }
    return user;
}

function SendUser(){
    const newUser = GetUsers();
    localStorage.setItem("users",JSON.stringify(newUser));
}



export default SendUser;

