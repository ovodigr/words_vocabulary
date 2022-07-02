
import * as React from 'react';
import { useState } from 'react';
import { IMG } from 'config'
import './style.css';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { DeleteWord } from 'toolkitSlice/redusers/DeleteWord';
import { showChangeWordPopup, showDeleteWordPopup } from 'toolkitSlice/WordsSlice';
import { IChangeWord, IDeleteWord } from 'models/Iword';

interface IWordProps {
    uaWord: string;
    enWord: string;
    id: string;
}

const Word: React.FunctionComponent<IWordProps> = ({ uaWord, enWord, id }) => {

    const [canRotate, changeRotate] = useState(true);

    const { canEditWord, userData } = useAppSelector(state => state.toolkit)

    const dispatch = useAppDispatch();

    const style = {
        transform: canRotate ? 'rotateY(0deg)' : 'rotateY(360deg)',
        transition: 'transform 150ms ease', // smooth transition
    }



    let DeleteWord: IDeleteWord = {
        showDeleteWordPopup: true,
        id: id,
        userId: userData.id,
    }

    let ChangeWord: IChangeWord = {
        showChangeWordPopup: true,
        id: id,
        ua: uaWord,
        en: enWord,
        userId: userData.id,
    }

    return (
        <div className='Word-block'>

            <div className='Word'
                style={style}
                onClick={() => changeRotate(!canRotate)}
            >
                {canRotate ? enWord : uaWord}
            </div>

            <div className='changeWord-block'>

                {canEditWord && (
                    <div className={id}>
                        <img className='editWord ' src={IMG.EDIT_WORD} alt="" onClick={() => dispatch(showChangeWordPopup(ChangeWord))} />
                        <img className='deleteWord ' src={IMG.DELETE_WORD} alt="" onClick={() => dispatch(showDeleteWordPopup(DeleteWord))} />
                    </div>
                )}
            </div>
        </div >
    )
};

export default Word;
