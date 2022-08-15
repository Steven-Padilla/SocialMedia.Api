import app from "./app.js";
import 'dotenv/config';
import './models/user.model.js';
import { sequelize } from "./db/connection.js";

// port 
const port = Number(process.env.APP_PORT);

const main = async () => {

    try {

        await sequelize.sync();
        app.listen(port, () => {
            console.log('Server running on port ', port)
        })

    } catch (error) {

    }

}

main();


