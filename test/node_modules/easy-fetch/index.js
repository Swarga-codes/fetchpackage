async function chillFetch(url,method,headers,body){
    const methods=["GET","PUT","POST","DELETE","PATCH"]
if(!url || !method){
    console.log("Url or method parameter is missing");
    return;
}
if(!methods.includes(method)){
    console.log("Invalid method");
    return;
}
if((method==="PUT" || method=="POST" || method=="PATCH") && !body){
    console.log("This type of method requires a body");
    return;
}
let response=await fetch(url,{
    method:method,
    headers:headers?headers:undefined,
    body:body?JSON.stringify(body):undefined
})

let data=await response.json()
console.log(data)
return data
}


module.exports=chillFetch