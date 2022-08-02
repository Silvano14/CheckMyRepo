import { useState } from "react";
import React from 'react';

export const SkeletonInput = ({ placeholderInput = 'Type a value' }) => {

    const [inputValue, setinputValue] = useState('');

    return (
        <div style={{ paddingLeft: '5px', paddingRight: '5px'}}>
            <input
                style={{ width: '100%', outline: 0, border: 0, borderBottom: '3px solid black' }}
                value={inputValue}
                onChange={(e) => setinputValue(e.target.value)}
                placeholder={placeholderInput}
            ></input>
        </div>
    )
}