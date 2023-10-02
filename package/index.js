async function chillFetch(url,method,headers,body){
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