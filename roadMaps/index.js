//	The difference between web page , website , web server 
//	and search engine .
//
//	*web page:
//	
//	"a document that can be displayed in a web browser.these are also often called just "pages".
//	"such document are written in the html language;
//	
//	*website:
///	
//	"a collection of webpage grouped together into a single resource, with links connection them
//	"together.often called a "site".
//
//	*web server:
	
//	"a computer that hosts a website on the internet.

//	*web service:
	
//	"a softwar that responsed to requests over the internet to perform a function ot provide data "
///	"A web service is typically backed by a web server.and may provide web pages for users to intract with,
//	"many website are also web services,though some websites consist of static content only.example of web 
//	"serivces would be somthing that resizes images , provides a weather report , or handles user login."

//	*search engine:

///	"a web service that help you find other web pages,such as google,bing , yahoo, or duckduckgo."
//	"search engine are normally accessed through a web browser"

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


//keyed collection
//A map object is a key/value map can that iterate its elements in insertion order.
//	traditionally,objects have been used to map string to valus,object allow you to set keyes to 
///	values , retrieve those values , delet keys , and detec wheter somthing is stored at a key,
///	map objects, however a few more advantage that make them better maps,
//	*the key, of an object are string or symbols , whereas they can be any value of a map,
//	*you can get the size of map easily , while you have to manually keep track of size for an object,
//	*the iteration of maps is in insertion order of the elements,
//	*an object has a prototype, so there are default keys in the map,


//
//these three tips can help you to decide whether to use a map or an objects:
//	
//	-use maps over object when keyes are unknown until run time , and when all keyes are the same type,
//	and all values are the same type,
//
//	--use maps if there is need to store primitive values as keyes because object treats each key as a string 
//	whether its a number value,boolean or any other primitive value,
//	
//	--use objects when there is logic that operates on individual elements . 
//
//


	const saying = new Map();



	saying.set("dog","woof");
	saying.set("cat","meow");
	saying.set("lion","hooowww");
	saying.set("wolf","aaaooww");
	saying.size;

	let getnoice = saying.get("dog");
	let inis = saying.has("bird");


	let areis = saying.has("dog");

	for(const [key,value] of saying  ){
//		console.log( ` list of animal :${key} say  ${value}`);
	}


	let size1 = saying.size;
	
//	console.log(`${size1}: size befor cleaning`);
	 
	saying.clear();

	let size2 = saying.size;
//console.log(`${size2}size after cleaning`);

//
///*weakmap*/
//	a weakmap is a collection of key/value pairs whose keys must be objects or none-registred symbols,
//	with values of ant arbitrary javaScript type,and which does not create strong references to its keyes,
//	that is an objects presence as a key in a weakmap,dose not prevent the object from being garbage collected , 
//	once an object used as a key has been collected , its corresponding values in any weekmap became condidates for 
//	garbage collection as well al long as they arent strongly referred to elsewhere.the only primitive type that can
//	be used as a weekmap key is symbol more specifically none-registered symbols because none registered symbols are
//	guaranteed to be unique and cannot be re-createed,
//
//



const  privets = new WeakMap();

	export default function Public () {
		const me = {
			name:"kian",
			age : 28,
			work:"programmer"
		};
		privets.set( me);
		return me;
	}


	const newme =Public();
//	console.log(newme);

	Public.prototype.method = () => {
		const me = privets.get(this);

//		console.log(me);
	};

/*set*/


//	set objects are collections of unique values,you can iterate its elements in insertion order.a value in a set
//	may only occure once; it is unique in the sets collection.




//const mySet = new Set();
//
//	mySet.add(1);
//	mySet.add("someText");
//	mySet.add("foo");
//
//
//	let hasIt = mySet.has(1);
//	let setSize = mySet.size;
//	console.log(`${setSize}`);
////	mySet.delete("foo");
//	let setSize2 = mySet.size;
//	console.log(`${setSize2}`);
//
//	for (const item of mySet){
//		console.log(`item is : ${item}`)
//
//	}
//
//converting between arrray and set 


//you creat an array from a set usuing array.from or the spread syntax also the set 
//construcor accepts an array to convert in the other direction;


//Array.from(mySet);
//[...mySet2];


//mySet2 = new Set([1,2,3,4,5,6]);



////	array and set compared 

//ARRAY AND OBJECTS COMPARED 
//
//	a set of elements has been stored in arrays in javascrips in a lot of situation .
//	the set object , however ,has same advantahge:
//
//	--deleteing array elements by value,is very slow;
//	--set objects let you delete elements by their value,with an array you would have 
//	to splice base on an elements index;
//	--the value nan cannot be found with indexof in an array;
//	--set objects store unique values,you dont have to manually keep track duplicates,
//
//
//
//WEAKMAP OBJECT
//
//weakmap object are collections of garbage-collectable values , including objects and none
//registred symbols , a value in the weakset may only occur once,it is unique in the weaksets collection
//
//	the main difference to the set abjects are 
//	
//	--in contrast to sets , weaksets are collection of objects or symbols only,and not of arbitrary
//	valus of typo;
//	-- the weakset is weak:refreces to objects in the collection are held weakly;if there is no othe	refrence to an object stored in the weakset ,they can be garbage collected , that also means tha	t there is no list of currect objects stored in the collection .
//	--weakset are not enumerable,
//
//	the use cases of weakset objects are limited , they will not leak memeory, so it can be safe to 	use DOM elements as a key and mark them for tracking purpuses ,
//
//
//
//
//
//	/* JAVASCRITS  DATA TYPES AND DATA STRUCTURE */

//
//	programming language all have built-in data structure , but these often differ from one language to 
//	another.thic article attemps to list the built-in data structures available in java script and what 
//	properties they have , these can be used to build other data structure .
//




//	/* DYNAMIC AND WEAK TYPING */
	
//	javascript is a dynamic language with dynamic types . variables in javascript are not directly
//	associated with any particular value type,and any variable can be assigned values of all types:


	let foo = 42;
	foo="bar";
	foo=true;


//	javaScript is also a weakly typed language . which means it allows implicit type conversion when 
//	an operation involves mismatched types.instead of throwing type errors.
	

	const foo2 = 42 ;
	const result = foo2 + "1";
//	console.log(typeof result);



 	const obj = {};

	obj.prop = [0,2,1,3,5];

//console.log(obj);

//	ARRAY METHODS 


// 	the concat() methods join tow or more arrays and return a new array.

	let myarr = [1,2,3];
	myarr = myarr.concat("s","b","c");
//	console.log(myarr);



// 	the join() methods join all elements of an array into a string.

	let myarr2 = ["wind", "rain", "fire"];
	let list = myarr2.join("-");
//	console.log(list);	



//	the push methods adds one or more elements to the end of an array and returns the resulting length of the array;


	const myarr3 = [1,2,3,5];
	myarr3.push(4);
//	console.log(myarr3);

//	the pop() methods removes the last element from an array and returns that element;

	const last = myarr3.pop();
//	console.log(last)

//	the shift() methods removes the first element from an array and returns that element;
	
	const first = myarr3.shift();


//	console.log(first);


//	the unshift() methods adds one or more elements to the front of an array and returns the new length of the array.

	myarr3.unshift(8,9);
//	console.log(myarr3);





//	the slice() methods extracts a section of an array and returns a new array.


	let  myarr4 = [1,2,3,5,6,7,8,9];
	
	myarr4 = myarr4.slice(1,4);
//	console.log (myarr4);

//	the at() methods returns the element at the specified index in the array , or undifined if the 
//	index is out of range . its notably used for negative indices that access elements from the end of an	     array.
	
	const myelements = [2,3,44,5,6,7,8];
	myelements.at(-3);
//	console.log(myelements.at(-3));


//	the splice() methods removes elements from an array and replace them. it returns the items which were 	     removed from the array;


	const mynumbers = [1,2,3,4,5,6,7,8];
	mynumbers.splice(1,3,"a","b","c","d");
//	console.log(mynumbers);


//	the reverse() methods transposes the elements of an array, in place : the first array element 
//	becomes the last and the last becomes the first.it returns a reference to the array.


	const elem = [1,2,3];
	elem.reverse();
//	console.log(elem);


//	the flat() methods returns a new array with all sub-array elements concatenated into it recursively 
//	up to the specified depth;


	let arrflat = [1,2,[3,4]];
	arrflat = arrflat.flat();
//	console.log(arrflat);

//	the sort() methods sorts element of an array in place . and returns a reference to the arr;

	let sortarr = [9,2,3,4,51,3,0,1];
	sortarr.sort();
//	console.log(sortarr);


//	sort() can also take a callback function to determine how array elments are compared .the 
//	callback function is called with tow arguments, which are tow values from the array.the function
//	compares these tow values and returns a positive number, nagative number , or zero , indicating the 
//	order of the tow values,for instance , the following will sort the array by the last letter of a string

	let arr1 = [9,8,7,6,5,4,];
	let arr2 = [0,1,22,444,5,67,7,3,2];



	const sortFn = (a,b) => {
		if(a[a.length - 1 ] < b[b.length - 1 ] ){
			return -1;
		}else if (a[a.length - 1 ] > b[b.length - 1 ]) {

			return 1 ;
		}
		return 0;
	}



//	console.log(sortFn(arr1,arr2));

