
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { avatar, header } from 'config'
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { GetUser } from 'toolkitSlice/redusers/user/GetUser';
import { getUserData } from 'toolkitSlice/WordsSlice';
interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {

    let login = false;

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(GetUser());

    }, [])

    const { userData } = useAppSelector(state => state.toolkit)

    return (
        <div className="Header">
            <ul className='menu'>

                <li className='listItem'>
                    <NavLink to="/">
                        <img className='headerImg' src={header.img} alt="" />
                    </NavLink>
                </li>

                <li className='listItem'>
                    <NavLink to="/card_words">
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
                    <NavLink to="/login">
                        {login
                            ?
                            <img className='headerImg' src={header.logout} alt="" />
                            :
                            <img className='headerImg' src={header.login} alt="" />}
                    </NavLink>
                </li>


            </ul>

        </div >
    );
};

export default Header;
