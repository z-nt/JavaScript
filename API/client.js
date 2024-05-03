const net = require("net");

const sock = new net.Socket()

sock.connect(8080,"0.0.0.0",()=>{
    console.log("connected")
    sock.write("uname=mamad&upass=1234")
})
sock.on("data",(data)=>{
    console.log(data.toString());
})
sock.on("error",(err)=>{
    console.log(err);
})