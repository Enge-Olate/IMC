const frame_work = require('express');
const app = frame_work();
const body_parser=require('body-parser');
const caminho=require('path');

app.use(body_parser.json());
app.use(body_parser.urlencoded({
    extended:true
}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', caminho.join(__dirname, '/views'));
app.use('/imc/css', frame_work.static(caminho.join(__dirname, 'css')));

app.listen(5500);

app.get('/', (req, res)=>{
res.render('index');
});