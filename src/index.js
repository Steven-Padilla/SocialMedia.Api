import app from "./app.js";
import 'dotenv/config';
import './models/user.model.js';
import { sequelize } from "./db/connection.js";

// port 
const port = 1709;

const main = async () => {

    try {

        await sequelize.sync();
        app.listen(process.env.port ||port , () => {
            console.log('Server running on port ', port)
        })

    } catch (error) {
        console.log(error)
    }

}

main();