//	the indexof() methods searches the array for searchElement and return the index of the first match;
//	the lastIndexOf methods works like indexOf, but starts at the end and seaches backwards;
//	const a = ["a","b","c","d","e","f","a","b","a",2,3,4,,6,6,7,8,9];
//	console.log(a.indexOf("z"));
//	console.log(a.lastIndexOf("b"))
	


//	the forEach() method execute callback on every array item and returns undifined.
//
//
//	a.forEach((elem)=>{
//		console.log(elem);
//	});

	
//	the map method returns a new array of the return value from executing callback on every array item.
	
//	const a2 = a.map((item)=>item.toUpperCase());
//	console.log(a2);

//	the flatmap() method runst map() followd by a flat() of depth1;

//	const a2 = a.flatMap((item)=> [item.toUpperCase(),item.toLowerCase()]);
//	console.log(a2);



//	the filter() method returns a new array containing the items for which callback returned true;

	
//	const a2 = a.filter((item) => typeof item ==="number");
//	console.log(a2);


//	the find() method return the first item for which callback return true;
// 	the findLast() method returns the last item for which callback return true;


//	const a2 = a.find((item)=> typeof item === "number");
//	const a2 = a.findLast((item)=> typeof item ==="number");
//	console.log(a2);



//	the findIndex() method return the index of the first item for which callback return true;
// 	the findLastIndex() method return the index of the last item for which callback reurn true;

	const a = ["a","b","c","d","e","f","a","b","a",2,3,4,,6,6,7,8,9];
//	const a2 = a.findIndex ((item)=> typeof item === "number");
//	const a3 = a.findLastIndex((item) => typeof item === "number" );
//	console.log(a3);
	
//	the every() method returns true if callback returns true for every item in the array;
//	the some() method returns true if calllback returns true for at least one item in the arr;	
	function isNumber(value){
		return typeof value === "number";
	}

	const a1 = [1,2,3];
	const a2 = [1,"2",3];

//	console.log(a1.some(isNumber));
//	console.log(a2.some(isNumber));


//	console.log(a1.every(isNumber));
//	console.log(a2.every(isNumber));


//	the redauc() method applies callback(accumulator , currentvalue , currentIndex , array) for each 
//	value in the array for the purpose of reducing the list of items down to single value . the reduce
//	function returns the final value returned by callback function.
//	if initialValue is specified , then callback is called with initialValue as the first parameter value	     and the value of the first item in the array as the scond parameter value.
//	if initialValue is not specified ,then callbacks first tow parameters values will be the first and 
//	second elements of the array.on every subsequent call , the first parameters value will be whatever
//	callback returned on the previous call, and the second pararmeters value will be the next value in 	     the array. 
//	if callback  needs access to the index of the item being processed , or access to the entire array,
//	they are available as optional parameters.
//




	const a4 = [10,20,30];
	const total = a.reduce(
	
		(accumulator , currentValue) => accumulator + currentValue,0,
	);

//	console.log(total);



//	the reducRight() method works like reduce(), but starts with the last element.
//	reduce and reduceright are the least obvious of the iterative array methods.they
//	shoud be used for algorithms that combine two values recursivly in order to reduc
//	a sequence down to single value.



//	ARRAY TRANSFORMATION 
//
//	you can transform back and forth between arrays and other data structure 
//
//	Grouping the elements of an array 
//
//
//	the object.groupBy() method can be used to group the elements of an array,
//	using a test function that returns a string indicating the group of the 
//	current element.
//
//

//
//	const inventori = [
//
//		{name:"kian",work:"programmer"},
//		{name:"nima",work:"designer"},
//		{name:"erfan",work:"lolekesh"},
//		{name:"mobin",work:"programmer"},
//		{name:"mammd",work:"programmer"},
//		{name:"majid",work:"lolekesh"},
//		{name:"poyan",work:"designer"},
//
//	]
//
//
//	const result2 = Object.groupBy(inventori, ({work})=> work );
//
//	console.log(result2);



//	WORKIN WITH ARRAY LIKE OBJECTS 
//	
//	some javascript objects,such as the nodelist returned by document.getElemetnByTagName()
//	or the arguments object made available within the body of a function . look and behave
//	like arrays on the surface but do not share all of their methods.the arguments object 
//	provides a length attribute but does not implement array methods like forEach();
//
//
//
//

	const names = ["kian","mobin","erfan"];


	function getArg () {
	  names.forEach((name) => {
		console.log(name);
	  })
	}

//	getArg();


//	function printarg () {
//		Array.prototype.forEach.call(names,(item) => {
//			console.log(item);
//		});
//
//		Array.prototype.forEach.call("kian",(char) => {
//			console.log(char);
//		});
//
//	}
//
//
//	const a5 = new Array(4);
//
//
//	for(let i = 0 ; i < 4 ; i++){
//	    a5[i]=new Array(4);
//		for(let j = 0 ; j < 4 ; j++){
//		     a5[i][j]= `[${i},${j}]`;
//		}
//	}
//
//
//
//	console.log(a5);
//
	/*END OF ARRAY */

	/* THROE CATCH FINALY */


//	the trow statement throws a user-define exception.execution of the current function will stop 
//	(the statement after throw wont be executed), and control will be passed to the first catch block
//	in the call stack.if no catch block exists among caller functions,the program will terminate.
//


	function getRectArea(width,height){
		if(!Number(width) || !Number(height)){
		   throw new Error ("parameter is not a number!");	
		}else{
			let result = width * height;
//		  console.log(result);
		}
	}


	try{
	  getRectArea(3,2);
	}catch(e){
//		console.error(e);
	}



	function isNumeric(x){

		return ["number","bigint"].includes(typeof x);

	}

	function sum (...values){
		if(!values.every(isNumeric)){
		   throw new TypeError("can only add numbers");
		}

		return values.reduce( (a,b) => a + b );
	}

//	console.log(sum(1,2,3));

	try{
	   sum("1","2");	
	}catch(e){
//	  console.error(e);
	}


//	THROWING AN EXISTING OBJECT

//	this example calls a callback-based async-function,and throws an error if the callback recives an error

//	readFile("foo.txt",(err,data)=>{
//		if(err){
//		  throw err;
//		}
////		console.log(data);
//		
//	})
//
//
//	function readFilePromise(path){
//		return new Promise((resolve , data )=>{
//		 readFile(path,(err,data)=>{
//				if(err){
//				  reject(err);
//				}
//
//				resolve(data);
//			});
//		});
//	}
//
//
//	try {
//	  const data = await readFilePromise("foo.txt");
//		console.log(data);
//	}catch(err) {
//	console.error(err);
//	}
//

///				try ...catch


//	the try..catch statement is comprised of a try block and either a catch block,a finally
//	block,or both. the code in the try block is executed first.and if it throws an exception
//	the code in catch block will be executed. the code in the finally block will always be
//	executed befor control flow exits the entire construct;
//
//
//	try{
//	  throw "oops;this is test"; 
//	}catch(e){
//		if(!(e instanceof Error)){
//		  e = new Error(e);
//		}
//
//	  console.log(e.message);	
//	}
//

	/* FUCNTIONS  */

	
//	when you pass an objects as a parameter , if the function changes the object properties,that change 
//	is visible outside the function.
//	 aslo that will happend for an array;	

	function myFunc(obj,arr){
		obj.make="toyota";
		arr[0]=36;
	}		
	const arr= [45];

	const mycar = {
		make:"honda",
		model:"accord",
		year:1998,
	}

	//console.log(mycar);
	
//	console.log(arr);
	//myFunc(mycar);
//	console.log(arr);
	

	//console.log(mycar);

	//*nested

	function assSquares(a,b){
		function square(x){
		   return x * x ;
		}


		return square(a) + square(b);
	}

	//function expressions 

	const square = function (a,b){
		return a * b ;
	}

//	console.log(square(2,4));

//	a name can be provided with a function expression.providing a name allows the function to refer to 
//	itself , and also makes it easier to identify the function in a debuggers stack traces ;



	const factorial = function fac(n){
		return n < 2 ? 1 : n * fac(n - 1 );
	}


	
	function map (f , a ){
		const result = new Array(a.length);
		for (let i = 0 ; i < a.length;i++){
			result[i] = f(a[i]);
		}	

		return result;
	}

	const numbers = [0,1,2,3,4,5];

	const cubeNumberic = map (function (x){
		return x * x * x ;
	},numbers);



	let myfunc ;
	let num;

	
		if(num == 0 ){
			myfunc= function(obj){
			  obj.name="kian";
			};
		}


//	console.log(cicle(5));


	function cicle(n){
	return n * n ;
	}

//	this  is because the javascript interpreter hoists the entire function declaration to the
//	top of the current scope

//	function hoisting only works with function declarations--- not with function expressions



//	CLOSURES   
			
//	we also refer to the function body as a closure. a closure is any piece of source code 
//	that refers to some variables , and the closure "remembers" these variables even when 
//	the scope in which these variables were declared has exited.
//
//	closure are usually illustrated with nested function to whow that they remember variables 
//	beyond the liftime of its parent scope ; but in fact nested functions are unnecessary.
//	technically speacking, all functions in javascript form closures__ some just dont capture.
//	anythin,and closures done even have to be funcitons.
//	the key ingredients for a usful closure are the following:
//
//	* a parent scope that defines some variables or functions . is should have a clear lifetime,
//	which means it should finish execution at some point. any scope thats not the global scope satifies,
//	this requirement.this includes blocks , functions , modules , and more .
//
//	*an inner scope defined within the parent scope,which refers to some variables or functions
//	defined in the parent scope.
//
//	*the inner scope manage to survive beyound the lifetime of the parent scope.it is saved to a 
//	variable taths defined outside the parent scope,or its returned from the parent scope.
//
//	*then,when you call the function outside of the parent scope.you can still access the variable
//	or functions that were defined in the parent scope,even though the parent scope has finished 
//	execution.
//



	const pet = function (name){
		const getName = function (){
			return name;
		}


		return getName;
	}


	const my = pet("mobin");


	
	///function parameters 

