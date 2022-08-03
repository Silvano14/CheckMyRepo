import axios from "axios"
import { paths } from "../../App"

export const checkData = (
    value = '',
    navigate = () => { },
    targetNavigator = '/',
    isRepository = false,
) => {
    if (isRepository) {
        const { repository, user } = value
        if (repository.value && user.value)
            axios
                .get(`https://github.com/${user.value}/${repository.value}`)
                .then(() => navigate(`../${targetNavigator}`, { replace: true }))
                .catch((e) => {
                    if (e.response.status === 404)
                        navigate(`../${paths.badData}`, { replace: true })
                    else
                        navigate(`../${paths.badConnection}`, { replace: true })
                })
        else
            navigate(`../${paths.badData}`, { replace: true })
        return
    }

    if (!value) {
        navigate(`../${paths.badData}`, { replace: true })
        return
    }

    navigate(`../${targetNavigator}`, { replace: true })
}