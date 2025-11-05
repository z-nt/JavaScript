const uploadbtn = document.getElementById("upload");
const img = document.getElementById("img");
const fileInput = document.getElementById("fileInput");

const removebtn = document.getElementById("remove");

const savedImageContainer = document.getElementById("saveimagecontainer");
const savebtn = document.getElementById("save");
const imageGrid = document.getElementById("imageGrid");

let currentImage= null;



uploadbtn.addEventListener("click",function(){
	fileInput.click();
});

fileInput.addEventListener("change",function(event){
	const file = event.target.files[0];

	if(file){
		const reader = new FileReader();
		reader.onload = function(e){
			img.src = e.target.result;
		        img.style.display = "block";
			currentImage = {
			   data:e.target.result,
			   name:file.name,
			   type:file.type
			};
		};
		
		reader.readAsDataURL(file);
	}else{
	alert("please select a valid image file");
	}
});


removebtn.addEventListener("click",function(){
	reasetUploader();
});


function reasetUploader(){

	fileInput.value = "" ;
	img.src = "" ;

}


savebtn.addEventListener("click",function(){

		console.log("hello")
	if(currentImage){
		savedImageToStorage(currentImage);
		loadSavedImages();
	}
});








function savedImageToStorage(image){
	
	const id = "img_" + Date.now();


	const savedImages = JSON.parse(localStorage.getItem("savedImages") || "[]" );


	savedImages.push({
	  id : id,
	  data:image.data,
	  name:image.name,
	  type:image.type,
	  date:new Date().toISOString()
	});


	localStorage.setItem("savedImages" , JSON.stringify(savedImages));


	alert("image saved successfully");
}


function loadSavedImages () {


	const savedImages = JSON.parse(localStorage.getItem("savedImages") || "[]" );


	imageGrid.innerHTML = "";

	if(savedImages.length > 0) {

		savedImages.forEach(image=>{
			const imageItem = document.createElement("div");
			imageItem.className="saved-image-item";

			imageItem.innerHTML = `
			   <img src="${image.data}" >
			   <button class="delete-btn" data-id = "${image.id}">x</button>
			`;


			imageGrid.appendChild(imageItem);

		});


		document.querySelectorAll(".delete-btn").forEach(button =>{
			button.addEventListener("click",function(){
				const id = this.getAttribute("data-id");
				deleteImage(id);
			});
		});
	}

}

function deleteImage(id){


	const savedImages = JSON.parse(localStorage.getItem("savedImages") || "[]");
	const updatedImages = savedImages.filter(image => image.id !==id);

	localStorage.setItem("savedImages",JSON.stringify(updatedImages));
	loadSavedImages();
}











