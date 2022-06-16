import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { setEnWord, setUaWord } from 'toolkitSlice/WordsSlice';
import { AddWord } from 'toolkitSlice/redusers/AddWord';
import { useFocus } from 'hooks/useFocus';

interface IAddWordsProps {
}

const AddWords: React.FunctionComponent<IAddWordsProps> = (props) => {

    const dispatch = useAppDispatch();

    const { ua, en } = useAppSelector(state => state.toolkit.word);

    const [inputRef, setInputFocus] = useFocus();

    return (
        <div>
            <input value={en} ref={inputRef} onChange={e => dispatch(setEnWord(e.target.value))} />

            <input value={ua} onChange={e => dispatch(setUaWord(e.target.value))} />

            <button onClick={() => { dispatch(AddWord(en, ua)); setInputFocus() }}>addWord</button>
        </div>
    );
};

export default AddWords;
