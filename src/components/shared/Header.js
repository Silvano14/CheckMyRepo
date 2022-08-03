import React from 'react';
import BackArrow from '../../assets/backArrow.png'
import { useNavigate } from "react-router-dom";
import { paths } from '../../App';

export const Header = ({ label = '' }) => {
    const navigate = useNavigate()

    return (
        <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '30px' }}>
            <img
                width={'13px'}
                height={'13px'}
                onClick={() => navigate(`../${paths.home}`, { replace: true })}
                style={{ paddingRight: '20px', cursor: 'pointer' }}
                src={BackArrow}
                alt="back"
            />
            <label style={{ fontWeight: 'bold', fontSize: '30px' }}>{label}</label>
        </div>
    )
}