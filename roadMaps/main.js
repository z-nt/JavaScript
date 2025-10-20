


///objects  

let user1 = new Object();

let user2 = {
 name:"kian",
 age:28,
};

delete user2.name;



let user3 = {
 name:"kian",
 age:28,
 "likes birds" : true,
}


let key = "some name";

user3[key] = false;

let food = "apple";
let bag = {
[food + "newword"] : 5,
}

function makeUser (name,age){
	return {
	 name:name,
	 age:age,
	};
}

let user4 = makeUser("kian",28);

//console.log(user4);

//console.log(user1.noSuchProperty === undefined);

//console.log("age" in user1);

let user5 ={
 name:"erfan",
 age:30,
 work:"koskeshi"
}

//for(let key in user5){
//	console.log(key);
//	console.log("**************");
//	console.log(user5[key]);
//
//}




let obj = {
	name:"kian",
	age:20,
	for:"felan",
	0:true,
	["im am"] : "mobin",
}

let nac = "that";

obj[nac] = "hello";

//console.log(obj.name);
//console.log(obj.age);
//console.log(obj["im am"]);

//for (let k in obj){
//	console.log(k);
//	console.log(obj[k]);
//}



delete obj.name;


console.log(obj);



























