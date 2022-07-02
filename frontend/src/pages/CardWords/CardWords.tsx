import * as React from 'react';
import './style.css'
import { useGetAll } from 'hooks/useCardWords';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { setEditWordStatus, showChangeWordPopup, showDeleteWordPopup } from 'toolkitSlice/WordsSlice'
import AddWords from 'pages/AddWords/AddWords';
import DeletePopup from 'components/DeletePopup/DeletePopup';
import ChangePopup from 'components/ChangePopup/ChangePopup';
import { DeleteWord } from 'toolkitSlice/redusers/DeleteWord';
import { IChangeWord, IDeleteWord } from 'models/Iword';
import { ChangeWord } from 'toolkitSlice/redusers/ChangeWord';

interface IWordsProps {
}

const CardWords: React.FunctionComponent<IWordsProps> = (props) => {

    const [canEditWord, idRef, list, getAll] = useGetAll();

    const { arrDeleteWord, arrChangeWord } = useAppSelector(state => state.toolkit);

    const dispatch = useAppDispatch();

    let wordDelete: IDeleteWord = {
        showDeleteWordPopup: false,
        id: '',
        userId: '',
    }

    let wordChange: IChangeWord = {
        showChangeWordPopup: false,
        id: '',
        ua: '',
        en: '',
        userId: '',
    }

    const toggleDeletePopup = (): void => {

        //only change state for hide popup
        dispatch(showDeleteWordPopup(wordDelete))
    }

    const deleteWord = (): void => {
        dispatch(DeleteWord(arrDeleteWord.userId, arrDeleteWord.id));
        toggleDeletePopup();
    }

    const toggleChangePopup = (): void => {

        //only change state for hide popup
        dispatch(showChangeWordPopup(wordChange))
    }

    let { id, en, ua, userId } = arrChangeWord;

    const changeWord = (en: string, ua: string): void => {
        dispatch(ChangeWord(en, ua, id, userId, '', '', ''));
        toggleChangePopup();
    }

    return (
        <div className='CardWords'>

            <div className='getWordsFields'>
                <button onClick={getAll}>Get All</button>
                <input type="checkbox" checked={canEditWord} onChange={() => dispatch(setEditWordStatus(!canEditWord))} />
                <span>Редагувати</span>
                <AddWords />
            </div>

            <div className='container'>
                {list}
            </div>
            {
                arrDeleteWord.showDeleteWordPopup &&

                <DeletePopup
                    content={'Delete?'}
                    handleClose={toggleDeletePopup}
                    handleDelete={deleteWord}
                />
            }
            {
                arrChangeWord.showChangeWordPopup &&

                <ChangePopup
                    content={'Change word'}
                    handleClose={toggleChangePopup}
                    handleChange={changeWord}
                />
            }
        </div>
    );
};
export default CardWords;

