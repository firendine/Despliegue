const express = require('express')
const app = express()
const port = 80
 


app.use(function(request, response, next) {
	next();
	response.contentType("text/html; charset='iso-8859-1'");
  });




app.get('/', (request, response) => {
	response.contentType("text/html")
	response.send('<html><body><h1>Hola</h1></body></html>')
  
})
app.use('/colegio', express.static(__dirname + '/static'));

app.use('/colegio/main.html', express.static(__dirname + '/static/46920.html'));

app.get('/colegio/main.html', (request, response) => {
	response.contentType("text/html")
	response.send('<html><body><h1>Main</h1></body></html>')
  
})
 
 
app.get('/colegio/list.xml', (request, response) => {
	response.contentType("text/xml")
	response.send('<colegios><colegio>Mislata</colegio><colegio>Ausias March</colegio><colegio>Abastos</colegio></colegios>')
  
})

app.get('/colegio/list.json', (request, response) => {
	response.contentType("application/json")
	response.send('{"Colegios":[{"Colegio":"Mislata"}, {"Colegio": "Ausias March},{"Colegio": "Abastos"}]}')
  
})

app.get('/colegio/list', (request, response) => {
	if(request.accepts("application/xml")){
		response.contentType("application/xml")
		response.send('<colegios><colegio>Mislata</colegio><colegio>Ausias March</colegio><colegio>Abastos</colegio></colegios>')

	}else if(request.accepts("application/json")){
		response.contentType("application/json")
		response.send('{"Colegios":[{"Colegio":"Mislata"}, {"Colegio": "Ausias MarchPPPPPP"},{"Colegio": "Abastos"}]}')
	
	}else{
		response.contentType("text/html")
		response.send('<html><body><p>Mislata</p><p>Ausias March</p><p>Abastos</p></body></html>')
	}
})


app.post('/colegio/list', (request, response) => {
	if(request.accepts("application/xml")){
		response.contentType("application/xml")
		response.send('<colegios><colegio>MislataPPPPPPP</colegio><colegio>Ausias MarchPPPPPPPPPPP</colegio><colegio>Abastos</colegio></colegios>')

	}else if(request.accepts("application/json")){
		response.contentType("application/json")
		response.send('{"Colegios":[{"Colegio":"MislataPPPPPPP"}, {"Colegio": "Ausias MarchPPPPPPPP"},{"Colegio": "Abastos"}]}')
	
	}else{
		response.contentType("text/html")
		response.send('<html><body><p>Mislata</p><p>Ausias MarchPPPPPPP</p><p>Abastos</p></body></html>')
	}
})


app.listen(port, (err) => {
  console.log(`server is listening on ${port}`)
})