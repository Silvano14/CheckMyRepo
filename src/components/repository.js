import React from 'react';
import { paths } from '../App';
import { Header } from './Header';
import { SkeletonInput } from './shared/SkeletonInput';

export const Repository = () =>
    <>
        <Header label={paths.repository.toUpperCase()} />
        <SkeletonInput
            placeholderInput={'Type your github username'}
        />
    </>