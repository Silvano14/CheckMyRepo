import React from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../App';
import { fontFamily, spaceAround } from '../shared/commonStyle';
import { Informations } from '../shared/Informations';

export const BadData = () => {
    const navigate = useNavigate()

    return (
        <div style={{ height: '100%', padding: spaceAround, backgroundColor: 'pink' }}>
            <Informations
                firstText='badUser'
                secondText='orBadRepo'
                onClickButton={() => navigate(`../${paths.home}`, { replace: true })}
            />
            <label style={{ fontSize: '30px', ...fontFamily }}>Check your <strong>username</strong> or your <strong>repository</strong> name</label>
        </div>
    )
}