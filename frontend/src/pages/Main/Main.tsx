import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import ColorPicker from '../../components/ColorPicker';
import './style.css';

interface IMainProps {
}

const Main: React.FunctionComponent<IMainProps> = (props) => {

    const navigate = useNavigate();

    return (
        <div>
            <p className='welcome'>Welcome! on this site you can add new words </p>

            {/* <Link to="/about" > About </Link>
            <button onClick={() => navigate('layout/55')} >navigate</
            button>

            <ColorPicker /> */}
        </div>

    );
};

export default Main;
