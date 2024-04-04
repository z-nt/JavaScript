//const { json } = require("express");


var submit = document.getElementById("submit")


submit.addEventListener("click",()=>{
    senduserInfo();
})




function senduserInfo(){
    const person = {
    name : null,
    work:null
    }
    let userinputName = document.getElementById("nameinput").value
    let userinputWork = document.getElementById("workinput").value
   

    person.name = userinputName;
    person.work = userinputWork;

    localStorage.setItem("users",JSON.stringify(person));
    getUserinfo();
}
function getUserinfo(){

    let userNameTitle = document.getElementById("userName");
    let userworkTitle = document.getElementById("userwork");
    let titleElemtn = document.getElementById("title");
    
    let newUserName = document.createElement("h1");
    let newUserwork = document.createElement("h1");

    const user = localStorage.getItem("users");
    const object = JSON.parse(user);

    newUserName.innerHTML = object.name;
    newUserwork.innerHTML = object.work;
    titleElemtn.appendChild(newUserName);
    titleElemtn.appendChild(newUserwork);

    
}




// localStorage.setItem("user",JSON.stringify(person));

// const user = localStorage.getItem("user");

// const object = JSON.parse(user);
// console.log(object);





// const numbers = [ 1,2,3,4,5,6,7,8,9];

// function getMinNumbers(arr){
//     var temp = arr[0];
//     for(var i = 0 ; i < arr.length ; i++){
//             if(temp < arr[i]) arr[i] = temp;
//     }
//     console.log(temp);
// }
// //getMinNumbers(numbers);

// function getMaxnumbers(arr){
//     var temp = arr[0];
//     for(var i = 0 ; i < arr.length ; i++){
//         if(temp < arr[i]) temp = arr[i];
//     }
//     console.log(temp);
// }
// //getMaxnumbers(numbers);

// const myString = "i am kian nosratian this is my test string";

// function countstring(arr,word){
//     var  count = 0;
//     for(var i = 0 ; i < arr.length ; i++){
//         if(arr[i] == word) count++;
//     }
//     console.log(count);
// }

// //countstring(myString,"i");

// function fibo(fib){
//     var temp1 = 1;
//     var temp2 = 2;
//     var fibo = 0;
//     for(var i = 0 ; i < fib; i++){
//         fibo = temp2 + temp1;
//         temp1 = temp2;
//         temp2 = fibo
//     }
//     console.log(fibo);
// }

// ///fibo(8);

// function converF_To_c(startStep,endStep,step,C){
//     var C;
//     var F;
//     var startStep,endStep,step;
//     for(C = startStep; C<= endStep; C+=step ){
//         F = (C * 1.8) + 35;
//         console.log(C,F);
//     }
// }

// //converF_To_c(10,20,1,40);


// function calculator(x,y,opt){
//     if(opt == "+") return x + y;
//     if(opt == "-") return x -y;
//     if(opt == "x") return x * y;
// }
// //calculator(5,6,"+");
// function rockPaper(x,y){
//     var user = 0;
//     var computer= 0;
//     var winner =3;
    
//     while(winner){
    
//     if(x==y) return false;
//     if(x == "paper" && y == "rock") user++;
//     if(x== "rock" && y == "paper") computer++;
//     if(user == winner) console.log("user winn");
//     if(computer == winner) console.log("coumputer winn");
//     }
//     }

// //rockPaper("paper","rock");

// class Machine{
//     counstructor(name,model,color){
//         this.name = name;
//         this.model = model;
//         this.color = color;
//     }
// }
//const ford = new Machine("ford","1996","gray");

// const Person = {
//     name : "kian",
//     age : 26,
//     work : "programer"
// }

// const ali = Person;
// ali.name = "ali";
// ali.age = 20;
// ali.work = "designer";

// //console.log(ali);

// import person from "./main.json" assert {type : "json"};

// console.log(person);
// function fetchJSONData() {
//     fetch("./main.json")
//         .then((res) => {
//             if (!res.ok) {
//                 throw new Error
//                     (`HTTP error! Status: ${res.status}`);
//             }
//             return res.json();
//         })
//         .then((data) => 
//               console.log(data))
//         .catch((error) => 
//                console.error("Unable to fetch data:", error));
// }
// fetchJSONData();

// function getLocation(){
    //     if(navigator.geolocation){
        //         navigator.geolocation.getCurrentPosition(showPosition);
        //     }else{
            //         demo.innerHTML =" gea is not ";
            //     }
// }

// function showPosition(position){
    //     demo.innerHTML = "latidue: " + position.cords.latitude + "<br>long" + position.cords.longitude;
    // }
    
// const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
// const demo = document.getElementById("demo");

// const obj = JSON.parse(text,function(key,value){
//         if(key == "birth"){
//             return new Data(value);
//         }else{
//             return value;
//         }
// })
// demo.innerHTML= obj.birth;
// console.log(demo);

// const person= {
//     name:"kian",
//     age : 26,
//     work : "programmer"
// }

// const myJson = JSON.stringify(person);
// window.location = "demo_json.php?x=" + myJson;


// const myJson = JSON.stringify(person)
// localStorage.setItem("testJson",myJson);


// const text = localStorage.getItem("testJson");
// const obj = JSON.parse(text);
// let  word= ""
// for(const x in obj){
//     word +=x + " ";
// }
// console.log(word);



// const tthps = new XMLHttpRequest();
// https.onload = function(){

//     console.log(this.responseText);
//     console.log("sdgag ");
//     const myObject = JSON.parse(this.responseText);
//     document.getElementById("demo").innerHTML = myObject.name;
// }
// https.open("GET","http://localhost:8080/kian");
// https.send();























