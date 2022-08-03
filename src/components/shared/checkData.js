import { paths } from "../../App"

export const checkData = (
    value = '',
    navigate = () => { },
    targetNavigator = '/',
    isRepository = false,
) => {
    if (isRepository) {
        if (!isValidHttpUrl(value)) {
            navigate(`../${paths.badData}`, { replace: true })
            return
        }
    } else if (!value) {
        navigate(`../${paths.badData}`, { replace: true })
        return
    }
    navigate(`../${targetNavigator}`, { replace: true })
}

function isValidHttpUrl(string) {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}