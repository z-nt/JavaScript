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



			asunchronous PROGRAMMING IN JS 






































