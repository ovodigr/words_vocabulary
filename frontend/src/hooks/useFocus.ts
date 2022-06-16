import { useRef } from "react"


interface RefObject<T> {
    readonly current: T | null
}

// type UseHoverType<T extends HTMLElement> = [React.RefObject<T>, () => void];


export const useFocus = (): [any, () => void] => {

    const htmlElRef = useRef<HTMLElement>()
    const setFocus = () => { htmlElRef.current && htmlElRef.current?.focus() }

    return [htmlElRef, setFocus]
}