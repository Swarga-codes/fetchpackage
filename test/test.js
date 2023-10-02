const chillFetch=require('chill-fetch')
chillFetch('https://fakestoreapi.com/products/7',"PUT",{"Content-Type":"application/json"},{
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
})