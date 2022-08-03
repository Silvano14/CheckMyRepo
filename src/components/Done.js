import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { DataStore, paths } from "../App"
import { NextButton } from "./shared/NextButton"

export const Done = () => {
    const navigate = useNavigate()
    const commonStyleTitle = { margin: 0, textAlign: 'center', fontSize: '45px' }
    const { user, repository } = useContext(DataStore)

    return <>
        <h1 style={{ ...commonStyleTitle, paddingTop: '100px' }}>All done!</h1>
        <h1 style={{ ...commonStyleTitle, }}>Repository sent.</h1>
        <NextButton onClick={() => {
            //Cleaning data after sending
            user.setUser('');
            repository.setRepository('');

            navigate(`../${paths.home}`, { replace: true });
        }}
        >
            COOL
        </NextButton>
    </>
}