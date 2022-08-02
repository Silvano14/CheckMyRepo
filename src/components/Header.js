import React from 'react';
import BackArrow from '../assets/backArrow.png'
import { useNavigate } from "react-router-dom";
import { paths } from '../App';

export const Header = ({ label = '' }) => {
    const navigate = useNavigate()

    return (
        <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '30px' }}>
            <img width={'10px'} height={'10px'} onClick={() => navigate(paths.home)} style={{ paddingRight: '20px' }} src={BackArrow} alt="back" />
            <label style={{ fontWeight: 'bold' }}>{label}</label>
        </div>
    )
}