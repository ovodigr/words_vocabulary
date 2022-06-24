import * as React from 'react';
import { social_img, PASSPORT } from 'config'
import './style.css';
import { useAppDispatch } from 'hooks/redux';

import { login } from 'toolkitSlice/redusers/user/Login';
interface ILoginProps {
}

const Login: React.FunctionComponent<ILoginProps> = (props) => {

    const google = () => {
        window.open(PASSPORT.URl + PASSPORT.GOOGLE, '_self')
    }

    const github = () => {
        window.open(PASSPORT.URl + PASSPORT.GITHUB, '_self')
    }

    // const facebook = () => {
    //     window.open(PASSPORT.URl + PASSPORT.FACEBOOK, '_self')
    // }

    // const twitter = () => {
    //     window.open(PASSPORT.URl + PASSPORT.TWITTER, '_self')
    // }

    const dispatch = useAppDispatch();

    const log = () => {
        dispatch(login('2', '3'));
    }

    return (
        <div className='login' >
            <h1 className='loginTitle'>Choose a Login Method</h1>
            <div className='wrapper'>
                <div className='left'>
                    <div className='loginButton google' onClick={google} >
                        <img src={social_img.google} className='icon' alt="Google" />
                        Google
                    </div>
                    {/* <div className='loginButton facebook' onClick={facebook}>
                        <img src={social_img.facebook} className='icon' alt="Facebook" />
                        Facebook
                    </div> */}
                    <div className='loginButton github' onClick={github} >
                        <img src={social_img.github} className='icon' alt="Github" />
                        Github
                    </div>
                    {/* <div className='loginButton twitter' onClick={twitter}>
                        <img src={social_img.twitter} className='icon' alt="Twitter" />
                        Twitter
                    </div> */}
                </div>
                <div className='center'>
                    <div className='line'></div>
                    <div className='or'>OR</div>

                </div>
                <div className='right'>
                    <input className='inputLogin' type="text" placeholder='Username' />
                    <input className='inputLogin' type="text" placeholder='Password' />
                    <button className='submit' onClick={log}>Login</button>
                </div>
            </div>
        </div >
    );
};

export default Login;


