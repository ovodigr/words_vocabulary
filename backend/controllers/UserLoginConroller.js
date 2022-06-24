import UserLogin from "../services/UserLogin.js";
import dotenv from 'dotenv';
import CryptoJS from "crypto-js";

dotenv.config();

const { REACT_APP_SOL } = process.env;

class UserLoginConroller {

    async create(req, res) {
        try {
            let { username, password, date } = req.body;

            console.log(req.body);

            if (username != undefined || password != undefined) {

                password = await CryptoJS.HmacSHA1(password, REACT_APP_SOL).toString();

                const user = await UserLogin.create(
                    {
                        username,
                        password,
                        date,
                    });

                console.log(user);

                return res.json(user);
            }
            else
                return res.json({ message: 'enter username and password' });

        } catch (error) {
            res.status(500);
        }
    }
}

export default new UserLoginConroller();