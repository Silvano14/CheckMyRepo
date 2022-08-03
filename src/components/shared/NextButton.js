import { fontFamily, spaceAround } from "./commonStyle"

export const NextButton = ({ children, onClick = () => { } }) =>
    <button
        onClick={onClick}
        style={{
            position: 'fixed',
            bottom: spaceAround,
            right: spaceAround,
            cursor: 'pointer',
            fontWeight: 900,
            fontSize: '20px',
            border: 0,
            fontFamily,
            backgroundColor: 'transparent',
        }}
    >
        {children}
    </button>
