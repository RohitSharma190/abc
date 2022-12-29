const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/hello.html'))
})

app.listen(port,()=>{
    console.log('App is running on port 3000')
})