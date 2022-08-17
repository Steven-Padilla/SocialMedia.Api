import { User } from "../models/user.model.js"
import { deleteFile, uploadFile } from '../db/cloudinary.js'
import fs from 'fs-extra'


const getUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'username', 'lastname', 'email', 'url_image', 'public_image_id']
        })
        return res.json(users)
    } catch (error) {
        res.status(500).json({ message: "Error getting data" })
    }

}

const createUser = async (req, res) => {
    const { username, email, password, lastname } = req.body
    const image = req.files?.image
    let imageID = "not id"
    let imageURL = "not url"




    try {
        if (image) {
            const imageRes = await uploadFile(image.tempFilePath)
            imageID = imageRes.public_id;
            imageURL = imageRes.secure_url;

        }

        await fs.unlink(image.tempFilePath)

        const [user, created] = await User.findOrCreate({
            where: { username },
            defaults: {
                username,
                email,
                password,
                lastname,
                public_image_id: imageID,
                url_image: imageURL
            }
        })

        if (created) {
            return res.status(201).json({
                message: "User added",
                status: 201,
                data: user,
                created
            })
        }

        return res.status(200).json({
            message: "User already exist",
            status: 201,
            created
        })
    } catch (error) {
        res.status(500).json({ message: "Error adding data" })
    }
}


const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { username, email, password, lastname } = req.body
        const target = await User.findByPk(id)


        username ? (target.username = username) : null
        email ? (target.email = email) : null
        password ? (target.password = password) : null
        lastname ? (target.lastname = lastname) : null

        const result = await target.save()

        res.json({
            message: "user updated",
            data: result
        })
    } catch (error) {
        res.status(500).json({ message: "Error updating data" })
    }
}


const deleteUser = async (req, res) => {
    const { id } = req.params

    try {
        const target = await User.findByPk(id);

        if (!target) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        const result = await deleteFile(target.public_image_id)
        console.log(result);
        const response = await target.destroy();

        console.log(response);

        res.json({
            message: "User deleted corretly"
        })
    } catch (error) {
        res.status(500).json({ message: error })
    }



}


const getSingleUSer = async (req, res) => {
    const { id } = req.params

    try {
        const user = await User.findByPk(id)
        user ?
            res.json({
                message: "User found",
                data: user
            })
            : res.status(404).json({
                message: "user not found"
            })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getSingleUSer
}