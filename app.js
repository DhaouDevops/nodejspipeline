const express=require('express');

const port=3000
const app=express();

app.get('/',(req,res)=>{
    res.send('Hello  world!! this is running')
})

app.listen(port,()=>{
    console.log(`App listening at port:${port}`)
})