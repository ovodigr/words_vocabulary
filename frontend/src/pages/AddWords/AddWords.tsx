import * as React from 'react';
import './style.css';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { setEnWord, setUaWord } from 'toolkitSlice/WordsSlice';
import { AddWord } from 'toolkitSlice/redusers/AddWord';
import { useFocus } from 'hooks/useFocus';

interface IAddWordsProps {
}

const AddWords: React.FunctionComponent<IAddWordsProps> = (props) => {

    const dispatch = useAppDispatch();

    const { ua, en, transcription, sound, date } = useAppSelector(state => state.toolkit.word);
    const { userData } = useAppSelector(state => state.toolkit);
    const [inputRef, setInputFocus] = useFocus();

    return (
        <div>
            <input className='inputWord' value={en} onChange={e => dispatch(setEnWord(e.target.value))} />

            <input className='inputWord' value={ua} onChange={e => dispatch(setUaWord(e.target.value))} />

            <button className='addWordButton' onClick={() => {

                dispatch(AddWord(en, ua, userData.id, transcription, sound, date)); setInputFocus();

            }}>addWord</button>
        </div>
    );
};

export default AddWords;
