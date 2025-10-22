////
////
////
///////objects  
////
////let user1 = new Object();
////
////let user2 = {
//// name:"kian",
//// age:28,
////};
////
////delete user2.name;
////
////
////
////let user3 = {
//// name:"kian",
//// age:28,
//// "likes birds" : true,
////}
////
////
////let key = "some name";
////
////user3[key] = false;
////
////let food = "apple";
////let bag = {
////[food + "newword"] : 5,
////}
////
////function makeUser (name,age){
////	return {
////	 name:name,
////	 age:age,
////	};
////}
////
////let user4 = makeUser("kian",28);
////
//////console.log(user4);
////
//////console.log(user1.noSuchProperty === undefined);
////
//////console.log("age" in user1);
////
////let user5 ={
//// name:"erfan",
//// age:30,
//// work:"koskeshi"
////}
////
//////for(let key in user5){
//////	console.log(key);
//////	console.log("**************");
//////	console.log(user5[key]);
//////
//////}
////
////
////
////
////let obj = {
////	name:"kian",
////	age:20,
////	for:"felan",
////	0:true,
////	["im am"] : "mobin",
////}
////
////let nac = "that";
////
////obj[nac] = "hello";
////
//////console.log(obj.name);
//////console.log(obj.age);
//////console.log(obj["im am"]);
////
//////for (let k in obj){
//////	console.log(k);
//////	console.log(obj[k]);
////
////
////		
//
////		object builder 
//
////
////class User {
////	constructor(name , age ){
////		this.name = name;
////		this.age = age;
////	}
////	getQuestion(qest){
////		let answer;
////	      if(qest == null ||  !qest){
////			let erroranswer = "there is no promt";
////		      console.log("false");
////		      return false ;
////		}else{
////		let answer = "newObject";
////			console.log("true");
////			return answer;
////	      	}
////
////	}
////}
////
//function addpromt () {
//	const isPromt = true;
//	const question = "do you want to create a object ?"
//	let input = "answer";
//	let save= true;
//	let exit = false;
//
//	const kian = new User("kian", 28);
//	///if promt is true show the question when qouestion is showing get the answer from user 
//	//if user return save then must create object with the input name and save object ;
//	//if user return exit then promt must be equal to false ;
////	
////	let newAnswer = kian.getQuestion(question);
////
////	if(newAnswer == false){
////		return false;
////	}else{
////		let newObject = {
////			name : newAnswer,
////		}
////
////	gonsole.log(newObject);
//	}
//	getObject();
//}
//
//addpromt();
//
//
////function getObject() {
////	console.log("hello");
////
////const getbj = localStorge.getItem("newObjcet");
////	console.log(getbj);
////	return getbj ? JSON.pars(getbj) : [] ;
////}
////
////this is test 
////

let events = [
	{
	  name:"add",
	  id:1,
	  isValid:true, 
	},
	{
	  name:"remove",
	  id :2,
	  isValid:false,
	}
];
let input = "object";

//function CreateObject(name){
//	this.name = name;
//}
//function checkUserEvent(e){
//	
//	if(e.name == "add"){
//		const newObject = CreateObject(intpu);
//	}
//	if(e.name == "remove"){
//		throw new Error("object removed");
//	}
//		return newObject;
//}
//
//
//


function createObjectManager (){
const objects = [];

	function handelEvent(e,name){
		if (e ==="add"){
			function ObjectInstance (name){
				this.name = name;
			}
			const newobj = new ObjectInstance (name);
			objects.push(newobj);
			return newobj;
		}else if (e === "remove"){

		return false;

		}

	}
	return handleEvent;
}


createObjectManager();


const newUser = handleEvent("add", "kian");
	console.log(newUser);






























