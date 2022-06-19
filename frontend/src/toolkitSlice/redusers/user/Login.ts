import { AppDispatch } from "../../index"
import axios from "api/axios";
import { ILogin } from "models/IUser";
import { logining, loginSuccess, loginError } from "../../WordsSlice";
import { LOGIN } from 'config';

export const login = (
    username: string,
    login: string,

) => async (dispatch: AppDispatch) => {
    try {
        dispatch(logining());

        const timeElapsed: number = Date.now();
        const date: Date = new Date(timeElapsed);
        date.toISOString();

        let res = await axios.post<ILogin[]>(LOGIN.CREATE_USER,
            {
                username: username,
                login: login,
                date: date,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });

        console.log(res);

        // let name: string = '';
        // if (res.data.user.displayName != null) {
        //     name = res.data.user.displayName;
        // }
        // else if (res.data.user.username !== undefined)
        //     name = res.data.user.username;


        // let person: IPerson = {
        //     id: res.data.user.id,
        //     username: name,
        //     photo: res.data.user.photos[0].value,
        // };

        // dispatch(loginSuccess(person));
    } catch (e: any) {
        dispatch(loginError(e.message));
    }
}


