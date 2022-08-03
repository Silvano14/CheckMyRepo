import React from 'react';
import { paths } from '../../App';
import { fontFamily, fontSize, spaceAround } from './commonStyle';
import { NextButton } from './NextButton';

export const Informations = ({
    firstText = '',
    secondText = '',
    buttonText = 'CHECK',
    onClickButton = () => { },
    spaceFrame = false,
}) => {

    const commonStyleP = { opacity: 0.5, margin: 0, fontWeight: 500, ...fontFamily }
    const commonStyleDiv = {
        cursor: 'pointer',
        width: 'fit-content',
        display: 'flex',
        ...fontSize,
        ...fontFamily,
    }

    return (
        <div style={{ padding: spaceFrame ? spaceAround : '' }}>
            <h1 style={{
                fontSize: '30px',
                margin: 0,
                paddingTop: '30px',
                paddingBottom: '30px',
                fontWeight: 'bold',
                ...fontFamily
            }}>Set the repository address</h1>
            <p style={{ margin: 0, ...fontSize, ...fontFamily }}>github.com</p>
            <div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>

                    <div
                        style={commonStyleDiv}
                        to={`/${paths.user}`}
                    >
                        /
                        <p style={commonStyleP}>{firstText}</p>
                    </div>

                    <div
                        style={{ ...commonStyleDiv, paddingBottom: '20px' }}
                        to={`/${paths.repository}`}>
                        /
                        <p style={commonStyleP}>{secondText}</p>
                    </div>

                </div>
            </div>
            <NextButton
                onClick={onClickButton}
            >
                {buttonText}
            </NextButton>
        </div>
    )
}