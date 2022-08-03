import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataStore, paths } from '../App';
import { spaceAround } from './shared/commonStyle';
import { Informations } from './shared/Informations';

export const Sender = () => {
    const navigate = useNavigate()
    const { user, repository } = useContext(DataStore)

    return (
        <div style={{ height: '100%', padding: spaceAround, backgroundColor: '#b3f9a9' }}>
            <Informations
                firstText='rightUser'
                secondText='rightRepo'
                buttonText='SEND'
                onClickButton={() => sendData(
                    navigate,
                    `repoUrl: https://github.com/${user.value}/${repository.value}, sender: ${user.value}`
                )}
            />
        </div>
    )
}

const config = {
    url: 'https://pushmore.io/webhook/TkF1Y6Am5zz4vt3kVmwpxHjN',
    method: "post",
};


const sendData = (
    navigate,
    data = "repoUrl: 'https://github.com/Silvano14/CheckMyRepo', sender: 'Silvano14'",
) =>
    axios({ ...config, data })
        .then((result) => {
            // You can get fake response, just to be sure I check the body
            if (result.data !== 'OK')
                navigate(`../${paths.badConnection}`, { replace: true })
            else
                navigate(`../${paths.done}`, { replace: true })
        })
        .catch(() => navigate(`../${paths.badConnection}`, { replace: true }))