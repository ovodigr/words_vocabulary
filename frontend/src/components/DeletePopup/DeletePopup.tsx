import * as React from 'react';
import './style.css';


interface IPopupProps {
    content: string;
    handleDelete: () => void;
    handleClose: () => void;
}

const Popup: React.FC<IPopupProps> = (props: IPopupProps) => {

    const { content, handleDelete, handleClose } = props;

    return (
        <div className='popup'>
            <div className='popup_open'>

                <button className='deleteExit' onClick={() => handleClose()} >X</button>

                <div className='wrap'>
                    <h1 className='deleteWord'>{content}</h1>

                    <div className='deleteWrap'>
                        <button className='deleteYes' onClick={() => handleDelete()} >YES </button>
                        <button className='deleteNo' onClick={() => handleClose()}>NO </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Popup;

