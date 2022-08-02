import { useContext } from "react"
import { DataStore, paths } from "../App"
import { Header } from "./Header"
import { NextButton } from "./shared/NextButton"
import { SkeletonInput } from "./shared/SkeletonInput"

export const User = () => {
    const { user } = useContext(DataStore)

    return <>
        <Header label={paths.user.toUpperCase()} />
        <SkeletonInput
            placeholderInput={'Type your github username'}
            onChange={(val) => { user.setUser(val) }}
            value={user.value}
        />
        <NextButton>DONE</NextButton>
    </>
}