//	default parameters 


	function multyply1 (a , b ){
	 b = typeof b !== "undifined"  ? b : 1 ;
		return a * b;
	}


	function multyply2 (a , b=1 ){
		return a * b;
	}


	// rest parameters 

	function multy(num,...args){

	return args.map((x) => num * x )

	}
	const arra = multy(2,1,2,3);
//	console.log(arra);



//	arrow function


//	const a = ["kian","nima ", "mobin"];


//	const a2 = a.map(function (s){
//		return s.length;
//	})

//
//	const a3 = a.map((s) => s.length);





//		lexical enviorment
//	
//	var name = "kian";
//
//
//	function set () {
//		console.log(name);
//	}
//
//
//	function set1 (){
//	  var name ="erfan";
//		set();
//	}
//
//
//	set1();



	var matrix = {
 	     name:"kian",
		create:function(r,c){console.log(r,c)},

		sum:function(a,b){return a + b},

		diff:function (a,b) {return a - b},
		
		product:function (a,b) {return a * b},

	}

//	console.log(matrix.name);

//	 matrix.create(1,2);

	var matrix2 = (function() {
		var name= "mobin";


		function create (a,b) {console.log(a,b)};
		function sum (a,b) {return a + b};
		function diff (a,b) {return a - b};
		function multy (a,b) {return a * b};

		return {
		   create:create,
		   sum : sum,
		   diff : diff,
		   multy:multy
		}

	})();

//	this iifE pattern provieds better encapsulation,data hiding and memory efficency compared to the,
//	simple object literal approch.its a classic javascript module pattern that prevents pollution of ,
//	the global namespace and protects internal implementation details,

















		///higher order function 

//	a function that takes in a function as argument and / or returns back a function is called,
//	higher-order functions.

	function def (n,a,d){
		return a + n * d ;
	}
	
//	to solve this issue , we could use a very simple-concep-function closurs,
//	the trick is to create a function that takes in value for a and b once,
//	and then returns back a function which just takes a single argument n,
//	this returned  function remembers its lexical environments ,
//	var a and b , and so on cloud be used to inspect any nth element of the given sequence ,
//

//	console.log(def(1,2,3));


	function define(a,d){
		return function (n){
			return a + n * d; 
		}
	}

	var evens = define(1,2);
//	console.log(evens(1));


//
//	what are built-in methods? 
//
//	a javascript method is a property containing a function definition.in other word,
//	when the data stored on an object is a function we call that a method,to differenciate,
//	between properties and methods:
//	PROPERTY IS THAT AN OBJECT HAS,WHILE A METHOD IS WHAT AN OBJECT DOESE,
//
//	since javascript methodes are actions that can be performed on objexts,we first 
//	need to have object to start with,
//
//	there are several objects built into javascript which we can use,
//
//	--standart built-in objects,
//	we call or use methods by appending an instance with:
//	.a period
//	.the name of the method.
//	.opening and closing parantheses
//
//
//	--useful built-in methods
//	

//
//	******DOCUMENT OBJECT MODEL (DOM)******
//
//
//
//	the document object model (dom) is the data represention of the object that comprise the 
//	structure and content of a document on the web,
//
//
//	the documnet object model is a programming interface for web documnet.it represent the page,
//	so that programs can change the document structure , style , and content .the dom represent
//	the document as nodes and objects that way ,programming languages can interface with the page.
//
//
//
//
//
//
			/*This*/
//
//	the value of this in javascript depends on how a function is invoked (runtime binding),
//	not how it is define,when a regular function is invoked as a method of an object,
//	this point to that object.when invoked as a standalone function this refers to the global object,
//
//	arrow function differ ro their handling of this.they inherit from the parent scope at the time,
//	they are define.
//
//	value 
//	in none-strict mode , this is always a refrence to an object. in strict mode , it can be any value.
//
//	description 
//	the value of this depends on in which context it appears:function , class ,or global.
//
//
//
//
//	for a regular function the value of this in the object that the function is accessed on.
//	if the function call is in the form obj.f() the this refers to obj,
//
//
//
//
//
//	function getthis (){
//		return this;
//	}
//
//
//			const obj1= {name:"obj1"};
//			const obj2= {name:"obj2"};
//
//	
//			obj1.getthis= getthis;
//			obj2.getthis = getthis;
//
//
//	console.log(obj1.getthis()); {name:obj1,getthis:[function:getthis]};
//	console.log(obj2.getthis()); {name:obj2,getthis:[function:getthis]};
//
//	
//	the value of this is not the object that has the function as an property, but the object,
//	that is used to call the function . you can prove this by calling a method of an object ,
//	up in the prototype chain.
//
//
//	const obj3 = {
//		__proto__:obj1,
//		name:"obj3"
//	}
//
//	console.log(obj3.getthis());
//
//
//	the value of this always changed based on how a function is called,even when the function,
//	was define on an object at creation:
//	
//	const obj4= {
//		name:"obj4",
//		getthis(){
//			return this;
//
//		}
//	}
//
//
//	const obj5 = {name :"obj5"};
//
//	obj5.getthis = obj4.getthis;
//
//	console.log(obj5.geththis()); {name:"obj5",getthis:[function:geththis]};
//
//
//
//	if the value that the method is accessed on is a primitive ,this will be primitive value as well,
//	but only if the function is in strict mode /
//
//		function getthisstrict(){
//			"use strict"
//
//			return this;
//
//		}
//
//	Number.prototype.getThisStrict = getthisstrict;
//	console.log(typeof (1).getthisstrict()); //number
//
//
//	in none-strict mode a special process called this substitution ensures that the value of this is,
//	always an object.this means:
//	if a functiuon is called with this set to undefined or null this get substuted with globalthis .
//	if the function is called with this set to a primitive value this gets substituted with the primitive,
//	values wrapper object;
//
//
//	callbacks 
//
//	when a function is passed as a callback , the of this depends on how the callback is called ,
//	which is detemined by the impkementor of the api.calbacjs are typicallt called with a this value,
//	of undefined (cakking it directly without attaching it to any object) which means if the function is,
//	none0strict the value of this is the global object.
//
//	function logthis (){
//		"use strict"
//		console.log(this);
//	}
//
//
//	[1,2,3].forEach(logthis);//undefined 
//
//
//	[1,2,3].forEach(logthis,{name:"obj"}); //{name : "obj"} *3 displayed  
//
//
//
//	arrow functions
//
//
//	in arrow function this retains the value of the enclosing lexical contexts this .
//	in other words when evaluating an arriw functions body.the language does not create a new this binding.
//	in global code this is always globalthis regardless id strictness , because of the global context binding.
//
//
//
//
//	const globalobject = this ;
//	const foo = () => this ;
//
//	console.log(foo() === globalobject);//true
//
//
//	class C {
//		instancefield = this ;
//		static staticfield = this ;
//	}
//
//	const c = new C();
//
////	console.log(C.staticfield === C);
//
//
//
//	const objjj = {a:"custom"};
//
//
//	var f = "global";
//
//	function abc() {
//		console.log( this.f);
//	}
//
//	//abc();
//	
////	objjj.abc= abc;
////	objjj.abc();
//
//	
//	function add (c,d){
//		return console.log(this.a + this.b + c + d);
//	}
//
//	const o = {a:1,b:3};
//
//
////	add.call(o,5,7);
////	add.apply(o,[10,20]);
//
//	function f2 () {
//	  
//		return this.b;
//
//	}
//	
//
//	const g = f2.bind({b:"kian"});
//
//	const h = g.bind({b:"mobin"});
//
////console.log(h());
//
//
//
//	const b1 = {
//		getthisgetter (){
//			const getter = () => console.log(`${this}`);
//			return getter;
//			}
//	} 
//
////	console.log(b1.getthisgetter);
//	
//
////	const b2 = b1.getthisgetter();
//
////	console.log(b2()() === globalThis);
//
//
//	function kos () {
//		return console.log( this.a + this.b + this.c);
//	}
//
//
//	const p = {
//	  a:1,
//	  b:2,
//	  c:3,
//	  get average(){
//	     return console.log( (this.a + this.b + this.c) / 3);
//	  }
//	}
//
//
//	Object.defineProperty(p,"kos",{
//	   get:kos , 
//	   enumerable:true,
//	   configurable:true,
//	});
//
//
//
//
////	console.log(o.average,o.kos);
//
//
//
//
//	class Car {
//		constructor() {
//			this.saybye = this.saybye.bind(this);
//		}
//
//
//		sayhi(){
//			console.log(`hello from: ${this.name}`);
//	
//		}
//
//		saybye(){
//			console.log(`bye from:  ${this.name}`);
//
//		}
//
//
//		get name (){
//			
//			return "ferrari";
//
//		}
//	}
//
//
//	class Bird {
//		get name(){
//		  return "tweety";
//		}
//	}
//
//
//		const car = new Car();
//		const bird = new Bird();
//
//
//	//the value of this in methods depends on their caller.
//
//	car.sayhi();
//	car.saybye();
//
//
//	bird.sayhi = car.sayhi;
//
//	bird.sayhi();
//
//	//for bound methods this doesnt depend on the caller 
//	bird.saybye = car.saybye;
//
//	bird.saybye();
//
//
//
//
//

		/*FUNCTION BORROWING IN JAVASCRIPT*/

