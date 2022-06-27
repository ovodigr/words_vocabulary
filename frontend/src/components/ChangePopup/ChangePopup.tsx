import * as React from 'react';
import './style.css';


interface IPopupProps {
    content: string;
    handleChange: () => void;
    handleClose: () => void;
}

const ChangePopup: React.FC<IPopupProps> = (props: IPopupProps) => {

    const { content, handleChange, handleClose } = props;

    return (
        <div className='popup'>
            <div className='popup_open'>

                <button className='changeExit' onClick={() => handleClose()} >X</button>

                <div className='wrap'>
                    <h1 className='changeWord'>{content}</h1>

                    <div className='changeWrap'>
                        <button className='changeYes' onClick={() => handleChange()} >SAVE </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChangePopup;

