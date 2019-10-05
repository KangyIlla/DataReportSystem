if (!process.env.REACT_APP_DHIS2_BASE_URL)
    throw new Error(
        'This environment REACT_APP_DHIS2_BASE_URL variable must be set.'
    )

const baseUrl = `${process.env.REACT_APP_DHIS2_BASE_URL}/api/`

export const get = async endpoint =>
    await (await fetch(`${baseUrl}${endpoint}`, {
        //baseUrl + endpoint
        method: 'GET',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
        },
    })).json()

export const put = async (endpoint, data) =>
    await (await fetch(`${baseUrl}${endpoint}`, {
        //baseUrl + endpoint
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
    })).json()
