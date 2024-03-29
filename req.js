
const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });



instance.get("/kian").then((ali)=>{
    console.log(ali.data);
});


