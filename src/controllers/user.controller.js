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
            where: { username },
            defaults: {
                username,
                email,
                password,
                lastname
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