import React, { useMemo } from 'react';
import './Input.css'

export const Input = ({
    placeholderInput = 'Type a value',
    onChange = () => { },
    value = '',
}) => {
    const _value = useMemo(() => value, [value])

    return (
        <div className='input-container' style={{ paddingLeft: '5px', paddingRight: '5px' }}>
            <input
                style={{ width: '100%', outline: 0, border: 0, borderBottom: '3px solid black' }}
                value={_value}
                autoFocus
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholderInput}
            />
        </div>
    )
}