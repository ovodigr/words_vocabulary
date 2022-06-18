import * as React from 'react';
import './style.css'
import { useGetAll } from 'hooks/useCardWords';
import { useAppDispatch } from 'hooks/redux';
import { setEditWordStatus } from 'toolkitSlice/WordsSlice'
import AddWords from 'pages/AddWords/AddWords';

interface IWordsProps {
}

const CardWords: React.FunctionComponent<IWordsProps> = (props) => {

    const [canEditWord, idRef, list, getAll] = useGetAll();

    const dispatch = useAppDispatch();

    return (
        <div className='CardWords'>
            <button onClick={getAll}>Get All</button>
            <input type="checkbox" checked={canEditWord} onChange={() => dispatch(setEditWordStatus(!canEditWord))} />
            <span>Редагувати</span>
            <AddWords />
            <div className='container'>
                {list}
            </div>

        </div>
    );
};
export default CardWords;

