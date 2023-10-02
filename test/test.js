const chillFetch=require('chill-fetch')

//test for GET request
chillFetch('https://fakestoreapi.com/products/',"GET")

//test for POST request
chillFetch('https://fakestoreapi.com/carts/',"POST",{"Content-Type":"application/json"}, {
    userId:5,
    date:"2020-02-03",
    products:[{productId:5,quantity:1},{productId:1,quantity:5}]
})

//test for PUT request
chillFetch('https://fakestoreapi.com/products/7',"PUT",{"Content-Type":"application/json"},{
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
})

//test for DELETE request
chillFetch('https://fakestoreapi.com/products/6',"DELETE")

// test for no parameters
chillFetch()

//test for invalid method parameter
chillFetch('https://fakestoreapi.com/products/6',"DEL")

//test for no request body in POST or PUT request
chillFetch('https://fakestoreapi.com/products/7',"PUT")