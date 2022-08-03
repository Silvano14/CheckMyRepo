import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { DataStore, paths } from "../App"
import { Header } from "./shared/Header"
import { checkData } from "./shared/checkData"
import { spaceAround } from "./shared/commonStyle"
import { Input } from "./shared/Input"
import { NextButton } from "./shared/NextButton"

export const User = () => {
    const { user, repository } = useContext(DataStore)
    const navigate = useNavigate()

    return (
        <div style={{ padding: spaceAround }}>
            <Header label={paths.user.toUpperCase()} />
            <Input
                placeholderInput={'Type your github username'}
                onChange={(val) => user.setUser(val)}
                value={user.value}
                spaceFrame={true}
            />
            <NextButton
                onClick={() => checkData(user.value, navigate, repository.value ? paths.sender : paths.repository)}
            >
                DONE
            </NextButton>
        </div>
    )
}