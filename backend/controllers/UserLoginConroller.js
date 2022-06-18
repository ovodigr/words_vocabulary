import UserLogin from "../services/UserLogin.js";
// import { tryCatchMiddleware } from "../middleware/tryCatchMiddleware.js";

class UserLoginConroller {

    async create(req, res) {
        try {
            const { username, login, date } = req.body;

            console.log(req.body);

            const user = await UserLogin.create(
                {
                    username,
                    login,
                    date,
                });

            return res.json(user);

        } catch (error) {
            res.status(500);
        }
    }
}


export default new UserLoginConroller();