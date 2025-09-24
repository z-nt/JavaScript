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


	 	

		

































