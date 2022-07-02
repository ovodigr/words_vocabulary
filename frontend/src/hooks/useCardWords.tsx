import { fetchWords } from 'toolkitSlice/redusers/FetchWords';
import { useAppDispatch, useAppSelector } from "./redux";
import Word from 'components/Word/Word';
import { useEffect, useRef } from 'react';

export const useGetAll = (): [boolean, any, JSX.Element[], () => void] => {

    const dispatch = useAppDispatch();

    let { ArrWords } = useAppSelector(state => state.toolkit);

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

    const { userData } = useAppSelector(state => state.toolkit)

    const getAll = async () => {

        await dispatch(fetchWords(userData.id));
    }

    const { canEditWord } = useAppSelector(state => state.toolkit)

    return [canEditWord, idRef, list, getAll];
};








