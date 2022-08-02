import React, { useContext } from 'react';
import { DataStore, paths } from '../App';
import { Header } from './Header';
import { NextButton } from './shared/NextButton';
import { SkeletonInput } from './shared/SkeletonInput';

export const Repository = () => {
    const { repository } = useContext(DataStore)

    return <>
        <Header label={paths.repository.toUpperCase()} />
        <SkeletonInput
            placeholderInput={'Type your github username'}
            onChange={(val) => { repository.setRepository(val) }}
            value={repository.value}
        />
        <NextButton>DONE</NextButton>
    </>
}