//	when we create javasctip objects, we typically associate them with certain behavior.

	class Dog {
		constructor(name , age , bread) {
			this.name = name;
			this.age = age ;
			this.bread = bread;
		}

		tellus(){
			return `my name is ${this.name}. i am ${this.bread} , i am ${this.age} years old`;
		}
		
		woof(){
		    	return "woof";
		}
	}

	let fido = new Dog ("fido",3,"duchshand");
//	console.log(fido.tellus());


	

	class Cat {
		constructor(name , age , bread) {
			this.name = name;
			this.age = age ;
			this.bread = bread;
		}

		
		mew(){
		    	return "mewo";
		}
	}

	let spark = new Cat ("spark",6,"ghaemshar");
	

	
	//function borrowing allows us to use methods of one object on a different.
//	object without having to make a copy of that method and maintain it in tow.
//	seprate place.it is accomplished through the use of .call() , apply(), or bind();
//	all of which exist to explictly set this on the method we are borrowing.


//	console.log(fido.tellus.call(spark));
//	console.log(fido.tellus.apply(spark));

	const descspark = fido.tellus.bind(spark);

//	console.log(descspark());
//
//
//
//
//	each of these examples work because this ,when refrenced inside a method , refers to the object.
//	that received the method call. .call() , apply() , .bind() work by allowing us to alter the object,
//	to which this refers inside of the .tellus method, whereas call and apply immediatly execute the,
//	function call,bind saves the function for later.
//
//
//
//
//
//	the centeral benefit of function borrowing is that it allows you to forego inheritance ,
//	theres no reason for you to force a class to inherit from another if youre only doing so ,
//	in order to grant instances of the child class access to a single method . and as i mentioned above,
//	function borrowing keeps you from having to write the same function twice and maintain it in tow places,
//	which reduces the risk of bugs.
//
//	the most important practical application of function borrowing pertains to native methods,
//	and specifically,to array.prototype.slice  there are several list-like data structures that,
//	arents array.and its useful ti be able to treat them as arrays and operate on them as such.
//	one of the most prevalent list-like data structure that isnt an array is arguments. ,
//	the arguments object represents all the parameters passed in to a given function.
//
//



	
//	function findow () {
//		let args = Array.prototype.slice.call(arguments);
//		return console.log(args.filter(a=>a.includes("o")));
//	}
//
//	findow("orchid","tulip","rose","lilek");
//
//

							/*Expilict binding*/


//	technically ,javascript this refers to the object that the function belongs to.
//	and the value of this depends on how the function is called ,something known,
//	as tuntime binding.
//
//	in laymans terms this points to the owner of the function call.i repeat,
//	the function call,and not the function itself.the same function can have,
//	different owners in different scenarios,
//
//
//	4ruls decide the vlue of this .
//
//
//
//	1-default binding direct| invocation
//
//	this in default binding points to the global object.default binding is ,
//	applied for standalone function and is the fallback option for all other types.
//

	function myf(){

	console.log(this);

	}
//	myf();


//	2-implict binding | method invocation
//
//	implicit binding is applied when you invoke a function in an object using the ,
//	dot notation.this in such scenarios will point to the object using which the function,
//	was invoked . or simply the object on the left side of the dot.
//


	function myf2(){
		console.log(this);
	}


	const ob1 = {
		someky:1,
		myf:myf2
	}

//	ob1.myf();



//	2-a nested function 
	
//	when a function is nested inside a method of an object , the context of the inner function,
//	depends only on its invocation type and not on the outer functions context

	const ob2 = {
	   somekey:2,
		outer:function(){
			function inner() {
				console.log(this);
			}
			inner();
		}
	}

 //	console.log(ob2.outer());



//	2-b method seprated from the object 

//	when we copy an object method to a new variable , we are creating a reference to the function



	function myf3(){
		console.log(this);
	}

	const ob3 = {
		somekey:1,
		myf:myf3,
	}

	const newf = ob3.myf;
///	newf();


//	3-Explicit binding | indirect invocation 
//
//	in this method , you can force a function to use a certain object as its this,
//	explicit binding can be applied using call , apply and bind.
//
//
//	call():pass in the reuired object as the first parameter during the function call.
//	the actual parameters are passed after the object.
//
//	apply():similar to call() with a difference in the way the actual arguments are passed.
//	here the actual arguments are passed as an array,
//
//

		function myf4 (param1,param2){
			console.log(this);
		}
			
		const ob4 = {someket:1};


		const param1 = 1 , param2 = 2;

//		myf4.call(ob4,param1,param2);
//		myf4.apply(ob4,[param1,param2]);





//	bind():in this method , you create a new function with a fixed this,
//	these types of function created using bind() are commonly known as bound function.


		const boundfunction = myf4.bind(ob4);
//			boundfunction();


	


//	4-new binding | constructor invocation 


//	new binding is applied when we create an object using function construtor.


//	4-a function without return 
//
//
//	when we invole a function using the new operator , internally the following steps are done:	
//
//		1.the constructor function is invoked and an object is enternally created,
//		 inherigin the prototype of the constructor function used.
//
//		2.the properties and functions are added to this object as per the function definition.
//		3.this newly created object is returned and is assigned to the LHS variables at the function call
//			
//		

function myf5 (){
	this.somekey= 1,
	this.inner = function(){
		console.log(this);
	}
}

const obj5 = new myf5();

//obj5.inner();

//	4-b function with retun 

//	the returned object is assigned to the LHS variable at the function call and the prototype of,
//	the constructor function is not inherited.



function myf6(){

	return {
		somekey:1,
	}
}

const ob6 = new myf6();

//console.log(ob6);





//	Arrow function 
//
//	arrow function use "lexical scop" to figure out what the value of this should be.
//	lexical scoping is a fancy way of saying uses "this" from the outer function in,
//	which it is defined.
//
//
//	simply , put , when an arrow function is invoked ,js literally takes the this,
//	value from the outer function where the arrow function is declared,i repeat,
//	the outer function not the outer object in which it is defined.
//
//	a.if the outer function is a normal function , this depends upon the type of ,
//	binding of the outer function.
//
//	b.if the outer function is an arrow function, js again checks for the next 
//	outer function and this proccess continues till the global object.
//

	function outer () {
		let inner = () => {
			console.log(this);
		}
		inner();
	}


const objA = {

	somekey:1,
	outer:outer,

}

const objB = {
	someket:2,
}

//outer();

//objA.outer();
//outer.call(objB);

//		note:none of the binding ruls has any direct effect on arrow function.


	
	const myfunC2 = () => {
		console.log(this);
	}



	const obj1A = {
		myfunC2:myfunC2,
		inner:()=>{
			console.log(this);
		}
	}



//	const obj1B = {}


//	myfunC2();
//	obj1A.myfunC2();
//	obj1A.inner();


//	myfunC2.call(obj1B);


//	const objc = new myfunC2();


//
//			asunchronous PROGRAMMING IN JS 
//
//asynchronous programming is a technique that enables your program to start a potentially long,
//running task and still be able to be responsive to other events while that task runs,rather than
//having to wait untill that task has finished .once thask has finished,your program is presented with the
//result,
//	*making http request using fetch();
//	*accessing a users camera or microphone using getusermedia();
//	*asking a user to select files using showopenfilepicker();
//


