export const headers = {
    headers: {
        auth: localStorage.getItem("token")
    }
};

export const setHeader = (token) => {
    token && (headers.headers.auth = token)
    !headers.headers.auth && (headers.headers.auth = window.localStorage.getItem('token'))
}



