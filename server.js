const express = require('express')
const app = express()
const PORT = 8000

const breeds = {
    'maltipoo': {
        'origin': 'United States',
        'size': 'Toy',
        'hypoAllergenic': 'yes'
    }, 
    'golden retriever': {
        'origin': 'Scotland',
        'size': 'Medium',
        'hypoAllergenic': 'no'
    }, 
    'cavapoo': {
        'origin': 'Australia',
        'size': 'Small',
        'hypoAllergenic': 'yes'
    }, 
    'unknown': {
        'origin': 'unknown',
        'size': 'unknown',
        'hypoAllergenic': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:breed',(request,response) => {
    const breed = request.params.breed.toLowerCase()
    if(breeds[breed]){
        response.json(breeds[breed])
    }else{
        response.json(breeds['unknown'])
    }
    
})
app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}!`)
})