//	function loadScript(src){
//		let script = document.createElement("script");
//		script.src = src;
//		document.head.append(script);
//	}
//
//	loadScript("./main.js");
//
//
//	lets say we need to use the new script as soonas it loads.it declares new function.
//	and we want to run them.but if we do that immediately afeter the loadscript call,
//	that wouldnt work;
//
//
//
//
//	loadscript("./main.js");
//	newfunction(); //no such function
//	
//
//	naturally,the browser probably didnt have time to load the script.as of now the ,
//	loadscript function doesent provide a way to track the load completion.the script,
//	loads and eventually runs , thats all.but we had like to know when it happens,
//	to use new function and variable from that script.
//
//
//
//
//	lets add a callback function as a second argument to loadscript that should execute ,
//	when the script loads.
//
//
//
//	function loadscript (src,callback){
////	 	let script = document.createElement("script");
////		script.src = src;
////
////
////		script.onload= () => callback(script);
////		document.head.append(script);
////	}
////
////
////	the onload event it basically executes a function after the script is loaded and executed.
////	now if we want to call new function from the script.we should write that in the callback,
////
////
////
////
////	loadscript("./main.js",function(){
////		newfunction();
////	})
////
////
////
////	thats the idea the second arguments is a function (usually anonymous) that runs when the ,
////	action is completed.
////
////	callbacks in callbacks 
////
////
////	loadscript("main.js",function(script){
////
////		alert(`cool the ${script.src}is loaded`);
////
////		loadscript("main.js2",function (script){
////
////			alert(`cool the second scripts loaded`);
////		})
////
////	})
////
////
////	after the outer loadscript is complete the callback initiates the inner one.
////
////
////
////
////	handelling errors 
////
////
////
////
////
////
////	function loadscript (src,callback){
////	 	let script = document.createElement("script");
////		script.src = src;
////
////
////		script.onload= () => callback(script);
////		script.onerror  =() => callback(new Error(`this is error for ${src}`));
////		document.head.append(script);
////	}
////
//		
//
//	//	PROMISEI
//
//
//	var timerPromise = new  Promise (function(resolve ,reject) {
//		
//		setTimeout(function(){
//			resolve("hello");
//		},3000);
//	});
//
//	timerPromise.then(function(value){
//		console.log(value);
//	})
//
//
//
//javascript was single-threaded from day one,these time-consuming operation were carried out
//asynchronosly , away from main thread in order to prevent it from being blocked while the 
//operation were under executing.
//
//1-events-actions occurring on a web page.
//2-callbacks-functions stored somewhere to be called back later on .
//
//
//	a promise is a means of simlifying the task of writing complex asynchronous code .
//
//	a promise is an object that represent the success or failure of a given operation.
//	usually an asynchronous operation.
//
//
//
//
//	benfits of using promise
//
//
//
//first of all,promises mitigate the extra levels of indentaion we saw earlier,by a mechanism for 
//attaching callbacks instead of passing them to another function.
//
//secondlly,error-handling in promise is a lot more concise and maintainable than error-handling in
//callbasks.promise are built upon the conventional try..catch model used to respond ti thrown 
//exceptions and thus ,offers more convenience to developers in writing exception handling code.
//
//biggest benefit of promise lies in the usage of async/await to make anynchronous code look as 
//if its synchronous code.
//
//
//
//
//	creating a promise 
//
//
//the promise() constructor accepts a single arguments which is a function encapsulating the code for
//the async operation. 
//
//the reason for encapsulating the code inside a function is so that the promise() constructor itself has
//control ower when and how to execute the code contained in the function.
//
//
//	the executor function is meant to execute an asycnchronous operation.
//
//
//
//
//	the state of a promise 
//
//since the setup of an async operation.it can fall into on of the three cases:still being processed, 
//succeeded, or fail.
//
//	at any point in time , a promise can be in one of the three states:pending,fulfilled,or rejected.
//
//
//
//	pending means that the underlying async operation is still ongoinng no judgment can be made about,
//	its outcome yet.
//
//	fulfilled means that the async operation  has been    succeeded.
//
//	rejected means that the async operation has been failed.
//
//
//
//	the value of promise 
//
//
//	the value of promise is basically a means of represnting the outcome of the underlying async,
//	operation that it performs.
//
//	a promises value is set by passing an argument to the resolve() or reject() function in the ,
//	executor.
//
//
//
//
//
//	the then() method 
//
//
//	the then() method of the promise interface is used to execute a function when a promis .
//	is resolved or rejected.
//
//	then accepts two arguments 
//
//	1-a function to call once the promise is fulfilled.
//	2-a function to call once the promise is rejected.
//
//
//
//	syntax promise.then(onfulfilled,onrejected);
//
//
//	new promise(function (resolve,reject){
//		settimeout(function(){
//		    resolve("hello");
//		},3000)
//	})
//
//	promise.then(function(value){
//		console.log(value);
//	})
//
//	fist, a promise objects is instantiated by calling new promise();
//	
//	the promise() constructor is provided with an executor function where an 
//	async operation gets performed.
//
//	the operation completes at some point in the future.at this point .depending on 
//	whether it succeeded or faild , the function resolved or rejected is called respectively.
//
//	this result in the respective callback function provide to then() to be executed.
//
//
//
//
//	the executor function
//
//
//
//	the executor function is executed immediatly by the internal enigne as soon as the 
//	promise() constructor called.
//
//
//	console.log("1");
//
//	new prmoise(function(res,rej){
//		console.log("2");
//	})
//	
//	console.log("3");
//
//	///log 1 
//	//log 2 
//	//log 3
//
//
//	how then() work under hood?
//
//
//	by invocing then() on a promise object,we simply specify that a given function shall be 
//invoked when promise settles,the function is provided as an arguments to the then() method.
//
//	if a promise is unsettled and we invoked then on it ,thers no point of executing the callback,
//	to sent to then() at this stage,
//
//	but we cant also just ignore the callback passed to then(),otherwise it would be useless to call,
//	then() prior to a promisess settlement,
//
//
//	the only way out is to store the given callback within the promise and fire it as soon as the 
//	promise is settled,
//
//
//	
//	promise chaining 
//
//
//	there are basically three possible outecomes of firing the callback passed to then();
//
//	returning a non-promise value,
//	throwing an exception,
//	returning a promise ,
//
//
//	1-non-promise value
//
//	if the callback returns a non-promise value for example a number a string , an array,
//	the returned promise is fulfilled with the value,
//

//	var p = new Promise(function(resolve , reject){
//		resolve("data1");
//	})
//
//	var p2 = p.then(function (data){
//		return "data2";
//	})
//
//	console.log(p2);




//	var p = new Promise(function(resolve , reject){
//		reject("sorry");
//	})
//
//	var p2 = p.then(null,function (data){
//		return "ok";
//	})
//
//	console.log(p2);
//



//	an exception thrown

//	if the callbacks throws an exception for example throw new error the returned promise,
//	is rejected with the value 



//
//	var p = new Promise(function(resolve , reject){
//		resolve("ok");
//	})
//
//	var p2 = p.then(function (data){
//		
//		throw "sorry";
//	})
//
//	console.log(p2);
//
//
//
//	var p = new Promise(function(resolve , reject){
//		reject("sorry");
//	})
//
//	var p2 = p.then(null,function (data){
//		throw "sorry again";
//	})
//
//	console.log(p2);
//
//

	
//	a promise value 


//if the callbacks returns a promise itself , we have a special case-the promies returned by then abides 
//by the result of this promise,

//in other words-if the returned promise fulfilled , the dirved promise fulfilled too,if its rejected
//the drived promise rejected too,and if ites pending the drived promise pending too.




//
//	var p = new Promise(function(res,rej){
//		res("ok");
//	})
//
//	var p2 = p.then(function(data){
//		return new Promise(function(res,rej){
//		
//			res(data + "bye");
//
//		})
//
//	})
//
//
//	console.log(p2);

//
//
//
//	var request1 = new Promise(function(resolve,reject){
//		var xhr = new XMLHttpRequest();
//		
//		xhr.open("GET","./text.txt",true);
//		xhr.onload = function (e){
//		 	if(this.status === 200){resolve(this)};
//		}
//		xhr.send();
//	});
//
//
//	var request2 = request1.then(function(data){
//		var filename = data.responseText.split("\n")[1];
//
//
//		return new Promise(function(resolve,reject){
//			var xhr = new XMLHttpRequest();
//			xhr.open("GET",filename,true);
//			xhr.onload = function (e){
//			  if(this.status ===200){resolve(this)};
//			}
//			xhr.send();
//		})
//	})
//
//
//	request2.then(function (data){
//		console.log(data.responseText);
//	})
//
//
//


//				async/await


