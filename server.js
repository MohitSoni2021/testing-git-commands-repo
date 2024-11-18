import express from 'express';
const app = express();

app.get('/', (req, res)=>{
	res.send("This is the home page of this site");
})


app.listen(3000, ()=>{
	console.log("The server is working on port 3000");
})
