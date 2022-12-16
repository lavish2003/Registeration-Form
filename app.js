import express from 'express'
import mongoose from 'mongoose'
import web from './routes/web.js'
const app=express()
const port=process.env.PORT || '5000'
mongoose.connect('mongodb+srv://b_lavish1:Chintubansal@cluster0.gshyu3i.mongodb.net/test')
    .then(console.log('Connection Successful!'))
    .catch(err => console.log(err))
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use('/',web)
app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`);
})
export default app;