//	a function always returns a promise.other values are wrapped in a resolved promise automatically.	
//async ensures that the function returns a promise , and wrap non-promise in it.
//await ,that works only inside async function.
//
//
//
//
//	async function f(){
//		return 1;
//
//	}
//
////	f().then((val)=>{console.log(val)});
//
//
//	async function f2(){
//		return Promise.resolve(1);
//	}
//
//
//
////	f2().then((val)=>{console.log(val)});
//
//
//
/////	the keyword await makes javascript wait untill that promise settles and returns its result.
////
//
//
//	async function f3(){
//	   let promise = new Promise((resolve,reject)=>{
//		setTimeout(()=>resolve("done!"),1000)
//	   });
//
//	   let result = await promise;
//		console.log(result);
//	}
//
//
//	//f3();
//
//
//	the function executing "pauses" at the line (*) and resumes when the promise settles,with result ,
//	becoming its result. so the code above shows "done!" in one scond.
//
//	lets emphasize:await literally suspands the function executing untill the promise settles,and then
//	resumes it with the promise result,that doesnt cost any cpu resources,because the javascript engine 
//	can do other jobs in the meantime:execute other scripts,handle events,
//
//	its just a more elegant syntax of getting the promise result than promise.then and its easier to read and 	  write,
//
//
//
//
//	cant use await in regular function 
//
//
//	if we try to use await in a non-async function , where would be a syntax error.
//
//	function f() {
//	 	let promise = Promise.resolve(1);
//		let result = await promise; //syntax error;
//	}
//
//	we may get this error if we forget to put async befor a function,as stated earlier,await only 
//	works inside an async function.
//
//
//	async function showAvatar(){
//		let response = await fetch("url/fortest");
//		let uer = response.json();
//
//		let githubResponse = await fetch(`usersfortest/${user.name}`);
//		let guthubUsers = await githubResponse.json();
//
//		let img = document.createElement("img");
//		img.src = githubUsers.avatar_url;
//		img.className = "promise-awatar-example";
//		document.body.append(img);
//
//
//		await new Promise((resolve , reject)=> setTimeout(resolve,3000));
//
//		img.remove();
//
//		return githubUsers;
//	}
//
//	showAvatar();
////
////
////
////like promise.then , await allows us to use thenable objects the idea is that a third-party object 
////may not be a promise , but promise-compatible,if is supports .then thats enough to use it with await.
////
//
//
//	class Thenable {
//		constructor (num){
//			this.num = num
//		}
//
//		then(resolve,reject){
//			console.log(resolve);
//
//			setTimeout(()=>resolve(this.num * 2),1000);
//		}
//	}
//
//
//	async function f4(){
//
//		let resutl = await new Thenable(1);
//	
//		console.log(resutl);
//
//	}
//	
//
////	f4();
//
//
////if await gets a non-promise object with .then , it calls that method providing the bult-in function
////resolve and reject as arguments just as it does for a regular promise executor then await waits untill
////one of them is called and then proceeds with the result;
//
//
//
//	class Waiter{
//		async wait(){
//			return await Promise.resolve(1);
//		}
//	}
//
//
////	new Waiter()
////		.wait()
////		.then((val)=>{console.log(val)});
//
//
////if a promise resolves normally,then await promise returns the result,but in the case of a rejection,it
////throws the error,just as if there were a throw statement at that line,
//
////	this code :
//	async function f(){
//		await Promise.reject(new Error("whoops"));
//	}
////	f();
//
//
////	is the same as this:
//
//
//		async function f2() {
//			throw new Error("im error");
//		}
//
//
////	f2();
//
//
//
////in real situation , the promise may take some time befor it rejects, in that case there will be a delay
////befor await throws an error;
//
////we can catch that error using try...catch , the same way as a regular throw
//
//
//	async function f1(){
//		try{
//			let response = await fetch("this is test");
//		}catch(error){
//		console.log(error);
////		}
////	}
////	f1();
//
//
//
////	in the case of an error , the control jumps to the catch block,we can also wrap multiple lines:
//
//	async function f(){
//		try{
//			let response = await fetch("this is test");
//			let result = await response.json();
//		}catch(err){
//			console.log(err);
//		}
//	}
//
//
//
////	f();
//
//
////	if we  dont have try..catch,then the promise generated by the call of the async function f() becomes
////	rejected,we can append .catch to handle it;
//
//
//
//	async function f2(){
//
//		let response = await fetch ("dodol tatla");
//
//	}
//
//
//	f2.catch(err){console.log(err)};
//
//
//
//
//	async/await and promise.then
//
//
//
//when we use async/await , we already need .then because await handles the waiting for us,
//and we can use a regular try..catch instead of .catch , thats usually more convenient;
//
//
//but at the top level of code,when we are outside any async function,we are syntacircally unable to
//use await, so its a normal practice to add  .then/catch to handle the final result or falling-through
//error,like in the line of the example above.
//
//
//	async/await works well with promise.all
//
//when we need to wait for multiple promises , can wrap them in promise.all and then await,
//
//
//	let result = await Promise.all([
//		fetch(url1),
//		fetch(url2),
//		...
//	]);
//
//
//in the case of an error ,it propagates as usual , from the failed promise to promise.all ,and
//then becomes an exception that we can catch using try..catch around the call,
//
//
//
//
//summary 
//
//
//the async keyword befor a function has two effects:
//
//1.makes it always return a promise,
//2.allows await to be used in it,
//
//
//the await keyword befor a promise makes javaScript wait untill that promise settles ,and then:
//
//1.if its an error,an exception is generated -- same as if throw error were called at that very place,
//2.otherwise , it returns the result.
//
//
//together they provide a great framwork to write asyncchronous code that is easy to both read and write,
//
//
//
//with async/await we rarely need to write promise.then/catch,but we still shoudnt forget that they are 
//based on promises,because somtimes we have to use these methods also promise.all is nise when we are
//writing  for many tasks simultaneously.
//

//
//
//		making network requests with javascript 
//
//
//
//what is the problem here?
//
//	a web page consist of an html page and various other files,such as stylesheet , script,
//	and images.the basic model of page loading on the web is that youre browser makes one or ,
//	more http requests to the server for the files needed to displaye the page,and the server ,
//	responsed with the requested files,if you visit another page,the browser requests the new files,
//	and the server responds with them,
//
//	the trouble of the traditional model here is that we,d have to fetch and load the ntire page,
//	even when we only need update one part of it,this is inefficient and can result in a poor user experoinc,
//
//
//	the main api here is the fetchApi, this enables javascript running in a page to make an http 
//	request to a server to retrieve specific resources,when the server provides them,the javascript 
//	can use the data to update the page ,typically by using dom manipulation api the data requested is 
//	often jason which is a good format for transferring structured data,but can also be html or just text,
//
//
//	.page updates are a lot quicker and you dont have to wait fo the page to refresh , meaning that
//	the sites feels faster and more responsive ,
//
//	.less data is downloaded on each update,meaning less wasted bandwith,this may not be such a big,
//	issue on a desktop on a broadband connection,but its a major issue on mobile devices and in contries
//	that dont have ubiquitous fast internet serivce,
//
//
//
//
//	some sites also store assets and data on the users computer when they are first requested,meaning
//	that on subsequent visit they use the local versions instead of downloading fresh copies every time,
//	the page is first loaded ,the contetn is only reloaded from the server when it has been updated,
//
//
//
//	fetch(url)
//	.then((response)=>{
//
//	if(!response.ok){
//		throw new Error (`http error:${response.status}`);
//	}
//
//
//
//		return response.text();
//
//	})
//
//	.then((text)=>{
//		poemdisplay.textContent = text
//	})
//
//	.catch ((err)=>{
//		poemdisplay.textContent = `could not fetch ${err}`;
//	})
//
//
//
//
//
//
//		USING THE FETCH API 
//
//
//
//	the fetch api provides a javascript interface for making http requests and processing the responses.
//	unlike XMLHttpRequest , which uses callbacks,fetch is promise-based and is integrated with featurs,
//	of the modern web such as service worker,cross origin resource sharing CORS.
//
//
//
//	with the fetch api , you make a request by calling fetch(),which is available as a global function 
//	in both window and worker context,you pass it a request object or a string containing the url to fetch,
//	along with an optional argument to configure the request,
//
//
//
//	the fetch function returns a promise which is fulfilled with a response object representing the servers,
//	response, you can then check the request status and extract the body of the response in various format,
//	including text and json by calling the appropriate on the response,
//
//
//
//
//	async function getData (){
//		const url = "https://examle.org";
//
//		try {
//			const response = await fetch(url);
//			
//			if(!response.ok){
//				throw new Error (`${response.status}`);
//			}
//			
//			const result = await response.json();
//			console.log(result);
//		}catch(err){
//			console.log(err.message);
//		}
//	}
//
//
//
//	making a request 
//
//
//	1.a definition of the resource to fetch , this can be any one of :
//		.a string containing the url
//		.an object,such as an instance of  url,which has a stringifier that product a string,
//			containing the url,
//		.a request instance,
//
//	2.optionally,an object containing options to configure the request,
//
//
//
//
//	*setting the method 
//
//	by default fetch makes a get request , but you can use the method option to use a different request.
//	if the mode option is set to no-cors ,then method must be one of get,post or head.
//
//	const response = await fetch(url,{
//		method:"POST",
//
//
//	})
//
//
//
//	*settinf a body 
//
//
//	the requset body is the payload of the request:its the thing the client is sending to the server.
//	you cannot include a body with get request,but its useful for request that send content to the server,
//	such as post or put requests ,if you want to upload a file to the server , you might make a post request
//	and include the files as the request body,
//
//
//	const response = await fetch(url,{
//		method:"POST",
//
//		body: JSON.stringfy({username:"kiannosratian"}),
//	})
//
//
//
//
//	*setting headers 
//
//	request headers give the sever information about the request,in a post request the content-type headers
//	tells the server the format of the  request body.
//
//
//
//	const response = await fetch(url,{
//		method:"POST",
//		headers:{
//		  "Content-Type":"application/json",
//		},
//
//		body: JSON.stringfy({username:"kiannosratian"}),
//	})
//
//
//
//
//	sending data in a get request 
//
//
//	get request dont have a body,but you can still send data to the server by appending it to the url as 
// 	a query string,this is a common way to send form data to the server , you can do this by using 
//	urlsearchparams to encode the data , and then appending it to the url,
//
//
//	const params = new URLSearchParams();
//
//	params.append("username","example");
//	
//	const response = await fetch(`${params}`);
//
//
//
//	MAKING cross-origing-requests
//
//
//cors is an http-header based mechanism that allows a server to indicate origin other than its own from which 
//a browser should permit loading resourses.cors also relies on a mechanism by which browsers make a preflight 
//request to the server hosting the cross-origin resource ,in order to check that the server will permit the 
//actul request,in that preflight , the browser sends headers that indicate the http method and headers that 
//will be used in the actul request.
//
//
//what request use cors?
//
//	*invocations of fetch or xmlhttprequest
//	*web fonts so that servers can deploy truetype fonts that can only be loaded 
//	cross-origin and used by websites that are permitted to do so.
//	*webgl textures.
//	*images/video frames drawn to a canvas using drawimage();
//	*css shapes from images.
//
//
//




//	CLASS BASIC SYNTAX 


//in practice, we often need to create many object of the same kind,like users of goods or whatever.



//then use new mycalss () to create a new object with all the listed methods.
//the constructor method is called automatically by new , so can initialize the object there.


//	class User {
//		constructor(name){
//		   this.name = name;
//		}
//		sayHi(){
//		console.log(this.name);
//		}
//	}
//
//
//
//	let user = new User("ali");
//	user.sayHi();

 // when new user is called : 
//	1.a new object is created.
//	2.the constructor runs with the given argument and assign it to this.name;
//then we can call object methods , such as user.sayHi();

//in  java script , a class is a kind of function.


