import React from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../App';
import { fontFamily, spaceAround } from '../shared/commonStyle';
import { Informations } from '../shared/Informations';

export const BadConnection = () => {
    const navigate = useNavigate()

    return (
        <div style={{ height: '100%', padding: spaceAround, backgroundColor: 'pink' }}>
            <Informations
                firstText='rightUser'
                secondText='rightRepo'
                onClickButton={() => navigate(`../${paths.home}`, { replace: true })}
            />
            <label style={{ fontSize: '25px', ...fontFamily }}>Check your
                <strong> internet connection</strong>
            </label>
        </div>
    )
}