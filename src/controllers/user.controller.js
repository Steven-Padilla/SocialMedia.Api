import { User } from "../models/user.model.js"


const getUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        return res.json(users)
    } catch (error) {
        res.status(500).json({ message: "Error adding data" })
    }

}

const createUser = async (req, res) => {
    const { username, email, password, lastname } = req.body

    try {
        const [user, created] = await User.findOrCreate({
            where:{username},
            defaults:{
                username,
                email,
                password,
                lastname
            }
        })

        if(created){
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

export {
    getUsers,
    createUser
}