import * as React from 'react';
import './style.css';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { setChangeEnWord, setChangeUaWord } from 'toolkitSlice/WordsSlice';

interface IPopupProps {
    content: string;
    handleChange: (en: string, ua: string) => void;
    handleClose: () => void;
}

const ChangePopup: React.FC<IPopupProps> = (props: IPopupProps) => {

    const { content, handleChange, handleClose } = props;

    const { ua, en } = useAppSelector(state => state.toolkit.changeWord);

    const dispatch = useAppDispatch();

    return (
        <div className='popup'>
            <div className='popup_open'>
                <button className='changeExit' onClick={() => handleClose()} >X</button>
                <div className='wrap'>
                    <h1 className='changeWord'>{content}</h1>
                    <div className='changeWrap'>

                        <input
                            className='inputChangeWord' type="text" placeholder='en word'
                            value={en}
                            onChange={e => dispatch(setChangeEnWord(e.target.value))}
                        />
                        <input className='inputChangeWord' type="text" placeholder='ua word'
                            value={ua}
                            onChange={e => dispatch(setChangeUaWord(e.target.value))} />

                        <button className='changeYes' onClick={() => handleChange(en, ua)} >SAVE </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChangePopup;

