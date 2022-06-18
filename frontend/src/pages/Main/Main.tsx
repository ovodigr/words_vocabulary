import * as React from 'react';
import './style.css';

interface IMainProps {
}

const Main: React.FunctionComponent<IMainProps> = (props) => {

    return (
        <div>
            <p className='welcome'>Welcome! on this site you can add new words </p>
        </div>
    );
};

export default Main;
