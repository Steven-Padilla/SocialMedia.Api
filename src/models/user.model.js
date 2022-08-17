import { DataTypes } from "sequelize";
import { sequelize } from "../db/connection.js";


export const User = sequelize.define('user', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    public_image_id: {
        type: DataTypes.STRING,
        allowNull: true

    },
    url_image: {
        type: DataTypes.STRING,
        allowNull: true

    }

})
