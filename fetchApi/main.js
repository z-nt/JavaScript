async function main(){
    const userName = document.getElementById("username").value;
    const para = document.getElementById("demo");
    const endPoint = "./users.json";
    
    fetch(endPoint)
    .then(res=>{
        return res.json();
    })

    .then(post=>{
        post.forEach(element => {
                if(userName == element.username){
                    para.innerHTML=`
                    <h4>Name:${element.fristname}   </h4>
                    <h4>LastName:${element.lastname}</h4>
                    <h4>gender:${element.gender}    </h4>
                    <h4>Email:${element.email}      </h4>
                      `;
                }else{
                    console.log("users not found");
                }
        });
    })

  

    .catch(err=>{
        console.log("faile");
    })
}
 
























// function getUsers(){
//         let users = "users.json";

//         fetch("./users.json",{
//             method:"POST",
            
//             body:JSON.stringify({
//                 titile:"username",
//                 body:"user",
//                 usersid:1
//             }),
//             headers:{
//                 "Content-Type":"application/json"
//             }
//         })
//         .then(res => {
//             return res.json();
//         })
//         .then(post=>{
//             console.log(post);
//         })
//         .catch(err =>{
//             console.log("faild");
//         })
// }
// function renderUsers(){
//     const users = getUsers();
//     console.log(users);
// }
// renderUsers();







// .then(req =>{
//     //     console.log(req.status);
//     //     console.log(req.statusText);
//     //     //console.log(req.arrayBuffer(req.formData));
//     //     //console.log(req.blob());
//     //     console.log(req.body);
//     //     console.log(req.bodyUsed);
//     //    // console.log(req.clone);
//     //    //console.log(req.formData());
//     //    console.log(req.headers);
//     //    //console.log(req.json);
//     //    console.log(req.ok);
//     //    console.log(req.redirected);
//     //    console.log(req.url);
//     //    console.log(req.type);
//     //   // console.log(req.text);
// })








// async function getUsers(){
//     let url = "./users.json";
//     try{
//         let res = await fetch(url);
//         return await res.json;

//     }catch(error){
//         console.log(error);
//     }
// }

// async function renderUsers(){
//     let users = await getUsers();
//     let html = ' ';

//         console.log(users);

//         users.for(user=>{
//             let htmlSegment = `<div class="user">
//                                      <img src="${user.profileURL}" >
//                                      <h2>${user.firstName} ${user.lastName}</h2>
//                                      <div class="email"><a href="email:${user.email}">${user.email}</a></div>
//                                  </div>`;
//             html+= htmlSegment;
//                                 })

//     // for (var user = 0 ; user < users.length; user++){
//     //         console.log("hi");
//     //         console.log(users[user]);
//     //         let htmlSegment = users[user];
//     //         htmlSegment =     `<div class="user">
//     //                                 <img src="${user.profileURL}" >
//     //                                 <h2>${user.firstName} ${user.lastName}</h2>
//     //                                 <div class="email"><a href="email:${user.email}">${user.email}</a></div>
//     //                             </div>`;        

//     //         html += htmlSegment;
//     //     }
//     // users.forEach(user => {
//     //     let htmlSegment = `<div class="user">
//     //                         <img src="${user.profileURL}" >
//     //                         <h2>${user.firstName} ${user.lastName}</h2>
//     //                         <div class="email"><a href="email:${user.email}">${user.email}</a></div>
//     //                     </div>`;


//     let root = document.getElementById("root");
//     root.innerHTML = html;
// }

// renderUsers();