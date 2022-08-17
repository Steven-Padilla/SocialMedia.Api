import express, { json, urlencoded } from 'express';
const app = express()
import cors from 'cors';
import router from './routes/user.routes.js'
import fileUpload from "express-fileUpload"


//middlewares 
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cors({
    origin: '*'
}))
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './tmp/'
}));

app.use('/api/v1', router)

export default app;



