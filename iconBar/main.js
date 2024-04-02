var iconBar , iconBtn


iconBtn = document.getElementById("menu-btn");
var barsElement , activeElement;

const WIDTH = 50;
activeElement = document.querySelector(".active");
barsElement = document.querySelectorAll(".bar-item");

iconBtn.addEventListener("click",()=>{
    iconBar = document.getElementById("menu-bar");
    var iconWidth =iconBar.clientWidth;
    
    if(iconWidth > 50){
        iconBar.style.width = 50 + "px";        
        barsElement.forEach(bar=>{
        bar.style.display = "none";
        activeElement.style.display = "inline-block";

        })
    }else{
        iconBar.style.width = 300 + "px";
        barsElement.forEach(bar=>{
            bar.style.display = "flex";
        })
    }
    function changeItem(x){
        x.classList.toggle("change");
    }
    changeItem(iconBtn)
})


const barsLink = document.querySelectorAll(".bar-link")
const barsLinkElemetn = document.querySelectorAll(".bars-link-element")
const height = 0;
const plusHeight = 144;
barsLink.forEach(bar =>{
    bar.addEventListener("click",()=>{
        let dropmenu = bar.childNodes[3]
        if(dropmenu.clientHeight == height){
                dropmenu.style.height = plusHeight  + "px";
                dropmenu.innerHTML= `
                <li class="drowpdown-item bars-link-element ">
                     send
                </li>
                 <li class="drowpdown-item bars-link-element">
                        send
                 </li>
                 <li class="drowpdown-item bars-link-element">
                send
                    </li>
                `
            }else{
                dropmenu.style.height = height  + "px";
                dropmenu.innerHTML= ``
            }
    })
})