//	console.log(typeof User);

//what class User construct really does is : 
//
//1.creates a function named User,that becomes the result of the class declaration,the function code is taken
//from constructor method .
//2.stores class methods, such as sayHi in user.prototype.
//
//	after new user object is created , when we call its methods,its taken from the prototype,
//	so the object has access to class methods,
//
//
//
//

//	console.log(User === User.prototype.constructor);
//	console.log( User.prototype.sayHi);
//console.log(Object.getOwnPropertyNames(User.prototype));


//	there are important differences.
//
//	1.first, a function created by class is labelled by a special internal property [ISClassConstructor]
//	true,so its not entirely the same as creating it manually,
//	
//	the language checks for the property in a variety of places.unlike a regular function , is must be 
//	called with new,
//
//
//
//	USer() Error cannot be invoked without new ;
//
//
//
//	2-class methods are non-enumerable,a class definition sets enumerable flag to false for all 
//	methods in the property,
//
//	thats good because if we for..in over an object,we usually dont want its class methods,
////
//	class MyClass {
//		classmethod(){}
//	}
//
//	function myoldclass (){}
//
//	myoldclass.prototype.oldmethod = function (){};
//
//	const instance = new MyClass();
//
//
//	for(let prop in  instance ){
//		console.log(prop);
//	}
//
//	const oldInstance = new myoldclass();
//
//	for(let prop in oldInstance){
//		console.log(prop);
//	}
//
//

	//3- classes always use strict ,all code inside the class construct is automatically in strict mode ,




//	class Expression 


//	just like function , classes can be defined inside another expression,passed around , assigned,


//	let NUser = class newclass {
//		sayhi(){console.log("hello")};
//	}
//	new NUser().sayhi();

	// works,shows myclass definition

//	console.log(newclass); // erroe, newclass name isnt visible outside of the class


// 	we can even make classes dynamically on-demand 



//	function makeClass (obj){
//		return class{
//		  sayhe(){
//			console.log(obj);
//		  }
//
//		}
//
//	}
//
//	let A = makeClass("hi");
//	new A().sayhe();
//

//		Getters/setters 

//just like literal object , classes may include getters/setters , computed properties 



//	class A {
//		constructor(name){
//			this.name = name;
//		}
//
//
//		get name(){
//			return this._name;
//		}
//
//		set name(value){
//			if(value.length < 4 ) {
//				console.log("name is short");
//				return
//			}
//			this._name = value;
//		}
//	}
//
//	let B = new A("kian");
//	console.log(B.name);
//
//	    B = new A("");
//
//
//such class declaration works by creating getter and setters in user.prototype;
//
//
//
//


//	computed names [..]


//	class User {
//		["say" + "hi"](){
//			console.log("its computed name ");

//		}
//	}

//	new User().sayhi();



//	class fields 

//class fields is a syntax that allows to add any properties;


//	class User {
//		name = "kian";
//		say(){
//			console.log(this.name);
//		}
//	}

//	 new User().say();

//the important difference of class fields is that they are set on indiviual objects,not user.prototype;
	
//	let user = new User();
//	console.log(user.name);

//	console.log(User.prototype.name);



//	making bound methods with class fields;


//if an object method is passed around and called in another context,this wont be a reference to its object any more



//	class Button {
//		constructor (value){
//			this.value = value;
//		}
//	
//		click(){
//		  console.log(this.value);
//		}
//	}


//	let button = new Button ("eeeee");
//	  button.click();
//	setTimeout(button.click,1000);
//
//
//	the problem is called losing this.
//	
//	1.pass a wrapper-function , such as setTimout(()=>button.click(),1000);
//
//	2-bind the method object in the constructor,
//
//
//
	

//
//
//
//	class Button {
//		constructor (value){
//			this.value = value;
//		}
//	
//		click = () => {
//		  console.log(this.value);
//		}
//	}
//
//
//
//
//
//	let button = new Button ("eeeee");
//	  button.click();
//	setTimeout(button.click,1000);
//
//
//
//
//the class fields click = () => {} is created on a per-object basis,there is a seprate function for each
//button object , with this inside it refercing that object , we can pass button.click around anywhere and
//the value of this will always be correct;
//
//
//	


//			class inheritance 
//class inheritance is a way for one class to extend another class.

			
//
//class Animal {
//  constructor(name){
//	this.speed = 0;
//	this.name = name;
//}	
//  run(speed){
//	this.speed = speed;
//	  console.log(`${this.name} runs with speed ${this.speed}`);
//  }
//
//  stop(){
//	this.speed = 0;
//	  console.log(`${this.name} stands still `);
//  }
//}
//
//let animal = new Animal ("");
//
//class Rabbit extends Animal {
//  hid(){
//	console.log(`${this.name} hies`);
//  }
//}
//
//let rabbit = new Rabbit("white rabbit");
//
//rabbit.run(5);
//rabbit.hid();






//as rabbits are animals , rabbit class should be based on aminal , have access to animal methods,
//so that rabbits can do what generic animals can do.

//internally extends keyword works using the good old prototype mechanics ,it sets rabbit.prototype 
//to animal.prototype , os if a method is not found in rabbit.prototype javascript takes from animal.prototype


//any expreesion is allowd after extends 

//class syntax allows to specify not just a class , but any expression after extends



function f(arg){
	return class{
	   sayhi(){
		console.log(arg);
	   }
	}
}

//class User extends f("hello"){}

//new User().sayhi();



//overriding a method 

//we dont want to totally replace a parent method ,but rather to build on top of it to tweak or
//extends its functionality , we do somthing in our method , but call the parent method befor/after 
//it or in the process;


//class provides super keyword for that.

//	* super.method to call a parent method;
//	* super()to call parent constructor(inside our constructor only);
//	
//class Animal {
//  constructor(name){
//	this.speed = 0;
//	this.name = name;
//}	
//  run(speed){
//	this.speed = speed;
//	  console.log(`${this.name} runs with speed ${this.speed}`);
//  }
//
//  stop(){
//	this.speed = 0;
//	  console.log(`${this.name} stands still `);
//  }
//}
//
//let animal = new Animal ("");
//
//class Rabbit extends Animal {
//  hid(){
//	console.log(`${this.name} hies`);
//  }
//  stop(){
//	super.stop();
//	this.hid();  
//  }
//}
//
//let rabbit = new Rabbit("white rabbit");
//
//rabbit.run(5);
//rabbit.stop();
//
//
//
//arrow function have no super,if accessed its taken from the outer function,

//class Rabbit extends Animal {
//stop(){
 //	setTimeout(()=>super.stop(),1000); //call parent stop after 1sec

//}
//}



//if a class extends another class and has no contructor ,then the following "epmty" constructor is generated;

//class Rabbit extends Animal {
 //  constructor(...args){
//	super(...args);		
  //}
//}

//t basically calls the parent constructor passing it all the arguments ,that happens if dont write a constructorof our own.


//class Animal {
//  constructor(name){
//	this.speed = 0;
//	this.name = name;
//}	
//  run(speed){
//	this.speed = speed;
//	  console.log(`${this.name} runs with speed ${this.speed}`);
//  }
//
//  stop(){
//	this.speed = 0;
//	  console.log(`${this.name} stands still `);
//  }
//}
//
//let animal = new Animal ("");
//
//class Rabbit extends Animal {
//
//	constructor(name,earlength,speed){
//		super(speed);
//		this.speed = 0;
//		this.name = name;
//		this.earlength = earlength;
//	}
//
//hid(){
//	console.log(`${this.name} hies`);
//  }
//  stop(){
//	super.stop();
//	this.hid();  
//  }
//}
//
//let rabbit = new Rabbit("white rabbit",10);
//
//constructor in inheriting classes must call super and do it befor using this.
//
//in javascript there is a distinction between a constructor function of an inheriting class
//(so called derived constructor); and another function,A derived constructor has a special internal property
//thats a special internal label
//
//that label affects its behavior with new;
//
//	*when regular function is executed with new ,it creates an empty object and assign it to this;
//	but when a derived constructor runs,it doesnt do this,it expects the parent constructor to do this job
//
//so derived constructor must call super in order to execute its parrent base constructor,otherwise the object
//for this wont be created,and we will get an error,
//
//for the rabbit constructor to work,it needs to call super befor using this.




//	overriding class fields : a tricky note
//class Animal {
// name = "animal";
// constructor(){
//   console.log(this.name);
// }
//}
//
//class Rabbit extends Animal {
// name = "rabbit";
//}
//new Animal();
//new Rabbit();
//
//
//in other words , the parent constructor always uses ots own field value,not the overdidden one,
//
//
//class Animal {
//   showName(){
//	console.log("animal");
//   }
// constructor(){
//   this.showName();
// }
//}
//
//class Rabbit extends Animal {
//    showName(){
//	console.log("rabbit");
//    }
//}
//new Animal();
//new Rabbit();
//
//
//when the parent constructor is called in the derived class , it uses the overridden method,
//but for class fields its not so.as said the parent constructor always uses the parent field.
//
//	why is there a difference?
//	the reason is the field initialization oreder , the class field initialized:
//	
//	*befor constructor for the base class that doesnt extend  anything.
//	*immediatly after super for the derived class,
//
//in our case , rabbit is the derived class , there is no constructor in it , as said previously, thats the 
//same s if there wan an empty constructor with only super(..args)
//
//so new rabbit calls super , thus executing the parent constructor , and per the rule for derived class
//only after that its class fields are initialized , at the time of the parent constructor executing,there 
//are no rabbit class fields yet , thats why animal fields are used,
//
//this behavior only reveals itself if an overridden field is used in the parent constructor , then may be 
//difficualt to understand whats going on ,
//
//
//how it should technically work?when an object method runs , it gets the cuttent object as this,
//if we call super.method then the engine needs to htet the method from the prototype of the current object
//but how>?
//
//the engine knows the current object this, so it could get the parent method as this.proto.method
//unforyaunatly sucj a naive solution wont work.

