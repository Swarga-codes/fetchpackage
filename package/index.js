let data;
async function easyFetch(url,method,headers,body){
    const methods=["GET","PUT","POST","DELETE","PATCH"]
if(!url || !method){
    return "Url or method parameter is missing";
}
if(!methods.includes(method)){
    return "Invalid method";
}
if((method==="PUT" || method=="POST" || method=="PATCH") && !body){
    return "This type of method requires a body";
}
try{
const response=await fetch(url,{
    method:method,
    headers:headers?headers:undefined,
    body:body?JSON.stringify(body):undefined
})
if(!response.ok){
    return "Network response was not ok";
}
return response.json()
}
catch(err){
    return err;
}
}
data = await easyFetch('https://jsonplaceholder.typicode.com/todos', 'GET');
// console.log(easyFetch('https://jsonplaceholder.typicode.com/todos','GET'))
console.log(data)