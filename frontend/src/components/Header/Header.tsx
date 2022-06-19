
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { avatar, header } from 'config'
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { GetUser } from 'toolkitSlice/redusers/user/GetUser';
import { social_img, PASSPORT } from 'config'
interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(GetUser());
    }, [])

    const logout = () => {
        window.open(PASSPORT.LOGOUT, '_self')
    }
    const { userData } = useAppSelector(state => state.toolkit)

    return (
        <div className="Header">
            <ul className='menu'>

                <li className='listItem'>
                    <NavLink to="/words/">
                        <img className='headerImg' src={header.img} alt="" />
                    </NavLink>
                </li>

                <li className='listItem'>
                    <NavLink to="/words/card_words">
                        <img className='headerImg' src={header.word} alt="" />
                    </NavLink>
                </li>
            </ul>

            <ul className='list'>
                <li className='listItem'>
                    <img className='avatar' src={userData.photo !== "" ? userData.photo : avatar.img} alt="" />
                </li>
                <li className='listItem'>
                    <span>{userData.username}</span>
                </li>
                <li className='listItem'>

                    {userData.id !== ''
                        ?
                        <img className='headerImg' onClick={logout} src={header.logout} alt="" />
                        :
                        <NavLink to="/words/login">
                            <img className='headerImg' src={header.login} alt="" />
                        </NavLink>
                    }


                </li>
            </ul>
        </div >
    );
};

export default Header;
