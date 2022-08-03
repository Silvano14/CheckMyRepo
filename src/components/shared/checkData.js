import { paths } from "../../App"

export const checkData = (value, navigate, targetNavigator) => {
    if (!value) {
        navigate(`../${paths.badData}`, { replace: true })
        return
    }
    navigate(`../${targetNavigator}`, { replace: true })
}