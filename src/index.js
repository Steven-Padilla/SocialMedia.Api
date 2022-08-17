import app from "./app.js";
import 'dotenv/config';
import './models/user.model.js';
import { sequelize } from "./db/connection.js";
import { APP_PORT } from './config.js'


const main = async () => {

    try {
        
        await sequelize.sync({alter:true});
        app.listen(process.env.PORT || APP_PORT, () => {
            console.log('Server running on port ', Number(APP_PORT))
        })

    } catch (error) {
        console.log(error)
    }

}

main();

