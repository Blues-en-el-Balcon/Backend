const express = require('express');


const app = express();

app.set('port', process.env.PORT || 4000);
app.set('view engine', 'ejs')


app.get('/', (req, res) =>{
	res.render('index')
});


app.listen(app.get('port'), () => {
	console.log(`The server is running in port ${app.get('port')}`);
});