//
//	let animal = {
//		name :"animal",
//		eat() {
//			console.log(`${this.name} eats`);
//
//		}
//	}
//
//
//	let rabbit = {
//		__proto__ : animal,
//		name : "rabbit",
//		eat(){
//			this.__proto__.eat.call(this);
//		}
//	}
//
//	let dog = {
//		__proto__:rabbit,
//		eat(){
//
//			this.__proto__.eat.call(this);
//		}
//
//	}





//at the line * we take eat from the prototype animal and call it in the context of the current object;
//pese note that .call(this) is important here because a simle this.__proto__.eat() would execute parent eat 
//in the context of the prototype no the current obect,

//in both line the value of this is the current object , thats essential all object methods get 
//the current objext as this not a prototype or something.
//
//so in both lines * and ** the value of this.__proto__ is exactly the same rabbit they both call rabbit.eat
//without going up the chain in the endless loop,
//
//
//
//
//	homeObject 
//
//
//to provide the solution javascript adds one more special internal property for functions:home object
//when a functions is specified as  a class or object method its homeobject property becomes that object,
//	then super uses it to resolve the parent prototype and its methods,
//
//
//
//
//
//

//
//	let animal = {
//		name :"animal",
//		eat() {
//			console.log(`${this.name} eats`);
//		},
//		sayhi(){
//			console.log("im an animal");
//		}
//	}
//
//
//	let rabbit = {
//		__proto__ : animal,
//		name : "rabbit",
//		eat(){
//			super.eat();
//
//		}
//
//	}
//
//	let dog = {
//		__proto__:rabbit,
//		name:"dog",
//		eat(){
//
//		  super.eat();
//		}
//
//	}
//
//	let planet = {
//		sayhi(){
//			console.log("hello");
//		}
//	}
//
//	let tree = {
//		__proto__ : planet,
//		sayhi : animal.sayhi
//	}
//
//
//
// 		methods are not free.
//
//generally funcitons are free. not bound to objects in javascript , so they can be copied between objects and 
//called with another this,
//
//
//the very existance of homeobject violates that principle,because methods remember their objects, 
//homeobjects cant be changed , so this bond is forever,
//
//
//the only place in the language where homeobject is used is super, so if a method does not use super
//then we can still consider it free and copy between objects,but with super things may ho wrong,
//
//
//	a call to tree.sayhi() shows im an animal , definitely wrong,
//
//
//
//the reason is simple:
//
//
//in line * the method sayhi was copied from rabbit, maybe we just wanted to avoid copy duplication?
//	
//-its homeobject is rabbit ,as it was created in rabbit,theres no way to change homeobject;
//
//-the code of tree.sayhi() has super.sayhi inside , it goes up from rabbit and takes the method from aniumal
//
//
//	methods,not function properties
//
//
//homeobject is defined for methods both in classes and in plain objects,but for objects , method must be
//specified exactly as method () not as "method:function()" 
//
//its important for javascripts
//


//	let animal = {
//		eat:function (){
//			console.log("eat");
//
//		}
//	}
//
//	let rabbit = {
//		__proto__:animal,
//		eat:function(){
//			super.eat();
//		}
//	}
//
//
//	rabbit.eat();
//
//
//
//		summary 
//
//1-to extend a class:class child extends parent
//
//	that means child.prototype.proto will be parent.prototype so methods are inherited,
//
//2-when overriding a constructor 
//	
//	we must call parent constructor as super() in child constructor befor using this,
//
//3-when overring another method:
//		
//	we can use super.method() in a child method to call parent method.
//
//4-internals:
//
//	methods remember their class/object in the internal homeobject property,thats how super.
//	resolve parent method
//
//	so its not safe to copy a method with super from one object to another,
//
//also:
//
//	arrow function dont have their own this or super,so they transparently fit into the surrounding context.
//
//
//




//		static properties and mthods 

//we can also assign a method to the class as a whole.shuch methods are called static
//in a class declaration they are prepended by static keyword

//
//	class User{
//		static staticmethod (){
//			console.log(this === User);
//		}
//	}
//
//
////	User.staticmethod();
//
//
////that actully does the same as assiging it as a property directly
//
//
//
//class A {}
//	A.staticmethod = function () {
//		console.log(this === A);
//	}
//
//
////A.staticmethod();
//
//
// //the value of this in A.staticmethod call is the class constructor A itself (the object befor dot);
//
////static method are used to implement functions that belong to the class as a whole , but not to 
////any particular object of if,
//
//
////we have article object and need a function to compare them
////a natural solution would be to add article.compare static method:
//
//
//class Article {
// constructor(title,date){
//	this.title=title;
//	 this.date = date;
// }
// static compare(articleA,articleB){
//	return articleA.date - articleB.date;
// }
//}
//
//
//let articles = [
//	new Article("html",new Date(2019,1,1)),
//	new Article("css",new Date(2019,0,1)),
//	new Article("js",new Date(2019,11,1)),
//];
////console.log(articles );
//
////articles.sort(Article.compare);
//
////console.log(articles );
//
//
////console.log(articles[0].title );
////
////
////here article.compare method stands above articles,as a means to compare them.its not a method of an 
////article , but rather of the whole class.
////
////another example would be a so-called factory method,
////
////	we need multiple ways to create an article
////1-creat by given parameters (title, date);
////2-create an empty article with todays date,
////
////
////the first way can be implemented by the constructor , and for the sconde one we can make static method
////of the class,
////
//
//
//class Article2 {
//  constructor(title,date){
//	this.title= title;
//	this.date = date;
//  }
//
//	static createTodays () {
//	  return new this("to daye is digest",new Date());
//	}
//}
//
//let article2 = Article2.createTodays();
//
////console.log(article2);
//
//
//now every time we need to create a todays digest,we can call article.createtodays once again
//thats not a method of an article,but a method of the whole class.
//
//static methods are also in database-related classes to search/save/remove entries from database
//
//Article.remove({id:12345});
//
//
//static methods arent available for individual objects
//
//static methods are callable on classes , not on individual objecy
//
//article.createtodays () error is not a function
//
//
//
//static properties 
//
//this is a recent addition to the language examples work in the recent chrome,
//
//
//static properties are also possible , they look like regular class properties , but prepended by static
//
//class Article {
//
//	static publisher = "ilya kantor";
//}
//console.log(Article.publisher) ilya kantor
//
//
//
//that is the same as a direct assignment to Article
//
//Article.publisher = "ilya kantor";
//
//
//inheritance of static properties and methods 
//
//
//static properties and methods are inherited;
//for instance Animal.compare and Animal.planet in the code below are inherited and accessible as rabbit.compare
//and rabbit.planet
//
//
//
//

//
//class Animal{
//  static planet = "earth";
//
//	constructor(name,speed){
//	this.name = name;
//	this.speed = speed;
//	}
//
//
//
//	run(speed = 0 ){
//		this.speed += speed;
//		console.log(`${this.name} runs with speed ${this.speed} `);
//	}
//
//  static compare(animalA , animalB){
//	return animalA.speed - animalB.speed;
//
//  }
//
//
//}
//
//
//class Rabbit extends Animal{
// hide(){
//   console.log(`${this.name} hides`);
// }
//}
//
//
//let rabbits = [
//	new Rabbit("white rabbit",10),
//	new Rabbit ("black rabbit",5)
//]
//
//rabbits.sort(Rabbit.compare);
//
//
//console.log(rabbits);
//
//console.log(Rabbit.planet);
//
//console.log(rabbits[0].run())
//
//
//
//now when we call rabbit.compare the inherited animal.compare will ne called;
//how does it work ? again using prototype ,as you might have already guessed,extends gives Rabbit 
//the prototype refrence to animal
//
//so rabbit extends animal creates two prototype refrence ;
//1-rabbit function prototypally inherits from animal function
//2-rabbit.prototype prototypally inherits from animal.prototype
//
//
//as a result inheritance works both for regular and static methods.
//
//class Animal{};
//
//class Rabbit extends Animal {};
//
//console.log(Rabbit.__proto__ === Animal) true
//console.log(Rabbit.prototype.__proto__ === Animal.prototype) true
//
//
//
//summary
//
//
//static methods are used for the functionality that blongs to the class as a whole.it doesnt relate to a 
//concrete class instance ;
//
//a method for comparision article.compare (artA , artB ) or a factory method article.createtodays
//
//they are labeled by the word static in class declaration.
//
//static properties are uses when we had like to store class level data, also not bound to an instancel
//
//
//
//
//class Myclass{
//	static property = "";
//	static emethod(){};
//
//}
//
//
//technically static declaration is the same as assigning to the class itself;
//
//
//myclass.property = "";
//myclass.method = "";
//
//
//static properties and methods are inherited;
//
//
//for class B extends A the prototype of the class B itself point to A ;
//A.prototype = A ;
//so if  a field is not bound B , the search continues in A;
//


























