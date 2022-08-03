import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataStore, paths } from '../App';
import { Header } from './Header';
import { checkData } from './shared/checkData';
import { spaceAround } from './shared/commonStyle';
import { Input } from './shared/Input';
import { NextButton } from './shared/NextButton';

export const Repository = () => {
    const { repository, user } = useContext(DataStore)
    const navigate = useNavigate()

    return (
        <div style={{ padding: spaceAround }}>
            <Header label={paths.repository.toUpperCase()} />
            <Input
                placeholderInput={'Type your repository name'}
                onChange={(val) => repository.setRepository(val)}
                value={repository.value}
            />
            <NextButton
                onClick={() => checkData(repository.value, navigate, user.value ? paths.sender : paths.user)}
            >
                DONE
            </NextButton>
        </div>
    )
}