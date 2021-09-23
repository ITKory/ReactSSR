import express from 'express'
const PORT  =  4200
import path from 'path'

const __dirname = path.resolve()
const app = express()

app.get('/',(req,res)=>{

//res.send('<h1>Hello express!!!</h1>')
res.sendFile(path.resolve(__dirname,'dist','index.html'))
console.log(__dirname);

})

app.listen(PORT,()=>{
    console.log(`server has been started on port ${PORT}...`)
    console.log(`http://localhost:4200`)
})