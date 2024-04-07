fetch("./users.json")
.then(res=>{
    return res.json();
})
.then(post=>{
    console.log(post);
})