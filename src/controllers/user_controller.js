import { Usermodel } from "../model/users.js";

export const addUser = async (req, res) => {
    try {
        
    } catch (error) {
        const data = req.body
        console.log('data')
        res.send   ('hello')
        console.log(error)
    }
}