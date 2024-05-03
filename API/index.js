console.log("asdasd");
axios.get("http://localhost:8080",{ params: { u: "mamad" } }).then((response)=>{
    console.log(response)
    document.getElementById("1").innerHTML = response.data.name
}).catch((err)=>{
    console.log(err);
}) 