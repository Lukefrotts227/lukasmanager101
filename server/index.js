const express = require('express'); 


const app = express(); 

const port = process.env.PORT || 5000




app.use(express.json()); 

app.get('/', (req, res) => {
    res.json({ message: "hello there"})
}); 

app.get('/api/hello', (req, res) =>{
    res.json({ message: "hello from express"})
}); 




app.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
});