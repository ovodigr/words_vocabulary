import { fetchWords } from 'toolkitSlice/redusers/FetchWords';
import { DeleteWord } from 'toolkitSlice/redusers/DeleteWord';
import { useAppDispatch, useAppSelector } from "./redux";
import Word from 'components/Word/Word';
import { useEffect, useRef } from 'react';

export const useGetAll = (): [boolean, any, JSX.Element[], () => void, (id: string) => void] => {

    const getAll = async () => {
        await dispatch(fetchWords());
    }

    const deleteWord = async (id: string) => {

        await dispatch(DeleteWord(id));

        getAll();
    }

    const dispatch = useAppDispatch();

    let { ArrWords } = useAppSelector(state => state.toolkit);

    //let arr = ArrWords.reverse();

    let list = ArrWords.map(item => {

        return <Word
            key={item._id}
            id={item._id}
            uaWord={item.ua}
            enWord={item.en}
        />
    })

    let idRef = useRef<HTMLElement>(null);

    useEffect(() => {
        idRef.current?.focus();
    }, []);

    const { canEditWord } = useAppSelector(state => state.toolkit)

    return [canEditWord, idRef, list, getAll, deleteWord];
};








