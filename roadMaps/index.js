

//keyed collection    


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


/*weakmap*/

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



const mySet = new Set();

	mySet.add(1);
	mySet.add("someText");
	mySet.add("foo");


	let hasIt = mySet.has(1);
	let setSize = mySet.size;
	console.log(`${setSize}`);
	mySet.delete("foo");
	let setSize2 = mySet.size;
	console.log(`${setSize2}`);

	for (const item of mySet){
		console.log(`item is : ${item}`)

	}

























