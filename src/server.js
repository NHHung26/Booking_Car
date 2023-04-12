const express = require('express');
const { engine } = require('express-handlebars');   

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.static('./src/public'))
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');


app.get('/', (req, res) => {
    res.render('index',{layout: false});
});


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});