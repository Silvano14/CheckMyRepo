import { Navigation, paths } from "../App"
import { Header } from "./Header"
import { SkeletonInput } from "./shared/SkeletonInput"

export const User = () =>
    <>
        <Header label={paths.user.toUpperCase()} />
        <Navigation.Consumer>
            {values => (
                <SkeletonInput
                    placeholderInput={'Type your github username'}
                    onChange={(e) => { values.user = e.target.value }}
                />
            )}
        </Navigation.Consumer>
    </>