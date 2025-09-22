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




const mySet = new Set();

	mySet.add(1);
	mySet.add("someText");
	mySet.add("foo");


	let hasIt = mySet.has(1);
	let setSize = mySet.size;
	console.log(`${setSize}`);
//	mySet.delete("foo");
	let setSize2 = mySet.size;
	console.log(`${setSize2}`);

	for (const item of mySet){
		console.log(`item is : ${item}`)

	}

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
	console.log(typeof result);






















































