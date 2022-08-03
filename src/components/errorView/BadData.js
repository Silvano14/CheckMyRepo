import React from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../App';
import { fontFamily, spaceAround } from '../shared/commonStyle';
import { Informations } from '../shared/Informations';

export const BadData = () => {
    const navigate = useNavigate()

    const labelStyle = { fontSize: '25px', ...fontFamily };
    return (
        <div style={{ height: '100%', padding: spaceAround, backgroundColor: '#fca9b7' }}>
            <Informations
                firstText='badUser'
                secondText='orBadRepo'
                onClickButton={() => navigate(`../${paths.home}`, { replace: true })}
            />
            <label style={labelStyle}>
                Check your <strong>username</strong> <br /> or your <strong>repository</strong> name
            </label>
        </div >
    )
}