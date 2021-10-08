import express from 'express'
const PORT  =  4200
import path from 'path'

const __dirname = path.resolve()
const app = express()
app.use(express.static("dist"));
app.listen(PORT,()=>{
    console.log(`server has been started on port ${PORT}...`)
    console.log(`http://localhost:4200`)
})