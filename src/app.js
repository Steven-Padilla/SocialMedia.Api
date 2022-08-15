import express, { json, urlencoded } from 'express';
const app = express()
import cors from 'cors';
import router from './routes/user.routes.js'


//middlewares 
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cors({
    origin: 'localhost'
}))

app.use('/api/v1', router)

export default app;



