import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface IAboutProps {
}

const About: React.FunctionComponent<IAboutProps> = (props) => {

    const [mes, setMes] = useState('');
    const { number } = useParams();

    useEffect(() => {

        if (number) {
            setMes('the number is ' + number);
        }
        else {
            setMes('no number ');
        }
    }, [number]);

    return (
        <div>
            About
            <p>{mes}</p>
        </div>
    )

};

export default About;
