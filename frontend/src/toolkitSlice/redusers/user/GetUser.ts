import { AppDispatch } from "../../index"
import axios from "api/axios";
import { IPerson, IUserData } from "models/IUser";
import { getUserData, getUserSuccess, getUserError } from "../../WordsSlice";
import { PASSPORT } from 'config';

export const GetUser = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(getUserData());

        let res = await axios.get<IUserData>(PASSPORT.LOGIN_SUCCESS, {
            // withCredentials: true,
            headers:
            {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true,
            }
        });

        let name: string = '';
        if (res.data.user.displayName != null) {
            name = res.data.user.displayName;
        }
        else if (res.data.user.username !== undefined)
            name = res.data.user.username;


        let person: IPerson = {
            id: res.data.user.id,
            username: name,
            photo: res.data.user.photos[0].value,
        };

        console.log(person);

        dispatch(getUserSuccess(person));
    } catch (e: any) {
        dispatch(getUserError(e.message));
    }
}


