const express = require('express');
const bodyParser=require('body-parser');
const leadRouter = express.Router();
leadRouter.use(bodyParser.json());
leadRouter.route('/')
.all((req,res,next)=>{
	res.statusCode=200;
	res.setHeader('Content-Type','text/plain');
	next();
})
.get((req,res,next)=>{
	res.end('will send all the leader details to you');
})

.post((req,res,next)=>{
	res.end('will add the leader      '+ req.body.name+' with details      '+req.body.description);
})
.put((req,res,next)=>{
	res.statusCode=403;
	res.end('PUT operation is not supported on /leader');
})
.delete((req,res,next)=>{
	res.end('Deleting all the leaders');
});

leadRouter.route('/:leaderId')
.all((req,res,next)=>{
	res.statusCode=200;
	res.setHeader('Content-Type','text/plain');
	next();
})
.get((req,res,next)=>{
	res.end('will send all the leader to you'+req.params.leaderId);
})

.post((req,res,next)=>{

	res.statusCode=403;
	res.end('POST operation is not supported on /leader'+req.params.leaderId);
})
.put((req,res,next)=>{
		res.write('Updating the leader:'+req.params.leaderId+'\n');
		res.end('will update the leader     '+ req.body.name+' with details      '+req.body.description);
})
.delete((req,res,next)=>{
	res.end('Deleting all the leader'+req.params.leaderId);
})


module.exports=leadRouter;
