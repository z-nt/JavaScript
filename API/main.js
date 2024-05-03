const net = require("net");


/**
 * 
 * @param {Buffer} data 
 */
function http_parser(data) {
    let index = data.toString().indexOf("u=") + 2
    let uname = ""
    for (i=index;i<data.length;i++) {
        if (data.toString()[i] == " ") break;
        uname += data.toString()[i]
    }
    return uname
}

const server = new net.Server((sock)=>{
    sock.on("data",(data)=>{
        let username = http_parser(data)
        let body = {name:username}
        let size = JSON.stringify(body).length
        console.log(data.toString());
        sock.write(`HTTP/1.1 200 OK
Content-Type: Application/json
Accept: application/json, text/plain, */*
Connection: close
Content-Length: ${size}
Access-Control-Allow-Origin: *
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: en-US,en;q=0.9

${JSON.stringify(body)}`);
    })
})

server.listen(8080)