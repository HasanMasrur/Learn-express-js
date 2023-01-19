const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
 app.use(cookieParser());

const adminRoute = express.Router();

const loggout = (req,res,next)=>{
    console.log('working.....');
    throw new Error('This ia an Error');
}


const logFluction=(options)=>
    function(req,res,next){
if(options.log){
console.log('deshboard');
next();
}else{
    throw new Error('This is error');

}
    };



adminRoute.use(logFluction({log:true}));

adminRoute.get('/deshboard/',(req,res)=>{
    res.send('deshboard');
})
const errorMiddleWire = (err,req,res,next)=>{
    console.log(err.message);

    res.status(500).send('There was a server side error');
}
adminRoute.use(errorMiddleWire);

app.use('/admin',adminRoute);

app.get('/about',(req,res)=>{
res.send('about');
});

app.listen(3038 ,()=>{
console.log('server start :3036');
})