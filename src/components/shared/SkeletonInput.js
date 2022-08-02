import React, { useMemo } from 'react';

export const SkeletonInput = ({
    placeholderInput = 'Type a value',
    onChange = () => { },
    value = '',
}) => {
    const _value = useMemo(() => value, [value])

    return (
        <div style={{ paddingLeft: '5px', paddingRight: '5px' }}>
            <input
                style={{ width: '100%', outline: 0, border: 0, borderBottom: '3px solid black' }}
                value={_value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholderInput}
            />
        </div>
    )
}