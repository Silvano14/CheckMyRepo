import React from 'react';
import { useNavigate } from "react-router-dom";
import { paths } from '../App';
import { fontFamily } from './shared/commonStyle';
import { NextButton } from './shared/NextButton';

export const Home = () => {

    const commonStyleP = { opacity: 0.5, margin: 0 }
    const commonStyleDiv = { display: 'flex', fontSize: '40px' }
    const navigator = useNavigate()

    return (
        <>
            <h1 style={{ fontSize: '20px' }}>Set the repository address</h1>
            <p style={{ margin: 0, fontSize: '40px', ...fontFamily }}>github.com</p>
            <div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>

                    <div
                        style={commonStyleDiv}
                        onClick={() => navigator(paths.user)}
                        to={`/${paths.user}`}
                    >
                        /
                        <p style={commonStyleP}>user</p>
                    </div>

                    <div
                        style={commonStyleDiv}
                        onClick={() => navigator(paths.repository)}
                        to={`/${paths.repository}`}>
                        /
                        <p style={commonStyleP}>repository</p>
                    </div>

                </div>
            </div>
            <NextButton>CHECK</NextButton>

        </>
    )
}